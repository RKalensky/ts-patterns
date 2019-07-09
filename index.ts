import { exec, fork } from 'child_process';
import { lstatSync, readdirSync } from 'fs';
// @ts-ignore
import { prompt } from 'inquirer';
import { resolve } from 'path';

const DEFAULT_TARGET_FOLDER = 'patterns';
const FOLDER_FLAG = '--folder';
const DEBUG_MODE_FLAG = '--debug-mode';

function isDirectory(source: any) {
	return lstatSync(source).isDirectory();
}

function getDirectories(source: any) {
	return readdirSync(source).reduce((dirs: any, name: string) => {
		if (isDirectory(resolve(source, name))) {
			dirs.push(name);
		}
		return dirs;
	}, []);
}

function runPattern(folder: string, file: string, options: string, debugMode: boolean) {
	console.log(`Running "${file}"...\n`);
	if (debugMode) {
		exec(`node ${options} ./${folder}/${file}/index.ts`);
	} else {
		fork(`./${folder}/${file}/index.ts`, options.split(' '));
	}
}

function getOptionsFlagValue(params: string, flag: string) {
	const target =  params
		.split(' ')
		.find((item) => item.indexOf(flag) > -1);
	return target && (target.split('=')[1] || 'true');
}

function isClearable(str: string) {
	return ![FOLDER_FLAG, DEBUG_MODE_FLAG].find((item) => str.includes(item));
}

function clearOptions(params: string) {
	return params
		.split(' ')
		.filter(isClearable)
		.join(' ');
}

function getOptionsString(collection: string[]) {
	return collection.join(' ');
}

async function main() {
	const sourceOptions = getOptionsString(process.argv.slice(2));
	const targetFolder = getOptionsFlagValue(sourceOptions, FOLDER_FLAG) || DEFAULT_TARGET_FOLDER;
	const isDebugMode = !!getOptionsFlagValue(sourceOptions, DEBUG_MODE_FLAG);
	const targetOptions = clearOptions(sourceOptions);
	const directories = getDirectories(resolve(__dirname, targetFolder));

	const { file } = await prompt({
		choices: directories,
		message: 'Please choose a file to be launched!',
		name: 'file',
		type: 'list',
	});

	runPattern(targetFolder, file, targetOptions, isDebugMode);
}

main();

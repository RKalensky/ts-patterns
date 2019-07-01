import { fork } from 'child_process';
import { lstatSync, readdirSync } from 'fs';
// @ts-ignore
import { prompt } from 'inquirer';
import { resolve } from 'path';

const PATTERNS_ROOT = 'patterns';

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
function runPattern(pattern: any) {
	console.log(`Running "${pattern}"...\n`);
	const subprocess = fork(`./${PATTERNS_ROOT}/${pattern}`, ['-r', 'ts-node/register']);
}

function isProvidedByUser(patterns: any, argPattern: any) {
	return argPattern
		&& patterns.find((dir: any) => dir.toLowerCase() === argPattern.toLowerCase());
}

async function main() {
	const argPattern = process.argv[2];
	const directories = getDirectories(resolve(__dirname, PATTERNS_ROOT));

	if (isProvidedByUser(directories, argPattern)) {
		runPattern(argPattern);
	} else {
		const { patternChoice } = await prompt({
			choices: directories,
			message: 'Please choose a pattern to be launched!',
			name: 'patternChoice',
			type: 'list',
		});
		runPattern(patternChoice);
	}
}
main();

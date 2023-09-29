import chalk from 'chalk';
import { readFileSync } from 'fs';
import path from 'node:path';
export function getHelpMessage(long: boolean) {
    const shortHelp = parseMd(path.join(import.meta.dir, 'HELPSHORT.md'));
    const longHelp = parseMd(path.join(import.meta.dir, 'HELP.md'));
    if (long) {
        return [shortHelp, longHelp].join('\n');
    } else {
        return shortHelp;
    }
}

function parseMd(path: string): string {
    return readFileSync(path, 'utf-8')
        .replace(/^(\s*)#+ (.+)/gm, (m, s, _) => s + chalk.bold(_))
        .replace(/`([^`]+)`/g, (m, _) => chalk.cyan(_));
}

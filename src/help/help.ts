import chalk from 'chalk';
import path from 'node:path';
export async function getHelpMessage(long: boolean) {
    const shortHelp = await parseMd(path.join(import.meta.dir, 'HELPSHORT.md'));
    const longHelp = await parseMd(path.join(import.meta.dir, 'HELP.md'));
    if (long) {
        return [shortHelp, longHelp].join('\n');
    } else {
        return shortHelp;
    }
}

async function parseMd(path: string): Promise<string> {
    return (await Bun.file(path).text())
        .replace(/^(\s*)#+ (.+)/gm, (m, s, _) => s + chalk.bold(_))
        .replace(/`([^`]+)`/g, (m, _) => chalk.cyan(_));
}

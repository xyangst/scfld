import { execSync } from 'node:child_process';
import fs from 'node:fs';
import { parseArgs } from '~/cli/parseArgs';
import { getHelpMessage } from '~/help/help' assert { type: 'macro' };
import { parseCustomInput, parseGitHubLink } from '~/stringParsing';

function clone(user: string, repo: string, folder: string) {
    const link = `https://github.com/${user}/${repo}`;
    console.log(link);
    const command = `git clone ${link}.git ${folder} --depth 1`;
    execSync(command);
    fs.rmdirSync(`${folder}/.git`, { recursive: true });
    execSync(`git init ${folder}`);
    //stage all
    execSync(`git -C ${folder} add .`);
    console.log('done');
}
export function scfld() {
    const { args, flags } = parseArgs(process.argv.slice(2));
    if (flags.help) {
        console.log(getHelpMessage(true));
        return;
    }
    if (args.length === 0)
        throw new Error('need to provide atleast one argument');
    let res;
    try {
        res = parseGitHubLink(args[0]);
    } catch (error) {
        res = parseCustomInput(args[0]);
    }
    if (!res) throw new Error('invalid syntax');
    console.clear();
    let folder = res.repo;
    if (!res.branch) {
        folder = res.repo;
        clone(res.user, res.repo, folder);
    } else {
        const temp = `/tmp/${crypto.randomUUID()}`;
        clone(res.user, res.repo, temp);
        const tempFolder = `${temp}/${folder}`;
        if (!fs.existsSync(tempFolder))
            throw new Error('sub folder doesnt exist');
        fs.mkdirSync(res.repo);
        fs.renameSync(tempFolder, folder);
        fs.rmdirSync(temp, { recursive: true });
    }
}

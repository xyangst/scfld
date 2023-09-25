import { execSync } from 'node:child_process';
import fs from 'node:fs';
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
function main(argv: string[]) {
    const input = argv[0];
    if (!input) return;
    const parts = input.split('/');
    if (parts.length < 2) return;
    const user = parts[0];
    const repo = parts[1];
    let folder = parts.slice(2).join('/');
    if (parts.length == 2) {
        folder = repo;
        clone(user, repo, folder);
    } else {
        const temp = `/tmp/${crypto.randomUUID()}`;
        clone(user, repo, temp);

        fs.mkdirSync(repo);
        fs.renameSync(`${temp}/${folder}`, folder);
        fs.rmdirSync(temp, { recursive: true });
    }
}
main(process.argv.slice(2));

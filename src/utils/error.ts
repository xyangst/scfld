import chalk from 'chalk';
export class err extends Error {
    constructor(msg: string, code = 1) {
        console.log(chalk.red('error: ') + msg);
        process.exit(code);
        super();
    }
}

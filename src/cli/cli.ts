import minimist from 'minimist';
export type flags = Record<'help' | 'force', boolean>;
export function cli(argv: string[]) {
    const args = minimist(argv);
    console.log(args);
    const flags: flags = {
        //url: (args.url || args.u) ?? false,
        help: (args.help || args.h) ?? false,
        force: (args.force || args.f) ?? false,
    };
    return { flags, args: args._ };
}
console.log(cli(process.argv.slice(2)));

import minimist from 'minimist';
type flags = 'url' | 'help';
export function parseArgs(argv: string[]) {
    const args = minimist(argv);

    const flags: Record<flags, boolean> = {
        url: args.url ?? false,
        help: args.help ?? false,
    };
    return { flags, args: args._ };
}

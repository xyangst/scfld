import minimist from 'minimist';
type flags = 'url';
export function parseArgs(argv: string[]) {
    const args = minimist(argv);

    const flags: Record<flags, boolean> = {
        url: args['--']?.includes('url') ?? false,
    };
    if (args._.length === 0)
        throw new Error('need to provide atleast one argument');
    return { flags, _: args._ };
}

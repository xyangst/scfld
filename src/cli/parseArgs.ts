import minimist from 'minimist';
import usage from '~/usage';
type flags = 'url';
export function parseArgs(argv: string[]) {
    const args = minimist(argv);

    const flags: Record<flags, boolean> = {
        url: args['--']?.includes('url') ?? false,
    };
    if (args._.length === 0)
        throw new Error('need to provide atleast one argument' + usage);
    return { flags, _: args._ };
}

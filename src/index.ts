import { cli } from './cli/cli';
import { getHelpMessage } from './help/help' assert { type: 'macro' };
import { scfld } from './scfld';
const config = {
    trace: false,
};
try {
    const { args, flags } = cli(process.argv.slice(2));
    scfld(args, flags);
} catch (error) {
    if (error instanceof Error)
        if (!config.trace) {
            console.log(getHelpMessage(false));
            console.error(error.message);
            process.exit(1);
        }
    throw error;
}

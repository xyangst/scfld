import { scfld } from './cli/run';
import { getHelpMessage } from './help/help' assert { type: 'macro' };
const config = {
    trace: false,
};
try {
    scfld();
} catch (error) {
    if (error instanceof Error)
        if (!config.trace) {
            console.log(getHelpMessage(false));
            console.error(error.message);
            process.exit(1);
        }
    throw error;
}

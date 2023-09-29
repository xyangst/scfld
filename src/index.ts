import { scfld } from './cli/run';
import usage from './usage';
const config = {
    trace: false,
};
try {
    scfld();
} catch (error) {
    if (error instanceof Error)
        if (config.trace) {
            console.error(error.message);
            console.log(usage);
            process.exit(1);
        }
    throw error;
}

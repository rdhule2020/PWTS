import fs from 'fs';
import path from 'path';

export class Logger {

    private static logDirectory = path.join(process.cwd(), 'logs');

    private static ensureLogDirectory() {
        if (!fs.existsSync(this.logDirectory)) {
            fs.mkdirSync(this.logDirectory, { recursive: true });
        }
    }

    private static write(
        level: string,
        message: string
    ) {
        this.ensureLogDirectory();

        const timestamp = new Date().toISOString();

        const logMessage =
            `[${timestamp}] [${level}] ${message}`;

        // Console
        console.log(logMessage);

        // File
        const logFile = path.join(
            this.logDirectory,
            'test.log'
        );

        fs.appendFileSync(
            logFile,
            logMessage + '\n'
        );
    }

    static info(message: string) {
        this.write('INFO', message);
    }

    static error(message: string) {
        this.write('ERROR', message);
    }

    static warn(message: string) {
        this.write('WARN', message);
    }
}

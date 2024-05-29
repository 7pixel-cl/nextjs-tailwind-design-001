const os = require('os');

const isWindows = os.platform() === 'win32';

module.exports = {
    // this will check Typescript files
    './src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
    // This will lint and format TypeScript and JavaScript files
    './src/**/*.(ts|tsx|js|jsx)': (filenames) =>
        isWindows ? [`yarn lint:fix --quiet '${filenames.join("' '")}'`] : [`yarn lint:fix --quiet ${filenames.join(' ')}`],
    // This will stylelint and format css and scss files
    './src/**/*.(css|scss)': (filenames) =>
        isWindows ? [`yarn lint:style '${filenames.join("' '")}'`] : [`yarn lint:style --quiet ${filenames.join(' ')}`],
};

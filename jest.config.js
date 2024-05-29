const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleDirectories: ['node_modules', '<rootDir>/src/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './html-report',
                filename: 'report.html',
                expand: true,
            },
        ],
    ],
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = createJestConfig(customJestConfig);

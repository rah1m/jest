module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/__test__/config/importJestDOM.ts'],
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@modules/(.*)$': '<rootDir>/js/app/modules/$1',
    },
};

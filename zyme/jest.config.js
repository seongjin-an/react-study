module.exports = {
    testEnvironment: 'jsdom',
    bail: false,//테스트 케이스 하나만 실패해도 제스트가 테스트를 종료하지 않게 한다.
    verbose: true,//제스트가 전체 테스트 결과를 요약해서 보여주지 않고 각 테스트의 결과를 보여준다.
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        // '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    // moduleNameMapper: {
    //     '^@/(.*)$': '<rootDir>/$1'
    // },
    "moduleNameMapper": {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    // testMatch: [
    //     '<rootDir>/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
    // ],
    // transformIgnorePatterns: ['<rootDir>/node_modules/'],
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss|svg)$',
    ],
};
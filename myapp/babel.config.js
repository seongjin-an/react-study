module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'//regenerator-runtime not found 라는 에러를 피하기 위해 설정 추가
                }
            }
        ],
        ['@babel/preset-react']
    ],
};
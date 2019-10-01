const CONFIG = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: [
                        'last 8 Chrome versions',
                        'last 4 Firefox versions',
                        'last 3 Safari versions',
                        'last 4 Edge versions',
                        'Firefox ESR',
                        'Chrome >= 55',
                        'Firefox >= 63',
                        'Safari >= 10.3',
                        'Edge >= 15',
                        'Opera >= 42'
                    ]
                },
                modules: false
            }
        ]
    ]
};

module.exports = function babelConfig(api) {
    api.cache(false);
    return CONFIG;
};


/**
 * @param selectMode {SelectMode}
 * @param selectTarget {SelectTarget}
 * @returns {*}
 */
module.exports.configureBabel = (selectMode, selectTarget) => {
    const presetEnvConfig = selectTarget({
        legacy: {
            modules: false,
            useBuiltIns: 'entry',
            corejs: '3',
            targets: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
            },
        },
        modern: {
            modules: false,
            useBuiltIns: 'entry',
            corejs: '3',
            targets: {
                browsers: [
                    'last 2 Chrome versions',
                    'not Chrome < 60',
                    'last 2 Safari versions',
                    'not Safari < 10.1',
                    'last 2 iOS versions',
                    'not iOS < 10.3',
                    'last 2 Firefox versions',
                    'not Firefox < 54',
                    'last 2 Edge versions',
                    'not Edge < 15',
                ],
            },
        },
    });

    const presets = ['@babel/preset-react', '@babel/typescript', ['@babel/preset-env', presetEnvConfig]];

    // define default plugin list
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-jsx',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-react-jsx',
        "@babel/plugin-transform-runtime",
        'graphql-tag',
        'import-graphql',
    ];

    // define default babel options
    const defaults = {
        babelrc: false,
        presets,
        plugins,
    };

    const options = {
        development: Object.assign({}, defaults, {
            presets: defaults.presets,
            plugins: defaults.plugins,
        }),
        production: Object.assign({}, defaults, {
            presets: defaults.presets,
            plugins: [
                ...defaults.plugins,
                selectTarget({ modern: 'transform-react-remove-prop-types' }),
                selectTarget({
                    modern: [
                        '@babel/plugin-transform-runtime',
                        {
                            corejs: true,
                            helpers: true,
                            regenerator: true,
                            useESModules: false,
                        },
                    ],
                }),
            ].filter(Boolean),
        }),
    };

    return selectMode(options);
};
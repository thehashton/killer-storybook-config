const { resolve } = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
    const rulesFn = require('../.webpack/rules').rules;
    const rules = rulesFn(
        {
            outputLegacy: '',
            generated: '',
            output: '',
            src: '',
        },
        input => input['development'],
        input => input['modern'],
    );
    delete rules[1].include;
    defaultConfig.module.rules = rules;
    defaultConfig.resolve.extensions = ['.ts', '.tsx', '.js'];

    return defaultConfig;
};
const { resolve } = require('path');

module.exports = ({ config }) => {
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
    config.module.rules = rules;
    config.resolve.extensions = ['.ts', '.tsx', '.js',];

    return config;
};
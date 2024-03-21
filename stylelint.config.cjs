module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-css-modules'],
    rules: {
        'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9]*(-[a-z0-9]+)*(__[a-z0-9-]+)?(--[a-z0-9-]+)?$',
        'import-notation': 'string',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'font-family-name-quotes': null,
        'shorthand-property-no-redundant-values': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'color-function-notation': null,
        'no-duplicate-selectors': null,
        'alpha-value-notation': null,
        'color-hex-length': null,
        'declaration-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'after-declaration'],
            },
        ],
        'custom-property-empty-line-before': null,
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'scss/at-import-partial-extension': ['always', { except: ['scss'] }],
    },
    ignoreFiles: ['.next/**/*'],
};
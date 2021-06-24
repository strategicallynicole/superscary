/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 16/06/2021 - 05:59:49
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/06/2021
    * - Author          :
    * - Modification    :
**/
module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'esVersion': 6,
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        }
    },
    plugins: ['ghost', 'react'],
    extends: [
        'plugin:ghost/node',
        'plugin:ghost/ember',
        'plugin:react/recommended',
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass",

            "pragma": "React",
            "version": "17.0",
            "flowVersion": "0.53",
        },
        "propWrapperFunctions": ["forbidExtraProps"]
    },
    "rules": {
        "ghost/sort-imports-es6-autofix/sort-imports-es6": "off",
        "ghost/ember/use-ember-get-and-set": "off",
        "no-console": "warn",
        "no-inner-declarations": "off",
        "no-multiple-empty-lines": "off",
        "no-mixed-spaces-and-tabs": "off",
        "space-in-parens": "off",
        "semi": "off",
        "no-constant-condition": "off",
        "valid-jsdoc": "off",
        "key-spacing": "off",
        "quotes": "off",
        "quote-props": "off",
        "indent": "off",
        "require-jsdoc": "off",
        "dot-notation": "off",
        "quotes": ["off", "backtick"],
        "consistent-return": ["off"],
        "arrow-body-style": [
            "off",
            "as-needed",
            { "requireReturnForObjectLiteral": true }
        ],
        "jsx-quotes": ["off", "prefer-double"],
        "semi": ["off", "never"],
        "object-curly-spacing": ["off", "always"],
        "comma-dangle": [
            "off",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "ignore"
            }
        ],
        "react/prop-types": [
            "off",
            {
                "ignore": ["children"]
            }
        ]
    }
};

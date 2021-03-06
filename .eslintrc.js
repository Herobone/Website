/*
 * Herobone Website
 * Copyright (c) 2022.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
    plugins: ["@typescript-eslint", "eslint-comments", "jest", "promise", "unicorn", "jsx-a11y", "react"],
    extends: [
        "eslint:recommended",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:jest/recommended",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "plugin:import/recommended",
        "prettier",
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/ignore": ["node_modules"],
    },
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        "no-prototype-builtins": "off",
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/destructuring-assignment": "off",
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        "react/jsx-filename-extension": "off",
        // Use function hoisting to improve code readability
        "no-use-before-define": "off",
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true, typedefs: true },
        ],
        // Common abbreviations are known and readable
        "unicorn/prevent-abbreviations": "off",
        "@typescript-eslint/naming-convention": "off",
        "import/no-useless-path-segments": "off",
        "unicorn/filename-case": [
            "warn",
            {
                cases: {
                    pascalCase: true,
                    camelCase: true,
                },
            },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "promise/no-return-wrap": "off",
        "no-console": "off",
        "jsx-a11y/label-has-associated-control": [
            "warn",
            {
                required: {
                    some: ["nesting", "id"],
                },
            },
        ],
        "no-plusplus": "off",
        "unicorn/no-null": "off",
        "import/order": "warn",
        "react/static-property-placement": "off",
        "react/require-default-props": "off",
        "unicorn/no-array-for-each": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-key": "warn",
        "react/display-name": "warn",
    },
};

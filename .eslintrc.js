module.exports = {
    "extends": [
        "standard",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
        "max-len": ["error", 80],
        "no-unused-vars": ["error", { "args": "none" }]
    }
};
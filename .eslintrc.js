module.exports = {
    root: true,
    env: {
      node: true,
      es6: true
    },
    extends: ["plugin:vue/essential", "@vue/typescript"],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off"
    },
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 2017,
      sourceType: "module"
    },
    overrides: [
      {
        files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
        env: {
          jest: true
        }
      }
    ]
  };
  
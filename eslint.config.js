import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{ts,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  {
    settings: {
      react: {
        version: "18.3",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
      "no-console": "error",
      "react/prop-types": "off",
      // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [
        1,
        { extensions: [".ts", ".tsx", ".js", ".jsx"] },
      ], //should add ".ts" if typescript project
    },
  },
];

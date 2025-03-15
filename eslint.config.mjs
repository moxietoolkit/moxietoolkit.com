import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react"; 
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { 
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        paths: {
          '@/*': ['./src/*']
        }
      }
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src']
          ],
          extensions: ['.js', '.jsx', '.json']
        }
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends("wesbos"),
];
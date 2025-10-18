import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores([ 'dist', 'reports', 'coverage' ]),
    tseslint.configs.recommended,
    {
        files: ['./src/*.ts']
    }
]);
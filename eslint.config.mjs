import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintCongifPrettier from 'eslint-config-prettier'

export default tseslint.config(
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        files: ['**/*.ts'],
        extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintCongifPrettier],
        rules: {
            'no-console': 'error',
            'no-useless-catch': 0,
            quotes: ['error', 'single', { allowTemplateLiterals: true }]
        }
    },

    // dotenv-flow restriction for all relevant files
    {
        files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        {
                            name: 'dotenv-flow',
                            message: 'Import dotenv-flow only in src/libs/utils/constants/environment/environment.ts'
                        }
                    ]
                }
            ]
        }
    },
    {
        files: ['src/libs/utils/constants/environment/environment.ts'],
        rules: {
            'no-restricted-imports': 'off'
        }
    }
)

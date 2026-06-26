import js from '@eslint/js'
import globals from 'globals'
import astro from 'eslint-plugin-astro'

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
]

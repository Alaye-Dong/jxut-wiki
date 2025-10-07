import antfu from '@antfu/eslint-config'
import pluginCasePolice from 'eslint-plugin-case-police'

export default antfu(
  {
    ignorePatterns: ['**/dist/**/*', '**/cache/**/*'],
    vue: true,
    typescript: true,
    markdown: true,
  },
  ...pluginCasePolice.configs.recommended,
)

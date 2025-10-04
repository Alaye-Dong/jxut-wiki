import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignorePatterns: ['**/dist/**/*', '**/cache/**/*'],
    vue: true,
    typescript: true,
    markdown: true,
  },
)

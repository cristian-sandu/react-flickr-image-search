module.exports = {
  'src/**/*.{ts,tsx}': ['yarn run fix:eslint', 'yarn run fix:format'],
  'src/**/*.{md,json}': ['prettier --write'],
  'src/**/*.{scss}': ['stylelint'],
}

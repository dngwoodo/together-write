module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and JavaScript files
  // This will Format MarkDown and JSON
  '**/*.(ts|tsx|js|md|json)': () => 'yarn lint',
};

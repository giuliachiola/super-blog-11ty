const svgoPath = '../../../super-styleguide/src/svg/svgo/'

module.exports = {
  svgoPath,
  siteUrl: process.env.URL || "http://localhost:8080",
  authorName: "Giulia Chiola",
  twitterUsername: "@giulia_chiola",
  googleVerification: process.env.GOOGLE_VERIFICATION,
  version: process.env.npm_package_version,
  versionStyleguide: '1.0.5' // inserimento manuale
}
// styleguide
// per conoscere la version:
// node -p -e "require('./super-styleguide/package.json').version"
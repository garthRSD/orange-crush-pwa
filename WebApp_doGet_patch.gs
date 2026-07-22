/**
 * Replace only your current doGet() with this version.
 *
 * ALLOWALL permits the Apps Script web app to appear inside the
 * installable Orange Crush PWA shell.
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Orange Crush')
    .addMetaTag(
      'viewport',
      'width=device-width, initial-scale=1, viewport-fit=cover'
    )
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
}

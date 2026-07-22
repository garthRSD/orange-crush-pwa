# Orange Crush PWA shell

This folder is a true installable PWA shell for the existing Google Apps Script web app.

## 1. Allow the Apps Script app to be embedded

In `WebApp.gs`, update `doGet()` so the returned `HtmlOutput` includes:

```javascript
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
```

A complete replacement is included in `WebApp_doGet_patch.gs`.

Deploy a new Apps Script version after making the change.

## 2. Connect the deployed Apps Script URL

Open `index.html` and replace:

```text
PASTE_APPS_SCRIPT_WEB_APP_URL_HERE
```

with the deployed `/exec` URL.

## 3. Host this folder over HTTPS

Good simple hosts:

- GitHub Pages
- Cloudflare Pages
- Netlify

Upload the contents of this folder without changing its structure.

## 4. Install it

### iPhone
Open the hosted PWA URL in Safari, tap Share, then **Add to Home Screen**.

### Android
Open the hosted PWA URL in Chrome and choose **Install app** or **Add to Home screen**.

## Important behavior

The PWA shell and icon are cached. The Orange Crush data app remains live and online because it runs inside the Apps Script iframe.

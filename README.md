# Korea Serious Game Institute — Annual Conference 2026 Website

A clean, bilingual (English / Korean) single-page conference site.

## Files
- `index.html` — Main page structure
- `styles.css` — Visual design (dark neon theme matching the poster)
- `content.js` — **All text content lives here** (English + Korean). Edit this file to update speakers, schedule, descriptions, etc.
- `script.js` — Language switching and dynamic rendering
- `images/` — Hero background and controller visual

## How to Update Content Later
1. Open `content.js` in any text editor.
2. Find the `en` or `ko` object.
3. Change any text, add/remove schedule items, or update the about paragraph.
4. Save the file and re-upload / redeploy.

Example: To change the schedule, edit the `scheduleItems` array inside the language object.

Speakers are currently placeholders. You can expand the speakers section in `index.html` or move speaker data into `content.js` for full dynamic control.

## Free Hosting Options
### Easiest: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag the entire `conference-site` folder onto the page.
3. You’ll get a free live URL instantly (e.g. `random-name.netlify.app`).
4. To update later: drag the updated folder again (or connect a GitHub repo for automatic deploys).

### GitHub Pages
1. Create a new public repository on GitHub.
2. Upload all files from this folder.
3. Go to Settings → Pages → set source to main branch / root.
4. Your site will be at `https://yourusername.github.io/repo-name`.

### Other free options
- Vercel (drag & drop or Git)
- Cloudflare Pages
- Any static web host

## Local Preview
Open `index.html` directly in a browser, or run:
```
python3 -m http.server 8080
```
Then visit http://localhost:8080

## Language Toggle
The button in the top-right switches between English and Korean. Preference is saved in the browser.

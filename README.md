# Birthday Special

A customizable birthday page with an animated countdown, a celebration card, a photo deck, and looping background music.

**Live site:** [https://harsh241104.github.io/Birthday-special/](https://harsh241104.github.io/Birthday-special/)

## Features

- Animated intro, floating hearts, bubbles, and confetti.
- A countdown that currently starts at 20 seconds when the page loads.
- Personalized birthday heading and message.
- A card with previous/next controls for up to 13 photos.
- Background music that starts after the visitor clicks **For you**. Browsers generally require a user interaction before playing audio.
- Automatic deployment to GitHub Pages when changes are pushed to `main`.

## Requirements

- Node.js 20 or newer
- npm
- Git

## Run locally

Clone the repository, install its dependencies, and start the development server:

```bash
git clone https://github.com/Harsh241104/Birthday-special.git
cd Birthday-special
npm ci
npm run dev
```

Open [http://localhost:3000/Birthday-special/](http://localhost:3000/Birthday-special/). The development server watches for code changes; stop it with `Ctrl+C`.

To create the production static export:

```bash
npm run build
```

The build creates the static site in `out/`; the GitHub Actions workflow publishes this directory to GitHub Pages.

## Personalize the page

### Greeting and message

Edit the heading, byline, and birthday messages in `src/components/birthday-celebration.jsx`.

### Countdown

The current countdown is set in `src/app/page.jsx`:

```js
const [birthdayDate] = useState(() => new Date(Date.now() + 20 * 1000))
```

Change `20` to the number of seconds you want for a quick preview. For a fixed date and time, replace the expression with a date, for example:

```js
const [birthdayDate] = useState(() => new Date("2027-04-28T00:00:00+05:30"))
```

The `+05:30` suffix is the timezone offset in that example. Use the offset for the intended celebration time.

### Photos

The photo deck uses these editable paths in `src/components/birthday-celebration.jsx`:

```text
./images/photo-01.jpeg
./images/photo-02.jpeg
...
./images/photo-13.jpeg
```

To add photos:

1. Create the `public/images` directory if it does not exist.
2. Add your image files there using the matching names above, or edit the `photos` array to match your filenames.
3. Keep the `./images/` path prefix. It makes images load correctly both locally and under this repository's GitHub Pages address.
4. Add and commit the image files if they should appear on the public site after deployment.

The repository currently contains no birthday photos. Until matching image files are added, the card displays a placeholder showing the expected file path. Only publish photos you have permission to share; files in a public repository and website can be viewed or downloaded by anyone.

### Background song

Replace `public/birthday.mp3` with your own MP3, keeping the same filename. Alternatively, change the audio `src` in `src/app/page.jsx` to the path of another file in `public`. The song loops after the visitor clicks **For you**.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys it to GitHub Pages whenever a commit is pushed to `main`. To use this workflow in a fork or another repository:

1. In GitHub, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
2. Update `basePath` and `assetPrefix` in `next.config.mjs` to match the repository name. For example, for a repository named `my-birthday`, use `/my-birthday`.
3. Push your changes to `main`, or run **Deploy Birthday Site to GitHub Pages** manually from the repository's **Actions** tab.
4. Wait for the workflow to finish, then open the Pages URL shown in the workflow or repository settings.

For this repository, the published URL is [https://harsh241104.github.io/Birthday-special/](https://harsh241104.github.io/Birthday-special/).

## Project structure

```text
src/app/page.jsx                         Countdown and celebration flow
src/app/layout.js                        Page metadata and global layout
src/components/countdown.jsx             Countdown display
src/components/birthday-celebration.jsx Greeting, message, and photo deck
src/components/Loader.jsx                Intro animation
src/components/confetti.jsx               Celebration confetti
src/components/floating-hearts.jsx        Floating heart animation
public/birthday.mp3                       Background music
public/images/                            Add personal photos here
.github/workflows/deploy-pages.yml        GitHub Pages deployment
next.config.mjs                           Static export and Pages URL settings
```

## License

No license has been specified. Unless a license is added, normal copyright restrictions apply; ask the repository owner before redistributing this project.

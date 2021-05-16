
# kishoregunnam.com

This is my personal website. Here I write blogs, add code snippets, code live demos, and add resources for everybody else to look refer.

The application is built with **Next.js/React/MDX**

## Overview

- `pages/api/*` - API routes for the [`Dashboard`](https://kishoregunnam.com/dashboard). Contains Twitter, Spotify, and Google Analytics APIs.

- `pages/blog/*` - Static pages rendered using MDX

- `pages/resources` - [Resources](https://kishoregunnam.com/resources) page

- `pages/snippets` - [Snippets](https://kishoregunnam.com/snippets) page to see all the ready to use code snippets.

- `pages/tweets` - my favourite [Tweets](https://kishoregunnam.com/tweets) from the twitter world.

- `pages/*` - All other static pages.

## Installation

```bash

git clone https://github.com/kishore-gunnam/portfolio.git

cd portfolio

yarn

yarn dev

```

or use NPM

```bash

git clone https://github.com/kishore-gunnam/portfolio.git

cd portfolio-website

npm install

npm run dev

```

### Running locally

To run the project locally, create a `.env.local` file and add the required API credentials there. Reference [`.env.example`](https://github.com/kishore-gunnam/portfolio/blob/master/.env.example) from the source for the list of API keys required.

## Built Using

- [Next.js](https://nextjs.org)

- [Tailwindcss](https://tailwindcss.com)

- [MDX](https://github.com/mdx-js/mdx)

- [Vercel](https://vercel.com)

- [Firebase](https://firebase.google.com/)

Special thanks to [Lee Rob](https://github.com/leerob) and [Manu Arora](https://github.com/manuarora700) for creating such a beautiful theme that is very well structured and looks amazing on all devices. All the design inspiration and MDX structure come from him.

If you're interested in learning Next.js and building real-world applications with it, I strongly suggest taking Lee's course [React 2025](https://react2025.com). I have taken it myself and can vouch for it.
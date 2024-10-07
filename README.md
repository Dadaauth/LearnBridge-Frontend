# <center> LearnBridge </center>

## Table Of Contents

- [Description](#description)
- [Technology](#technology-surfer)
- [Requirements](#requirements)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [Todo](#todo)

## Description

Learn Bridge is a web application developed to facilitate peer to peer learning in university campuses.
Built with [Next.js](https://nextjs.org/). Designed with [Tailwindcss](https://tailwindcss.com/) and [Nextui](https://nextui.org/)

## Technology :surfer:

- **Frontend**: Next.js, [Tailwind.css](https://tailwindcss.com), [NextUI](https://nextui.org)
- **Video Streaming Protocol**: [Dynamic Adaptive Streaming Protocol (DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- **Frontend Video player**: [Video.js](https://videojs.com/)
- **Icons**: [Material UI Icons](https://mui.com/material-ui/icons/)

## Requirements

- Node.js 20+ and npm

## Usage Guide

```shell
git clone https://github.com/Dadaauth/LearnBridge-Frontend
cd LearnBridge-Frontend/learn-bridge
```

Create a .env.development (or .env.production for production) file in the directory `LearnBridge-Frontend/learn-bridge`

```txt
NEXT_PUBLIC_API_URL=(backend api url)
NEXT_PUBLIC_API_STATIC=(source of static files)
```

run:

```shell
npm install
npm run dev
```

open web server at `http://localhost:3000`

## Project Structure

```text
.
|—— learn-bridge
|   |—— app
|   |—— components
|   |—— lib
|   |—— public
|   |—— .eslintrc.json
|   |—— jsconfig.json
|   |—— next-env.d.ts
|   |—— next.config.mjs
|   |—— package.json
|   |—— postcss.config.js
|   |—— tailwind.config.js
|   |—— tsconfig.json
|__ README.md
```

## TODO

- Refactor codebase to follow industry standard

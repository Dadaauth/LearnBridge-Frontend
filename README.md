# <center> LearnBridge </center>


## Table Of Contents

- [Description](#description)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)

## Description

Learn Bridge is a web application developed to facilitate peer to peer learning in university campuses.

## Usage Guide

```sh
git clone https://github.com/Dadaauth/LearnBridge-Frontend
cd LearnBridge-Frontend
cd learn-bridge
```

Create a .env.development (or .env.production for production) file in the directory `LearnBridge-Frontend/learn-bridge`

```txt
NEXT_PUBLIC_API_URL=(backend api url)
NEXT_PUBLIC_API_STATIC=(source of static files)
```

run:

```sh
npm install
npm run dev
```

open web server at `http://localhost:3000`

## Project Structure

1. Root
    - learn-bridge: Contains all source files
        - app: Contains next.js folder routing files
        - components: contains components required by next.js routes
        - lib: contains useful code reuseable by all components
        - public: contains static files
        -

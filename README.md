# UBlog

UBlog is a full-stack web application for creating blogs. It is built using [Remake.js](https://remaketheweb.com/) and [Tailwind CSS](https://tailwindcss.com/) (+ [DaisyUI](https://daisyui.com/)) for styling.

## Features

- Blog creation (w/ tags, title, content, visibility)
- User profiles (w/ picture, banner, bio)
- User pages to preview blogs and profile

## Installation

UBlog requires Node.js V16+ to run.

1. Clone the repository

```
git clone https://github.com/TinajeroOC/UBlog.git
cd UBlog
```

2. Install dependencies

```
npm install
```

3. Run remake configuration script

```
#!/usr/bin/env node

module.paths.push('./_remake')

const nanoidGenerate = require('nanoid/generate')
const dotRemake = require('utils/dot-remake')

dotRemake.writeDotRemake({
  generateUniqueIds: true,
  port: 3000,
  sessionSecret: nanoidGenerate('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 24)
})
```

> Create this file in the root directory and run it using `node {script}`

4. Run application in development mode

```
npm run dev
```

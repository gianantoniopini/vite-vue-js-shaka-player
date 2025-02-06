# Vite Vue JS Shaka Player

A simple Vue application using Vite, JavaScript and Shaka Player

This project is intended as a basic example of how to integrate [Shaka Player](https://github.com/shaka-project/shaka-player) into a Vue application using Vite and JavaScript.

## Table of Contents

- [Background](#background)
- [Features](#features)
- [Video files](#video-files)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Run dev](#run-dev)
- [Build for production](#build-for-production)
- [License](#license)

## Background

This project was inspired by [shaka-player-vuejs](https://github.com/davidjamesherzog/shaka-player-vuejs), but uses a more modern tech stack with Shaka Player version 4 (instead of Shaka Player version 3), Vue 3 (instead of Vue 2) and Vite (instead of Vue CLI).

## Features

You can select from a list of 6 sample videos and watch the chosen video.

## Video files

The manifest and image files of all sample videos used in this project are sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page).
The original video manifests have been converted from WebM to MP4 format with [FFmpeg](https://github.com/FFmpeg/FFmpeg), using this example command:

```sh
ffmpeg -i https://upload.wikimedia.org/wikipedia/commons/f/f5/Coyote_Keeping_a_Watchful_Eye.webm -c:v libx264 -profile:v main -vf format=yuv420p -c:a aac -movflags +faststart -crf 30 public/videos/TgvHMDTQENg_manifest.mp4
```

The converted manifest and the image of each video are stored in the [videos](./public/videos) directory.

## Prerequisites

This project requires [Node.js](http://nodejs.org) and [npm](https://npmjs.com) to be installed locally.

## Install

Install dependencies:

```sh
npm install
```

## Run dev

Start Vite dev server:

```sh
npm run dev
```

## Build for production

Produce application bundle:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## License

[MIT](LICENSE.md) © Gianantonio Pini

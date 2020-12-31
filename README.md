# React Crypto Tracker

A simple React application to track crypto currency prices. This is based on the tutorial from Dapp University on youtube.

This repo is written by hand, but I followed the tutorial pretty directly since I'm not at all familiar with React.

## Tutorial

Credits to `Dapp University` youtube channel for the tutorial.

Video: https://www.youtube.com/watch?v=jOgoQiCAy-g

Starter code: https://github.com/dappuniversity/crypto_tracker/tree/starter_code

Finished Code: https://github.com/dappuniversity/crypto_tracker

## Project diagram

The project uses [React](https://reactjs.org/) to power the frontend, uses [Coinpaprika](https://rapidapi.com/lbraciszewski/api/coinpaprika1) API to provide the crypto data. This is fetched using [axios](https://github.com/axios/axios) for a promises-based fetches.

This image is stolen directly from the main project repo. I inlined it here for convenience:

![Project diagram. React -> Axios -> RapidAPI -> coinpaprika.com](https://camo.githubusercontent.com/680699d03d04b7da2d694400f35d8cbf52b3953f7e605b632d27e2c95a1b9cb4/68747470733a2f2f692e6779617a6f2e636f6d2f65333037373764353137373635623634346434636639373538623064623535632e706e67)

## Dependencies / Requirements

Install `nodejs` and `npm` from here: https://nodejs.org/en/download/

## Building and Running Locally

1. Run `npm install` to install all of the dependencies from `package.json`.
2. Run `npm start` to run the react application and launch your website via `localhost`.

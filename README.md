<a name="fs-redux-starter"></a>

<div align="center">
  <a href="https://github.com/PrimeAcademy/fs-redux-starter">
    <img src="https://avatars.githubusercontent.com/u/9360728?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3>FS Redux Starter</h3>
  <p>
    <a href="https://github.com/PrimeAcademy/fs-redux-starter/issues">Report Bug</a>
    ·
    <a href="https://github.com/PrimeAcademy/fs-redux-starter/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-this-repo">About This Repo</a>
    </li>
    <li>
      <a href="#github-setup">GitHub Setup</a>
    </li>
    <li><a href="#local-setup">Local Setup</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ul>
</details>

## About This Repo

🕮 We will be building a Books Tracker application with a form and a list in separate components using [React](https://react.dev/) and [Redux](https://redux.js.org/)!

[Redux](https://redux.js.org/) is a state management library often used with React. It allows you to store your application [state](https://react.dev/learn/state-a-components-memory) in a central store outside of your components. Redux makes state changes predictable by enforcing certain restrictions on how and when updates can happen. Using Redux makes it easier to manage state across larger, more complex React applications.

[🔝 back to top](#fs-redux-starter)

## GitHub Setup

- [ ] **Create Repo from Use Template**:
  
  - Click [HERE](https://github.com/new?template_name=fs-redux-starter&template_owner=prime-digital-academy) or the `Use Template` button in this repo to create a new repo.
  - Ensure `Include all branches` is left unchecked.
  - Specify your username and repo name appropriately.
  - Provide a description for the repo (optional).
  - Set the repo as `Public`.
  - Click `Create repository`.

[🔝 back to top](#fs-redux-starter)

## Local Setup

- [ ] **Clone your Repo**:

  - Click the `<> Code` button in this repo and choose `SSH`.
  - Copy the URL. It should look something like: `git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`.
  - In your terminal, navigate to the directory where you want to clone this repo.
  - Execute `git clone git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`, replacing the placeholders with actual values.

- [ ] **Create Database in PostgreSQL (using Postico)**:

  - Create a database named `fs-redux-starter-db` in Postico with the values in your `pool.js` file.
  - Copy and paste the content from your `database.sql` into your PostgreSQL database.
  - Run the queries in the new database to populate your tables with data.

- [ ] **Install Node Dependencies**:

  - In the terminal, navigate to the folder you cloned this repo and run the following:

    ```shell
    npm install
    ```

[🔝 back to top](#fs-redux-starter)

## Instructions

- [ ] **Start the application**:

  - In the terminal, run the following to start the server:
  
    ```shell
    npm run server
    ```

  - In a second terminal, run the following to start the client:

    ```shell
    npm run client
    ```

The UI should open in your default web browser to the correct URL. If not, open [localhost:3000](http://localhost:3000) in your web browser.

> **NOTE:** The key combination `ctrl-c` will stop your server/client from running. Whichever current Node.js process is running in that terminal will stop on macOS.

Follow along with your instructor to create a splendid Books Tracker application! Happy Priming!

[🔝 back to top](#fs-redux-starter)

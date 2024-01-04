<div align=“center” style=“margin-top:20px”>
  <h3>Squadcast</h3>
</div>

<hr>

## Docs

- [Technical](#contributing)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)

#### Technologies

Let’s talk about the coarse architecture of this repo:

- **Typescript**: We use React to power our frontend apps. Almost all of the code you’ll touch in this codebase will be Typescript.

Here is a list of technologies we use:

- **React**: Frontend React app

#### Folder structure

```sh
TeleMEDix/
    ├── ...
    ├── src                    # source file of the app
    │   ├── asset              # Asset of the app like image, fonts
    │   ├── container          # react main compoents include in this folder
    │   ├── component          # react share component
    │   ├── helper             # helper folder which contains all utils
    │
    ├── public
    ├── ...


##### Rules

- **No `console.log`s in any file**: we are removing `console.log` after develping done.

### First time setup

The first step to running Oddz locally is downloading the code by cloning the repository:

```sh
git clone https://github.com/satpil/squadcast-assignment.git
```

After clone install the node modules:

```sh
npm install
```

To start the React server locally:

```sh
npm run dev
```
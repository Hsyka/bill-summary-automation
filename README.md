# utility-automation
 
-This script automates grabbing monthly utility statements

# Prerequisites

- Node.js
- dotenv
- git command-line tools
- A text editor (I recommend [Notepad++](https://notepad-plus-plus.org))
- A Nike.com account with a credit card already saved to the account for pre-filling

## Install Node.js

- Install [Node.js (LTS)](https://nodejs.org/en/download)
- Test your Node.js installation: First open a terminal (in Windows, you can do `WIN + R` then type `cmd` and hit `ENTER`), then type `node -v` and you should see something like `v10.16.0` (the current version as of right now).

## Install dotenv

- Install dotenv npm install dotenv --save

## Install git

- Install [git](https://git-scm.com/downloads)
- Test your git installation: First open a terminal (in Windows, you can do `WIN + R` then type `cmd` and hit `ENTER`), then type `git --version` and you should see something like `git version 2.8.1.windows.1` (the current version as of right now).

# Getting started

1. Clone this repository using git

- Open a terminal (in Windows, you can do `CTRL + R` then type `cmd` and hit `ENTER`)
- Enter the following:

`git clone https://github.com/tylerburleigh/nike-buy-bot.git`

2. Make sure you are in the bot directory within the terminal

`cd nike-buy-bot`

3. Install the Node.js dependencies

`npm install`

4. Using a text editor, edit the `bot.js` file in the bot directory. In this file, look for the section called `Parameters to set`. These are the parameters to change:

- user
- pass
- cv_code
- size
- url
- debug
- buy

5. Run the bot

Once you've configured the bot, you can run it

`node bot.js`

Ideally, you would run it right around the time of the drop.

# Screenshots

The bot works in a series of 9 "rounds", which include loading the shoe page, finding and clicking the desired shoe size, adding it to the cart, logging into your Nike.com account, and submitting an order.
# bill-summary-automation
 
-If you live with roommates and need to generate a statement including rent and utilities and any other costs, this is a fast way to grab everything in seconds.

-This script can navigate websites, take screenshots, and add up the numbers and asigns them to variables. It displays them in a console message by default, but you can do anything with them for other presentation methods.

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

`git clone https://github.com/tylerburleigh/bill-summary-automation`

2. Make sure you are in the bot directory within the terminal

`cd bill-summary-automation`

3. Install the Node.js dependencies

`npm install`

5. Run the bot

Once you've configured the bot, you can run it

`node autobill.js`

## Helpful Tips

- If you need to grab a specific element, you can always go to inspect website, right click the element, and copy the selector for direct path.

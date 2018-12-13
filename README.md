# Game of Life
This exercise creates 'Game of Life' code in Javascript.

The following rules needed to be applied:

* Any live bacteria cell with fewer than two live neighbours dies, as if caused by under-population
* Any live bacteria cell with two or three live neighbours lives on to the next generation.
* Any live bacteria cell with more than three live neighbours dies, as if by overcrowding.
* Any dead bacteria cell with exactly three live neighbours becomes a live bacteria cell, as if by reproduction.

This game is set up using Javascript in Visual Studio Code and testing is done with Jest and Enzyme.

## Step-by-step
- [x] Create a game board to show the cells
- [x] Calculate the amount of neighbours each cell has
- [x] If a cell has less then two neighbours, it dies
- [x] If a cell has 2 or 3 neighbours it lives
- [x] If a cell has more then 4 neighbours it dies
- [x] Any dead cell with exactly three live neighbours becomes a live cell again
- [x] Add a start button to continuously run the game
- [x] Add a random generator button to randomly select cells
- [x] Add a Reset button to reset the game

## Instructions
In order to get this working on your local machine please check if node is installed by typing this command into your terminal
```js
$ node -v
```
and then duplicate or fork this repository from https://github.com/NickBansal/GameOfLife

Inside this new directory, install the required NPM packages:
```js
$ npm install
```
Whilst in the main directory, in the terminal run the following command
```js
$ npm start
```
Click the Start button, Sit back and enjoy the show 

## Author
Nick Bansal
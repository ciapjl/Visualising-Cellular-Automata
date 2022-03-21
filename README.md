# Visualising Cellular Automamta

### Goal

This small project aims at providing a basic way to visualise simple cellular automata. It does so by focusing on the following (and consequently bracking up the project accordingly ): 

1. Conway's Game of Life
2. Elementary Cellular Automata


### Background on Cellular Automata

According to [this Wolfram MathWorld page](https://mathworld.wolfram.com/CellularAutomaton.html), a  *cellular automaton* is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states(alive or dead) of neighboring cells.

In other words, _any cellular automaton_ is defined by its:

a. initial state 
b. updating rule (which is function which maps cells and their neighbours in one generation to the next)

One reason for the interest in these cellular is the incongruence between the simplistic/deterministic updating rules 
and the complex high level visual phenomenon they produce.

Perhaps the most famous example of a cellular autamaton is Conway's Game of Life, a two-dimensional cellular automata which 
produces interesting high level patterns. Details and formulation of the game can be found [here on MathWorld](https://mathworld.wolfram.com/GameofLife.html) and [wikipedia here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

Another type of cellular automaton is the class of _elementary cellular Automata_. These are all the automata which are 

i. One dimensional
ii. The update rule only concers a cell's immediate neighbours and the value of the cell itself.

Hence, the update rule sends the value of three cells in one generation to the value of the cell in the following generation. A little combinatorics tells us that then that there are only $(2^4)^3=8^3=256$ are possible such rules. More details and a better explanation can be found [at MathWorld](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html).


### Implementation and Examples

As mentioned before, this project focuses solely on visualising (i) Conway's Game of Life and (ii) the elementary cellular automata. 

This was performed using the [p5.js](https://p5js.org/) library as it makes visualising easy to make.

The Game of Life is a 2-dimensional cellular automaton which means that any single generation occupies two dimensions on screen, so the updating is made across time and the visualisatoin "comes to life" by successively flashing the generations across the screen in order.

The Game of Life Visualtion is HERE

The elementary cellular automata are 1-dimensional. This means that to visualize them, we start with the first generation(or initial state) as a single row, which successive generations . This results in a static 2-dimensional image which represents the history of all the various generations. 

As mentioned the results can be quite visually suprising for what sounds to quite drab 



The specifics of the code can be found in the sketch.js file of each respective directory where comments help explain the coding logic.

Another way to visualise and see them is to



##### Potential Updates/Improvements

-
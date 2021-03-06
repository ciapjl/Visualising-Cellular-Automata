# Visualising Cellular Automamta

### Goal

This small project aims at providing a basic way to visualise simple cellular automata. It does so by focusing on the following (and consequently braking up the project accordingly ): 

1. Conway's Game of Life
2. Elementary Cellular Automata


### Background on Cellular Automata

According to [this Wolfram MathWorld page](https://mathworld.wolfram.com/CellularAutomaton.html), a  *cellular automaton* is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states(alive or dead) of neighboring cells.

In other words, _any cellular automaton_ is defined by its:

1. initial state 
2. updating rule (which is function which maps cells and their neighbours in one generation to the next)

One reason for the interest in these cellular is the incongruence between the simplistic/deterministic updating rules 
and the complex high level visual phenomenon they produce.

Perhaps the most famous example of a cellular automaton is Conway's Game of Life, a two-dimensional cellular automata which 
produces interesting high level patterns. Details and formulation of the game can be found [here on MathWorld](https://mathworld.wolfram.com/GameofLife.html) and [wikipedia here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

Another type of cellular automaton is the class of _elementary cellular Automata_. These are all the automata which are 

1. One dimensional
2. The update rule only concerns a cell's immediate neighbours and the value of the cell itself.

Hence, the update rule sends the value of three cells in one generation to the value of the cell in the following generation. A little combinatorics tells us that then that there are only $(2^4)^3=8^3=256$ are possible such rules. More details and a better explanation can be found [at MathWorld](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html).


### Implementation and Examples

As mentioned before, this project focuses solely on visualising (i) Conway's Game of Life and (ii) the elementary cellular automata. 

This was performed using the [p5.js](https://p5js.org/) library.

The Game of Life is a 2-dimensional cellular automaton which means that any single generation occupies two dimensions on screen, so the updating is made across time and the visualisation "comes to life" by successively flashing the generations across the screen in order.

The Game of Life Visualisation is [HERE](https://htmlpreview.github.io/?https://github.com/ciapjl/Visualising-Cellular-Automata/blob/main/GameOfLife/index.html)

The elementary cellular automata are 1-dimensional. This means that to visualize them, we start with the first generation(or initial state) as a single row, and successive generations are appended as rows beneath the first generation/row. This results in a static 2-dimensional image which represents the history of all the various generations. 

As mentioned the results can be quite visually suprising for what sounds to quite drab mathematical talk underlying the structure.

As mentioned above, there are $256$ possible rules and hence $256$ *elementary cellular automata* (although some exhibit the same high level behaviour). Instead of having $256$ distinct files - I opted to __create a template__ such that a single file could be used to generate all $256$ elementary cellular automata. Indeed, the template currently draws rule $90$ but 
could easily be altered to draw any rule by altering the __RULE_NUM__ variable(in decimal) to the desired rule/cellular automaton number. Rule 90 can be viewed [here](https://htmlpreview.github.io/?https://github.com/ciapjl/Visualising-Cellular-Automata/blob/main/ElementaryCellularAutomataTemplate/index.html)

Some of the various Rules are shown below using screenshots of the results(the number of the result can be seen by hovering over the image):

![Rule 30](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule30.png "Rule 30")

![Rule 45](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule45.png "Rule 45")

![Rule 90](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule90.png "Rule 90")

![Rule 94](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule94.png "Rule 94")

![Rule 99](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule99.png "Rule 99")

![Rule 118](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule118.png "Rule 118")

![Rule 150](ElementaryCellularAutomataTemplate/PicturesVariousRules/Rule150.png "Rule 150")




The specifics of the implementations can be found in the _sketch.js_ file of each respective directory where comments help explain the coding logic.

Another way to visualise and see them is to visit [this collection of sketches on the p5 js sketch editor](https://editor.p5js.org/jl.ciapparelli/sketches)



#### Potential Updates/Improvements

+ Finer ability to control FPS on game of Life or generation updates per second
+ A way to fix the size and scale of the elementary cellular automaton so as to get the correct visualizations
+An interface so that users can plug-in the desired Rule number and not have to manually insert it 
in the _ElementaryCellularAutomataTemplate/sketch.js_ file.
+ Potentially a better way to deal with edges on GameOfLife since its current behaviour activity seems to bias the edges.
+ Animate line by line the ECA so one can make the pattern emerging more exciting rather than having boring static images to look at.
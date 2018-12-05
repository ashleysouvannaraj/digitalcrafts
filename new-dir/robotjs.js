
var robot = require("robotjs");

// Move the mouse across the screen horizontally.
robot.setMouseDelay(2);
robot.moveMouseSmooth(-500, 500);

// types to screen when you run
robot.typeStringDelayed("I AM A FELLOW HUMAN AND NOT A ROBOT");
robot.keyTap("enter");



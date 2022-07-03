# pomodoroMvp1

First version made quickly with typical stack.


Problem:
How do we calculate 4 sets of 30 minute timers divided into 25 minute working periods and 5 minute breaks each?


Sub Problems:

1. How do we get and display time to the user?
2. What is needed to set up our first pomodoro?
3. How do we update the user of time (every second) to allow them to see their progress?
4. How do we stop the clock once we have completed a pomodoro?
5. How do we allow the user to start a break?
6. How do we extend the functionality to up to 4 pomodoros?
7. How do we congratulate the user for complete a full pomodoro?


-----------------------------------

July 1:

For some reason, I thought I could rework the logic and simplify this problem. So far, I seem to have created a mess for myself. I will take a break and try reworking my thought process later.

UPDATE:
As suspected, I have made this problem entirely too complicated by not taking the time to think through it properly initially. All that is really needed is a way to countdown from 60 then reduce the minutes until you hit 0.  Testing this new approacch in the terminal with node before implementing it with a server.


-----------------------------------

July 2:

Ok, the core part of the problem is solved. using setTimeout and an arrow function allows the countdown. Now, I can transfer my code from the testing section to display on the HTML.


-----------------------------------

July 3:

Officially, I have solved the timer problem - in MVP...in the console. Now, I will transfer the code over to a version that displays in the browser.


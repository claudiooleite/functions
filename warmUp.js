/*
    Write a function called "chill" that does the following:
    1. Prints out at the start: "Doing some chilling:"
    2. Then, prints out:
        "Chill... 1"
        "Chill... 2"
        "Chill... 3"
        ...
        "Chill... 10"
    3. Then finally prints out: "That was ice cold!""

    When you're done, call the function once.
*/

const chill = () => {
  let chill2 = "Chill... ";
  console.log("Doing some chilling:");
  for (let i = 1; i <= 10; i++) {
    chill2 = "Chill... " + i;
    console.log(chill2);
  }
  console.log("That was ice cold!");
};

chill();

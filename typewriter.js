const sentence = "hello there from lighthouse labs";

const animateString = function(string) {
  let startDelay = 0;
  let incrementer = 50;
  
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, startDelay += incrementer);
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, startDelay + 500);

};

animateString(sentence);
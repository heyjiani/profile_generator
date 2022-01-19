const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerList = {};

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  answerList.name = answer;
  rl.question(`What's an activity you like doing? `, (answer) => {
    answerList.hobby = answer;
    rl.question(`What do you listen to while doing that? `, (answer) => {
      answerList.music = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        answerList.meal = answer;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          answerList.dish = answer;
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            answerList.sport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              answerList.power = answer;

              process.stdout.write(`\nHey! My name is ${answerList.name}.\nI like to listen to ${answerList.music} while I'm ${answerList.hobby}. I like to eat ${answerList.dish} for ${answerList.meal}. My favourite sport is ${answerList.sport}. Also I'm really good at ${answerList.power}!\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
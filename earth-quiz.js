// importing required packages

var readlineSync = require("readline-sync");
const chalk = require('chalk');
const rAns = chalk.green;
const wAns = chalk.hex("#FF0000");
 
//Welcome note 
console.log(chalk.greenBright.bgBlack.bold("Welcome to Only One Earth Quiz\n"));
console.log(chalk.cyanBright("How much do you know about your Earth"));
console.log(chalk.cyanBright("Are you ready to check your knowledge on Earth\n"));

//Requesting Player name & greetings
var playerName = readlineSync.question(chalk.rgb(255, 136, 0)("Please enter your Name "));
console.log(chalk.yellow("Hey " + chalk.magentaBright(playerName) + ", glad to know one of my " + chalk.green("Earthmate\n")));

//Game rules display
console.log(chalk.blue.bold.bgWhite("Game Rules"));
console.log(chalk.bgGreen.blackBright.bold("+1 point for a right asnwer"));
console.log(chalk.bgRed.whiteBright.bold("-1 point for wrong asnwer\n"));

//question and answers bank - using array and object
var questionBank = [
  {
    //question #1
    question : "1. World Environment Day was celebrated for the first time under which slogan? ",
    options : ["A. Only One Future for Our Children", "B. Only One Earth", "C. A Tree for Peace " , "D. Gift to the Earth "],
    answer : "B",
    message : "Only One Earth, Thats how this quiz game got named"
  },
  {
    //question #2
    question : "2. The dumping wastes from _____becomes a major threat to the environment and soil in this technological era",
    options : ["A. Plastic", "B. Paper", "C. Computer", "D. Mobile"],
    answer : "C",
    message : "Computer, next time think before you dump"
  },
  {
    //question #3
    question :"3. What is the theme of World Environment Day 2020?",
    options : ["A. Air Pollution",  "B. Seven Billion People. One Planet. Consume with Care.",  "C. Raise Your Voice Not the Sea Level",  "D. Biodiversity"],
    answer : "D",
    message :  "Biodiversity, is vital for the survival of all living things no matter big or small, on land, or in water. We share the same Earth"
  },
  {
    //question #4
    question : "4. The gas which becomes a potential health hazard which is released to the air  by the  transportation",
    options : ["A. Nitrogen",  "B. Carbon-di-oxide",  "C. Hydrogen",  "D. Carbon monoxide"],
    answer : "D",
    message : "Think of CO ,before you snatch your vehicle key"
  },
  {
    //question #5
    question : "5. Name the Asian country which is polluted by the trash due to commercial mountaineering and also called the world’s highest rubbish dump",
    options : ["A. India", "B. Nepal",  "C. China",  "D. Bhutan"],
    answer : "B",
    message : "Mountaineering plan cool,but do not let any other country like Nepal to get such names"
  }
  // {
  //   //question #6
  //   question :
  //   options : 
  //   answer : 
  // },
  // {
  //   //question #7
  //   question :
  //   options : 
  //   answer : 
  // },
  // {
  //   //question #8
  //   question :
  //   options : 
  //   answer : 
  // },
  // {
  //   //question #9
  //   question :
  //   options : 
  //   answer : 
  // },
  // {
  //   //question #10
  //   question :
  //   options : 
  //   answer : 
  // }

]

//creating a variable/placeholder to store the players score
var playerScore = 0;

//an array to annouce the next questions
var announce = [
  "Here is the 1st question",
  "Here is the Second question",
  "Going good? 3rd one is here",
  "Keep going... 4th question",
  "One last question for you"
]

var playerAns;



//as I am not storing the different players score, thought of making a simple leader board
var leaderBoard = [
  {
    name : "Top1",
    points : 5
  },
  {
    name : "Top2",
    points : 4
  },
  {
    name : "Top3",
    points : 3
  },
  {
    name : "Top4",
    points : 2
  },
  {
    name : "Top5",
    points : 1
  }
]

//creating a fucntion when player wants to quit the game
function quitGame()
{
  console.log(chalk.bgWhite.bold.hex("#0D64FC")("\nHere Ends the Quiz\n"));
  for(var i=leaderBoard.length-1; i >=0; i--)
  //checking whether the player has bet any score in the leader board
  {
    if (playerScore === leaderBoard[i].points)
    {
      leaderBoard[i].name = playerName;
      console.log(chalk.bold.rgb(255, 136, 0)("Congrats!! " + playerName )+ chalk.bold.cyan(" You made " + (i+1) + " postion in the table\n"));
    }
  }

  //diplaying the leader board
  console.log(chalk.bgBlackBright(" Leader Board "));
  console.log(chalk.yellowBright.bgCyan.bold(" Player Name ")+ "-->" + chalk.yellowBright.bgCyan.bold(" Score "));
  for(var i=0; i < leaderBoard.length; i++)
  {
    console.log(chalk.yellowBright.bgCyan.bold(" "+ leaderBoard[i].name + " " )+ chalk.bold(" --> ")+chalk.yellowBright.bgCyan.bold(" "+leaderBoard[i].points + " "));
  }
  console.log();
}

//creating the game play
function game (que, ans, opts, msg)
{
  //printing a question
  console.log(chalk.bgBlue(que));
  //printing the options list using for loop
  for(var i=0; i < opts.length ; i++)
  {
    console.log(chalk.bgBlackBright.rgb(250,250,125)(opts[i]));
  }
  //reading player reponse
  playerAns = readlineSync.question("Choose your answer or Enter 'q' to quit ");

  //to avoid any bymistakenly entered key other than options
  //restricting and looping till the user enters either any of the option or else quitting the game
  while ((playerAns.toUpperCase() !== "A") && (playerAns.toUpperCase() !== "B") && (playerAns.toUpperCase() !== "C") && (playerAns.toUpperCase() !== "D") && (playerAns.toUpperCase() !== "Q") )
  {
    console.log(chalk.dim.bold("Please enter the appropriate option"));
    console.log(chalk.dim.bold("Or Enter Q to quit"));
    playerAns = readlineSync.question();
  }

  //checking for quit option entered
  if(playerAns.toUpperCase() === "Q")
  {
    quitGame();
  }
  //checking for the right answer and awarding a point
  else if(playerAns.toUpperCase() === ans)
  {
    console.log(rAns("Right Answer! Point awarded"));
    playerScore++;
    //printing the right answer and player's current score
    console.log(chalk.hex("#EE91E4")(msg));
    console.log(chalk.whiteBright.bgYellow("Your current score : " + playerScore + " ") + "\n");
  }
  //wrong answer and deducting the score
  else
  {
    console.log(wAns("Wrong Answer.. Sry you lost a point"));
    playerScore = playerScore == 0? playerScore : --playerScore;
    //printing the right answer and player's current score
    console.log(chalk.hex("#EE91E4")(msg));
    console.log(chalk.whiteBright.bgYellow("Your current score : " + playerScore + " ") + "\n");
  }
  

}

playerAns = readlineSync.question(chalk.dim.bold("Pres Enter to continue.. or Enter 'q' to Quit the quiz! "));

//Game start and looping the questions
for(var i=0; i<questionBank.length; i++)
{
  if(playerAns === "Q" || playerAns === "q" )
  {
    //playerAns = readlineSync.question(chalk.dim.bold("Pres Enter to continue.. or Enter 'q' to Quit the quiz! "));
    break;
  }
  //checking whether players wants to continue or quit
  if(playerAns !== "Q" || playerAns !== "q" )
  {
    console.log();
    console.log(chalk.blackBright.underline.hex("#FF9933")(announce[i])+"\n");
    game (questionBank[i].question, questionBank[i].answer, questionBank[i].options, questionBank[i].message)
    console.log(chalk.bold("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓"));    
  }
  else 
  {
    quitGame ();
    break; // recalled from my C knowledge and googled to use break
  }
//   if(i==questionBank.length-1)
//   {
//     quitGame();
//   }
  
}

//quitGame ();


// simple function to display the thanking note
function thanksNote()
{
  console.log(chalk.magentaBright("\nThanks for taking up the quiz. Hope you enjoyed it...") + chalk.bold.hex("#0D64FC")("\nIntention was to let you know few things of Environment, ") + chalk.hex("#FF3333")("Not to judge You!") + chalk.underline.red("\nGlobal Warming is REAL,") + chalk.greenBright(" Start taking small steps to save the Mother Earth"));
}

//After reading readlineSync document, got this feedback idea to make use of reading single key userInput without enter
if(readlineSync.keyInYN(chalk.blueBright("\nWould you like to rate this Quiz game?")))
{
  var ratings = [1,2,3,4,5];
  readlineSync.keyInSelect(ratings, chalk.magentaBright("Choose your rating"),{cancel:false});
  console.log(chalk.cyanBright("Thanks for the Rating!!"));
  thanksNote();
}
else
{
  thanksNote();
}

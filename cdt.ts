import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 4000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.karaoke("Welcome to Countdown Timer Made By Shan Ul Haq");
    await sleep();
    rainbowTitle.stop();
}

await welcome()


let timer = await inquirer.prompt([{
    name: "timers",
    type: "number",
    message: "Enter your Timer in Seconds:",
}
])

let seconds = timer.timers;

const makeIteration = (): void => {
    console.clear()
    if (seconds > 0) {
        console.log(`Your Time is remaining: ${seconds}`);
        setTimeout(makeIteration, 1000);    // 1000 millisecond = 1 second
        seconds -= 1;
    } else {
        console.log(chalk.bold.bgBlack.blueBright("---- HAPPY NEW YEAR ----"));
    
        console.log(chalk.bold.bgBlack.green("Thanks for using Countdown Timer Made By Shan Ul Haq"))
        
    }
};
// console.clear()
setTimeout(makeIteration,)


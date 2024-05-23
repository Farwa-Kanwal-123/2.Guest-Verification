#! /usr/bin/env node
//import inquirer
import inquirer from "inquirer";
//import chalk
import chalk from "chalk";
console.log(chalk.bgMagenta(chalk.bold("\n\t<<-----WellCome to Guest Verification Center----->>\t\n")));
console.log(chalk.cyanBright.bold(`[Guest List: farwa, zahid, soha, dua, wahab, ahmed, zain]`));
let myLoop = true;
let myInvitedGuestList = ["farwa", "zahid", "soha", "dua", "wahab", "ahmed", "zain"];
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            name: "userName",
            type: "Input",
            message: chalk.yellow.bold("Please Enter Your Name: "),
        }
    ]);
    let guestName = userInput.userName;
    //agr user name likhty huye kuch capital type kr raha hy to wo usy lower main convert kr k naam ko match kry ga
    let lowerGuestName = guestName.toLowerCase();
    //let {userName} = userInput;
    //console.log(guestName);
    if (myInvitedGuestList.includes(lowerGuestName)) {
        console.log(chalk.green.bold(`\n WellCome Mr/Miss ${chalk.cyan.bold(guestName)}! Please make yourself comfortable.`));
        console.log(chalk.green.bold("Thanks for Comming!\n"));
        myLoop = false;
    }
    else {
        console.log(chalk.red.bold(`\n Sorry Mr/Miss ${chalk.cyan.bold(guestName)}! Your name is not on the guest list for today..\n`));
        let askNameAgain = await inquirer.prompt({
            name: "otherName",
            type: "confirm",
            message: chalk.yellow.bold("Do you have another name you go by? if so,we can check again!"),
            default: false
        });
        if (!askNameAgain.otherName) {
            myLoop = false;
            console.log(chalk.magentaBright("\nWe apologize! but you are not on the guest list.Please contact the event organizer.Thank you!\n"));
        }
    }
}

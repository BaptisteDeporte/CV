const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const opn = require('opn');
const inquirer  = require('./inquirer');

async function main() {
    diplayTitle();
    var response = await run();
    if (response.result == "y") {
        displayCompetences().then();
        displayExperience();
        displayDiplome();
        displayContact();
        var ouais = await askLinkedIn();
        if (ouais.result == "y") {
            openLinkedIn();
        } else {

        }
    } else {

    }
}

main();

async function askForLinkedIn() {
    
}

async function run() {
    return new Promise(resolve => {
        const response = inquirer.askWantMore();
        resolve(response);
    });
}

async function askLinkedIn() {
    return new Promise(resolve => {
        const response = inquirer.askLinkedIn();
        resolve(response);
    });
}

function displayExperience() {
    console.log(
        chalk.yellow(
            figlet.textSync('Experiences', { horizontalLayout: 'full' })
        )
    );
    console.log(chalk.blue("Entreprise:"), "Atos - Nantes");
    console.log(chalk.blue("Projets:"), "HyperVision 360 - Veolia");
    console.log(chalk.blue("Technologies utilisées"), "Angular, Django, Spring");
    console.log(chalk.blue("Période"), "Septembre 2019 - Aout 2020");
    console.log("____________________");
    console.log(chalk.blue("Association:"), "EPSI Talks - Nantes");
    console.log(chalk.blue("Projets:"), "Portail web");
    console.log(chalk.blue("Technologies utilisées"), "Spring Boot, Angular");
    console.log(chalk.blue("Période"), "Janvier 2019");
    console.log("____________________");
    console.log(chalk.blue("Entreprise:"), "Siium - Nantes");
    console.log(chalk.blue("Projets:"), "Shwett");
    console.log(chalk.blue("Technologies utilisées"), "JS, php, Three.js");
    console.log(chalk.blue("Période"), "Juin - Juillet 2018");
}

function displayDiplome() {
    console.log(
        chalk.yellow(
            figlet.textSync('Formations', { horizontalLayout: 'full' })
        )
    );
    console.log(chalk.blue("Ecole:"), "EPSI - Nantes");
    console.log(chalk.blue("Diplome:"), "Expert en Informatique et Système d’Information");
    console.log(chalk.blue("Période"), "2017 - 2022");
    console.log(chalk.blue("Statut"), "En cours...");
    console.log("____________________");
    console.log(chalk.blue("Ecole:"), "EPSI - Nantes");
    console.log(chalk.blue("Diplome:"), "Concepteur Développeur d’Applications");
    console.log(chalk.blue("Période"), "2017 - 2020");
    console.log(chalk.blue("Statut"), "En cours...");
    console.log("____________________");
    console.log(chalk.blue("Ecole:"), "EPSI - Nantes");
    console.log(chalk.blue("Diplome:"), "BTS SIO Option SLAM");
    console.log(chalk.blue("Période"), "2017 - 2019");
    console.log(chalk.blue("Statut"), "Obtenu !");
    console.log("____________________");
    console.log(chalk.blue("Ecole:"), "Lycée Notre-Dame - Challans");
    console.log(chalk.blue("Diplome:"), "Baccalauréat Scientifique Option SVT");
    console.log(chalk.blue("Période"), "2014 - 2017");
    console.log(chalk.blue("Statut"), "Obtenu !");
}

function displayCompetences() {
    return new Promise( function(resolve) {
        console.log(
            chalk.yellow(
                figlet.textSync('Compétences', { horizontalLayout: 'full' })
            )
        );
        console.log(chalk.blue("Langage:"), "Javascript, PHP, Python, Java, C#");
        console.log(chalk.blue("Framework:"), "Django, Angular, Vue.js, Spring");
        console.log(chalk.blue("Base de données"), "MySQL, PostgreSQL, Oracle");
        console.log(chalk.blue("Logiciels"), "Jira, BitBucket, Gitlab, Github");
        resolve();
    }, 2000);
}

function displayContact() {
    console.log(
        chalk.yellow(
            figlet.textSync('Contact', { horizontalLayout: 'full' })
        )
    );
    console.log(chalk.blue("Téléphone:"), "0601020304");
    console.log(chalk.blue("Email:"), "baptiste.deporte@epsi.fr");
    console.log(chalk.blue("GitHub"), "https://github.com/BaptisteDeporte");
}

function diplayTitle() {
    console.log(
        chalk.yellow(
            figlet.textSync('Curriculum Vitae', { horizontalLayout: 'full' })
        )
    );
    console.log(
        chalk.yellow(
            figlet.textSync('Baptiste DEPORTE', { horizontalLayout: 'full' })
        )
    );
}

function openLinkedIn() {
    opn('https://www.linkedin.com/in/baptiste-deporte/');
}
const inquirer = require('inquirer');

module.exports = {
  askWantMore: () => {
    const questions = [
      {
        name: 'result',
        type: 'input',
        message: 'Voulez-vous en apprendre plus sur Baptiste ? (y/N)',
        validate: function( value ) {
          if (value != "y" && value != "N") {
            return 'Veuillez saisir les valeurs "y" ou "N"';
          } else {
            return true;
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  askLinkedIn: () => {
    const questions = [
      {
        name: 'result',
        type: 'input',
        message: 'Voulez-vous en savoir encore plus sur Baptiste ? (y/N)',
        validate: function( value ) {
          if (value != "y" && value != "N") {
            return 'Veuillez saisir les valeurs "y" ou "N"';
          } else {
            return true;
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};

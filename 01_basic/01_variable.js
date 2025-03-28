const accountId = 144553
let accountEmail = "mohit@google.com"
var accountPassword = "12345"
accountCity = "pune"

// accountId = 2 //not allowed

accountEmail = "bfduen@.com"
accountPassword ="23432"
accountCity = "mumbai"
let accountState;
/*
prefer not to use var because of issue in block scope nd functional scope


*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// {"image":"mcr.microsoft.com/devcontainers/universal:2"
//     // For format details, see https://aka.ms/devcontainer.json. For config options, see the
//     // README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node
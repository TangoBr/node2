const readline = require (`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// console.log(`Hello what is your name?`);

// rl.question( @params `question to ask as a string`, cb(data))
// rl.question(`what is your name?\n`, (answer) => {
//     console.log(`hello ${answer}, nice to meet you`);
//     rl.close();
// });

// console.log(`hello what is your name?`);

// rl.on(`line` , (input) => {
//     console.log(`hello ${input}, nice to meet you`);
//     rl.close();
// });

// rl.question(`What is your name\n`, name => {
//     const respone = {name} ;
//     rl.question(`what is your age?\n`, age =>
//     {
//         Response.age = age;
//         console.log(`hello ${response.name}, you are ${response.age} years old`)
//         // rl.close();
//     });
// });

// rl.on(`line`, input => {
//     if (input === `exit`) {
//         rl.close()
//     }
// });


// rl.question('What is your name?\n', name => {
// 	const response = { name };
// 	rl.question('What is your age?\n', age => {
// 		response.age = age;
// 		console.log(`Hello ${response.name}, you are ${response.age} years old.`);
// 		rl.close();
// 	});
// });

// rl.on(`line`, input => {
//     if(input === `exit`) {
//         rl.close();
//     } else {
//         console.log(input);
//     }
// });

// rl.on(`close`, () => {
//     console.log(`goodbye!`)
// });

// prompt takes a string prompt
// rl.setPrompt(`what is your age?);
// rl.prompt();


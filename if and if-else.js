// function xyz(name = "JOHN", age){
//     return "My name is " + name + " his age is "+ age;
// }
// let myName = xyz(undefined, 20); 
// console.log(myName);

// function abc(...args){
//     return args

// }
// console.log(abc)

// async function callApi() {
//     setInterval(() => {
//         console.log("Api called");
//     }, 3000);
// }

// await callApi();
// console.log("last step");

xyz();

function resolveAfter2seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 4000);
    });
}

async function xyz() {
    console.log("calling");
    const res = await resolveAfter2seconds();
    console.log(res);
}


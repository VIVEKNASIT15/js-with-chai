// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "vivek",
    "full name": "vivek nasit",
    [mySym]: "mykey1",
    age: 18,
    location: "surat",
    email: "vivek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "vivek@chatgpt.com"
// //console.log( Object.freeze(JsUser));
// JsUser.email = "vivek@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
console.log(JsUser.lastLoginDays);
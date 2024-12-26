//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = 1
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vivek",
            lastname: "nasit"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
 
const obj1 = {1:"a",2:"b"};
const obj2 = {2:"c",4:"b"};
const returnedobj1 = Object.assign(obj1,obj2)
console.log(obj1);


const users =[
    {
        id : 1,
        email : "v@gmail.com",    
    },
    {
        id : 2,
        email : "l@gmail.com",    
    },
    {
        id : 3,
        email : "ll@gmail.com",    
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const  course ={
    coursename :"javascript",
    price :"2000",
    courseInstructor :"vivek"

}
course.courseInstructor
 const { courseInstructor :instructor}= course


console.log(instructor);








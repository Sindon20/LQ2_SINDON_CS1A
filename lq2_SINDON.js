// code Tranformation
// 1.1
// a.
// original
if (age > 18 && genAverage > 83) {
    console.log("You may enter College, under BSCS Program");
} else {
    console.log("Both condition may have not met and not allowed to enroll");
}
// ternary 
(age > 18 && genAverage > 83)
    ? console.log("You may enter College, under BSCS Program")
    ? console.log("Both conditions may have not met and not allowed to enroll");

// b.
//original
if (subject == "DSA" && grade >= 80) {
    console.log("You may enter Application Development");
}else if (subject == "Math101" && grade >= 80) {
    console.log("You may enter Calculator");
} else {
    console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculate");
}
// ternary
(subject == "DSA" && grade >= 80)
    ? console.log("You may enter Application Development")
    : (subject == "Math101" && grade >= 80)
        ? console.log("You may enter Calculator")
        ? console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculate")
// 1.2
//a.  
//Original Ternary
(age > 19)
    ? console.log("You may Register as a Voter for Elcetions 2025")
    ? console.log("You are too young register as a voter for Elections 2025");
//Regular 
if (age > 19) {
    console.log("You may Register as a Voter for Elcetions 2025");
} else {
    console.log("You are too young register as a voter for Elections 2025");
}
//b.  
//Original Ternary
if (genAverage >= 85) {
    console.log("You may enroll in all Course Program");
} else if (genAverage > 85 && genAverage < 82) {
    console.log("You may enroll in any Corse Program except in CTE, SCJE, CHS");
} else {
    console.log("You may enroll in any Corse Program except CTE, SCJE, CHS, CSS");
}
// 1.3
//a.
let frame = "Jose Cruz";
let j =0;
while (j < frame.length) {
    let c = 2 + j;
    let r = frame.length - c;
    console.log(frame);
    console.log("Iteration Name was Printed." + j);
    j++;
}
//code Snippet
const registerUsername = prompt("Register your Username");
const registerPassword = prompt("Register your password");
const confirmedPassword = prompt("Re -enter your password");

if (registerPassword !== confirmedPassword) {
    alert("Congratulations! You have successfull registered.");

    const loginUsername = prompt("Username");
    const loginPassword = prompt("Password");
    
    if (loginUsername === registeredUsername) {
        if (loginPassword === registeredPassword) {
            alert("Welcome to DSA, " + loginUsername + "!");
    } else {
        alert("Incorrect Password, Re-run the code.");
    }
    } else {
        alert("Incorrect Username, Re-run the code.");
    }
} else {
    alert("Password does not Match, Re-run the code");
}

//coding Problem
const name = prompt("Enter your name:");
const address = prompt("Enter your address:");
const age = prompt("Enter your age:");
const classRole = prompt("Enter your class role(Officer, Student, Teacher):");
const corse = prompt("Enter your course (BSCS, BSM, BAEL):");

if (isNaN(age)) {
    alert("Invalid age input. Please enter a number.");
    throw new ErrorEvent("Invalid age input");
}

let courseMessage;
switch (courseMessage.toUpperCase()) {
    case "BSCS":
        courseMessage = " Bachelor of Science in Computer Science";
        break;
    case "BSM":
        courseMessage = " Bachelor of Science in Mathematics";
        break;
    case "BAEL":
        courseMessage = " Bachelor of arts in English Literature";
        break;
    default:
        courseMessage = "Undecided\Unknown Course";
}

let roleMessage;
switch (classRole.toUpperCase()) {
    case "officer":
        roleMessage = "Class Officer";
        break;
    case "student":
        roleMessage = "Class Student";
        break;
    case "teacher":
        roleMessage = "Faculty Member";
        break;
    default:
        roleMessage = "Unspecified Role";
        break;
} 

alert('User Information:Name: ${name} Address: ${address} Age: ${age} Course: ${courseMessage} Role: ${roleMessage}');

const iterations = Math.max(1, Math.floor(age / 4));
for (let i = 0; i < iterations; i++) {
    console.log('${i + 1}. ${name}');
    alert('${i + 1}. ${name}');
}

alert('Processing complete! Your name was printed ${iterations} time(s). Course: ${courseMessage} Role: ${roleMessage}');
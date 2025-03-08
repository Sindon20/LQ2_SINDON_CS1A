let creatMatrix = confirm("Do you want to create a Matrix?");
if (creatMatrix) {
    let num1 = paresInt(prompt("Enter the first limit for the nested loop:"));
    let num2 = paresInt(prompt("Enter the second limit for the nested loop:"));
    let num3 = paresInt(prompt("Enter the third limit for the nested loop:"));

    let str1 = prompt("Enter the first string (word):");
    let str2 = prompt("Enter the second string (char, number, symbol):");
    let str3 = prompt("Enter the third string (char, number, symbol):");
    
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num2; j++) {
            for (let k = 0; k < num3; k++) {
                console.log('${str1} ${str2} ${str3}');
            }
        }
    }
} else {
    console.log("Thank you, re-run the program if you change your mind.");
}
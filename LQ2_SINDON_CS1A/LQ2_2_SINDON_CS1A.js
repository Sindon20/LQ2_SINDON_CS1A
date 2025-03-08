function repeatDogBreed() {
    let dog_breed = prompt ("Enter a dog breed:");
    let print_count = parseInt(prompt("Enter the number of times to print;"));

    for(let i = 0; i < print_count; i++) {
        console.log(dog_breed);
    }
}

function priceInquiry() {
    console.log("A. Pepsi Cola\nB. Cacao Cola\nC. Apple (per kg)\nD. Orange (perkg)\nE. Hotdogs (per kg)");

    let item_choice = prompt("Enter your item choice (A-E):").toUpperCase();
    let QTY = perseInt(prompt("Enter your quantity;"));
    let Tot_Price = 0;
    
    switch (item_choice) {
        case 'A':
            Tot_Price = QTY * 1.5;
            break;
        case 'B':
            Tot_Price = QTY * 1.7;
            break
        case 'C':
            Tot_Price = QTY * 2.5;
            break
        case 'D':
            Tot_Price = QTY * 2.0;
        case 'E':
            Tot_Price = QTY * 3.0;
            break
        default:
            alert("No matching Item! Try to re-run the program.");
            return;
    }
    alert('The Total Price of the order ${item_choice} x ${QTY}: $${Tot_Price}');
    
}
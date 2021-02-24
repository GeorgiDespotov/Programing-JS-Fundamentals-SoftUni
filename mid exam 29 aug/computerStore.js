function computerStore(array) {
    let customer = array.pop();
    array = array.map(Number);
    let tab = 0;
    array.forEach(el => {
        if (el >= 0) {
            tab += el;
        } else {
            console.log(`Invalid price!`);
        }
    });
    let taxes = tab * 0.2;
    if (tab !== 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${tab.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        if (customer === 'special') {
            let totalPrice = (tab + taxes) * 0.9;
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        } else {
            console.log(`Total price: ${(tab + taxes).toFixed(2)}$`);
        }
    } else {
        console.log(`Invalid order!`);
    }
}
computerStore([
    
    'regular'
    ]);
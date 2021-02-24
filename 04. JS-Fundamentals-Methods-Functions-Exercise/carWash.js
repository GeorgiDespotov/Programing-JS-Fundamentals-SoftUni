function carWash(array) {
    function wasshin(arr) {
        i = 0;
        let command = arr[i];
        let value = 0;
        while (i < arr.length) {
            command == 'soap' ? value += 10 : value;
            command == 'water' ? value *= 1.2 : value;
            command == 'vacuum cleaner' ? value *= 1.25 : value;
            command == 'mud' ? value *= 0.9 : value;
            i++;
            command = arr[i];
        }
        return `The car is ${value.toFixed(2)}% clean.`
    }
    return wasshin(array);
}
console.log(carWash(['soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
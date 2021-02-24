function polindtomIntigers(array) {
    function polindrome(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let reverst = arr[i].toString();
            let rev = reverst.split('').reverse().join('')
            let isPolindrome = arr[i] === Number(rev) ? 'true' : 'false';
            result.push(isPolindrome);
        }
        return result.join('\n')
    }
    return polindrome(array);
}
console.log(polindtomIntigers([123, 323, 421, 121]));
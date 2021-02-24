function passValidator(pass) {

    function passLength(pass) {
        return pass.length >= 6 && pass.length <= 10 ? true : 'Password must be between 6 and 10 characters'
    }

    function validatorChar(pass) {
        let isValid = false;
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt();
            if (char >= 48 && char <= 57 ||
                char >= 65 && char <= 90 ||
                char >= 97 && char <= 122) {
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        return isValid ? true : 'Password must consist only of letters and digits'
    }

    function minDigits(pass) {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt();
            if (char >= 48 && char <= 57) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return 'Password must have at least 2 digits';
        }
    }
    let result = [];
    let trueCounter = 0;
    if (passLength(pass) !== true) {
        result.push(passLength(pass));
    } else {
        trueCounter++;
    }
    if (validatorChar(pass) !== true) {
        result.push(validatorChar(pass));
    } else {
        trueCounter++;
    }
    if (minDigits(pass) !== true) {
        result.push(minDigits(pass));
    } else {
        trueCounter++;
    }
    if (trueCounter == 3) {
        result.push('Password is valid');
    }

    return result.join('\n');
}
console.log(passValidator('Pa$s$s'));
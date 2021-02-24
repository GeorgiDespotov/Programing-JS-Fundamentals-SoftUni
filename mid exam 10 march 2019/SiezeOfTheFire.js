function seizeOfFire(array) {
    let line = array.shift().split('#');
    let water = Number(array.shift());
    let effort = 0;
    let totalFire = 0;
    let result = [];
    for (const i in line) {
        let command = line[i];
        let level = command.split(' = ')[0];
        let num = Number(command.split(' = ')[1])
        let isValid = false;
        switch (level) {
            case 'High':
                if (num >= 81 && num <= 125) {
                    isValid = true;
                }
                break;
            case 'Medium':
                if (num >= 51 && num <= 80) {
                    isValid = true;
                }
                break;
            case 'Low':
                if (num >= 1 && num <= 50) {
                    isValid = true;
                }
                
        }
        if (isValid) {
            if (water >= num) {
                water -= num;
                effort += num * 0.25;
                totalFire += num;
                result.push(num);
            } else {
                continue
            }
        }
    }
    console.log(`Cells:`);
    for (let el of result) {
        
        console.log(` - ${el}`);
    }
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);
}
seizeOfFire([
    'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
  ]
)
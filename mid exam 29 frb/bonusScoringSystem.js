/*function bonusScoryngSystem(array) {
    array = array.map(Number);
    let students = array.shift();
    let letcturCount = array.shift();
    let bonusPoints = array.shift();
    let arrBonus = [];
    //let maxScore = 0;
    
    //let points = 0;
    for (let i = 0; i < students; i++) {
        let = curScore = array[i];
        
        // if (curScore > maxScore) {
            //     maxScore = curScore;
            // }
            arrBonus.push(points);
        }
        let maxPoints = Math.max(...arrBonus)
        let maxAtend = Math.max(...array);
        let points = Math.ceil(maxAtend / letcturCount * (5 + bonusPoints));
    console.log(`Max Bonus: ${points}.`);
    console.log(`The student has attended ${maxAtend} lectures.`);
} 
дава 90/100*/

function bonusScoryngSystem(input) {
    input = input.map(x => Number(x))
    let students = input.shift()
    let lectures = input.shift()
    let initBonus = input.shift()
    let highestScore = 0;
    let totalBonus = 0;
    for (let i = 0; i < students; i++) {
        let student = input[i];
        
            if (student > highestScore) {
                highestScore = student;
                totalBonus = Math.ceil(highestScore / lectures * (5 + initBonus))
            }
        

    }
    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${highestScore} lectures.`);
}
// 100/100
bonusScoryngSystem([
    '5', '25', '30',
    '0', '0', '0',
    '1', '0'
]


)
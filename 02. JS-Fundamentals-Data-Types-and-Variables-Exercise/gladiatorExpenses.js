function solve(lost, helmet, sword, shield, armor) {
    let expenses = 0;
    let shieldBrouken = 0;

    for (i = 1; i <= lost; i++) {
        if (i % 2 == 0) {
            expenses += helmet;
        }
        if (i % 3 == 0) {
            expenses += sword;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shield;
            shieldBrouken++;
            if (shieldBrouken % 2 == 0) {
                expenses += armor;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7,
    2,
    3,
    4,
    5
)
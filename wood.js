/* 
fixed: per item wood requirements
1. chair = 3cft
2. Table = 10 cft
3. bed = 50cft 

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    // console.log(tableQuantity, chairQuantity, bedQuantity);

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);
function getZerosCount(number, base) {

    let multipliers = factorize(base);
    let maxMultiplier = 0;

    for (let i = 0; i < multipliers.length; i++) {
        if(maxMultiplier < multipliers[i])
            maxMultiplier = multipliers[i];
    }

    let divider = maxMultiplier;
    let zeros = 0;

    while (number > divider) {
        zeros += ~~(number / divider);
        divider *= maxMultiplier;
    }

    return ~~zeros

}

function factorize(base) {
    let j = 0;
    let i = 2;
    let a = [];
    do {
        if (base % i === 0) {
            a[j] = i;
            j++;
            base = base / i;
        } else{
            i++;
        }
    }
    while (i < base);
    a[j] = i;

    return a;
}

module.exports = getZerosCount;

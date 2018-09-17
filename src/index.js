module.exports = function getZerosCount(number, base){

    let numBase = base;
    let factorials = [];

    for (let i = 2; i <= Math.sqrt(numBase); i++){
        while (numBase % i === 0){
            factorials.push(i);
            numBase /= i;
        }
    }
    numBase !== 1 && factorials.push(numBase);

    let counter = [];
    let newFactorials = [];

    for (let i = 0, j = 0; i < factorials.length; i++, j++){
        if (factorials[i] !== factorials[i - 1]){
            newFactorials.push(factorials[i]);
            counter.push(1);
        }
        else {
            j--;
            counter[j]++;
        }
    }

    let zerosArray = [];

    newFactorials.forEach((newFac, i) => {
        numBase = number;
        zerosArray.push(0);

        while (numBase > 0) {
            numBase = Math.floor(numBase / newFac);
            zerosArray[i] += numBase;
        }

        zerosArray[i] = Math.floor(zerosArray[i] / counter[i]);
    });

    return zerosArray.sort((a,b) => a - b)[0];
};

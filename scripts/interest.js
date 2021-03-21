/**
 * This is a recursive method to figure out compond interest.
 * @param {number} amount initial amound to invest.
 * @param {number} times the amount of times the money will compond.
 * @param {number} interest the percent interest that the money will increase/compound.
 */
const compound = (amount, times, interest) => {
    if (times > 0) {    
        return compound((amount * ((interest/100)+1)), (times - 1), interest); // This is where we call the function again but with new inputs.
    }
    return amount;
};

/**
 * This is a recursive method to figure out compond interest.
 * @param {number} amount initial amound to invest.
 * @param {number} times the amount of times the money will compond.
 * @param {number} interest the percent interest that the money will increase/compound.
 * @param {number} additionalInvestment the amount you are adding each interval.
 */
const compoundAddition = (amount, times, interest, additionalInvestment) => {
    if (times > 0) {    
        return compoundAddition((amount * ((interest/100)+1)) + additionalInvestment, (times - 1), interest); // This is where we call the function again but with new inputs.
    }
    return amount;
};


function persistence(num) {
    let count = 0;
    if (num.toString().length === 1) {
      return count;
    }
    const multiplyDigits = (x) => {
        x = x.toString().split('');
      let newNum = 1;
      for (let i = 0; i < x.length; i++) {
          newNum = newNum * x[i];
      }
      return newNum;
    }
    do {
        count ++;
        num = multiplyDigits(num);
    } while (multiplyDigits(num).toString().length > 1) 
    return count;
}

let input = 11610034353958398;
let result = persistence(input);
console.log('The results are', result);

document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault();
    console.log('there');
    let initial = document.getElementById("initial").value;
    let times = document.getElementById("times").value;
    let interest = document.getElementById("interest").value;
    if (typeof parseInt(initial) === 'number' 
    && typeof parseInt(times) === 'number' 
    && typeof parseInt(interest) === 'number' && initial && times && interest) {
        document.getElementById('output').innerHTML = compound(initial, times, interest);
    } else {
        document.getElementById('output').innerHTML = "please fill out all fields.";
    }
    
    if (!isNaN(document.getElementById('output').innerHTML)) {
        document.getElementById('clear').style.display = "inline-block";
    }
});

document.getElementById("clear").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('initial').value = 'Initial Amount';
    document.getElementById('times').value = 'Times to Compound';
    document.getElementById('interest').value = 'Interest %';
    document.getElementById('output').innerHTML = '';
    document.getElementById('clear').style.display = "none";

});

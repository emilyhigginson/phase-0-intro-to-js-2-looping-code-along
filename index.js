const name = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';

function writeCards(names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArr;
}
function countDown (int) {
    let i=10;
    while (i >= 0) {
        console.log(i);
        i--
    }
    return int;
}
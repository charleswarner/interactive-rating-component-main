let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');


const btn = document.getElementById('submit');
const ratingCard = document.getElementById('card-one');
const thankYou = document.getElementById('thankyou');
const ratingDisplay = document.getElementById('ratingDisplay');

let ratingNumber = 0;
let ratingArray = [one, two, three, four, five];
let selectValue = '';

let item = document.getElementsByClassName('rating');
for (let i = 0; i < item.length; i++) {



}


one.addEventListener('click', () => {
    ratingNumber = 1;
    styleBtn(one);
    return ratingNumber;
});

two.addEventListener('click', () => {
    ratingNumber = 2;
    styleBtn(two);
    return ratingNumber;
});

three.addEventListener('click', () => {
    ratingNumber = 3;
    styleBtn(three);
    return ratingNumber;
});
four.addEventListener('click', () => {
    ratingNumber = 4;
    styleBtn(four);
    return ratingNumber;
});
five.addEventListener('click', () => {
    ratingNumber = 5;
    styleBtn(five);
    return ratingNumber;
});


function styleBtn(btns) {
    ratingArray = ratingArray.filter(e => e !== btns);
    btns.classList.add('selected');

    ratingArray.forEach(elem => elem.classList.remove('selected'))

    ratingArray = [one, two, three, four, five];
    console.log(ratingArray);
}


btn.addEventListener('click', () => {
    ratingCard.classList.add('hide');
    thankYou.classList.remove('hide');
    ratingDisplay.innerText = `You selected ${ratingNumber} out of 5`;
})

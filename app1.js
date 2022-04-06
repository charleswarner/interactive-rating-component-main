let item = document.getElementsByClassName('rating');
let ratingArray = [];
let ratingNumber = 0;
const btn = document.getElementById('submit');
const ratingCard = document.getElementById('card-one');
const thankYou = document.getElementById('thankyou');
const ratingDisplay = document.getElementById('ratingDisplay');

for (let i = 0; i < item.length; i++) {

    ratingArray.push(item[i]);
    // establish array of variables

    item[i].addEventListener('click', () => {
        ratingNumber = item[i].innerText;
        // displayValue(ratingValue);

        let ratingArrayUpdated = ratingArray.filter(e => e !== item[i]);
        ratingArrayUpdated.forEach(elem => elem.classList.remove('selected'))
        addStyle(item[i]);
    })
}

function displayValue(dog) {
    let ratingNumber = parseInt(dog);
    console.log(ratingNumber);
    return ratingNumber;

}
function addStyle(dog) {
    dog.classList.add('selected');
}
function removeStyle(dog) {
    if (dog) {
        console.log(dog);
    }
}

btn.addEventListener('click', () => {
    if (ratingNumber === 0) {
        alert('You must choose a rating')
    }
    else {
        ratingCard.classList.add('hide');
        thankYou.classList.remove('hide');
        console.log(ratingNumber)
        ratingDisplay.innerText = `You selected ${ratingNumber} out of 5`;
    }
})
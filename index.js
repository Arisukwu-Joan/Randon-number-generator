const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    number.innerHTML + randomNumber;

    let innerHTML = +(number.innerHTML)
    number.innerHTML = randomNumber;
};

btn.addEventListener('click', generateNumber);
generateNumber();

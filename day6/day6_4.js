function isEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is odd`);
    }
  });
}
function checkNumber(num) {
  isEvenNumber(num)
    .then(result => console.log(result))
    .catch(err => console.error(err))
}
checkNumber(4);
checkNumber(7);
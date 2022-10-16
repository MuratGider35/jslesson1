const palDiv = document.getElementById("palDiv");
const perfDiv = document.getElementById("perfDiv");
const palBtn = document.getElementById("palBtn");
const perfBtn = document.getElementById("perfBtn");

const isPalindrome = (x) => {
  if (x < 0) return false;

  let reversed = 0,
    y = x;

  while (y > 0) {
    const lastDigit = y % 10;
    reversed = reversed * 10 + lastDigit;
    y = (y / 10) | 0;
  }
  return x === reversed;
};

function is_perfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    return true;
    // console.log("It is a perfect number.");
  } else {
    return false;
    // console.log("It is not a perfect number.");
  }
}

// console.log(is_perfect(29));

perfBtn.addEventListener("click", () => {
  let first = parseInt(document.getElementById("min").value);
  let last = parseInt(document.getElementById("max").value);
  for (let i = first; i < last; i++) {
    if (is_perfect(i)) perfDiv.innerHTML += `${i} <br />`;
  }
});

palBtn.addEventListener("click", () => {
  palDiv.innerHTML = "";
  let first = parseInt(document.getElementById("min").value);
  let last = parseInt(document.getElementById("max").value);
  for (let i = first; i < last; i++) {
    if (isPalindrome(i)) palDiv.innerHTML += `${i} <br />`;
  }
});

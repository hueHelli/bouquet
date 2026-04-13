// I know it's cheap, but it will suffice
let flowerCount = 0;

function orangeTulip() {
  const title = document.getElementById("title");
  title.innerHTML = "You are kind";
  const elements = document.getElementsByClassName("orangeTulip");

  // Convert to an array and use forEach
  Array.from(elements).forEach((el) => el.remove());
  flowerCount++;
  if (flowerCount === 5) {
    setTimeout(() => {
      title.innerHTML = "I love you <3";
    }, 5000);
  }
}

function roseTulip() {
  const title = document.getElementById("title");
  title.innerHTML = "You are beautiful";
  const elements = document.getElementsByClassName("roseTulip");

  // Convert to an array and use forEach
  Array.from(elements).forEach((el) => el.remove());
  flowerCount++;
  if (flowerCount === 5) {
    setTimeout(() => {
      title.innerHTML = "I love you <3";
    }, 5000);
  }
}

function whiteRose() {
  const title = document.getElementById("title");
  title.innerHTML = "You have the purest soul";
  const elements = document.getElementsByClassName("whiteRose");

  // Convert to an array and use forEach
  Array.from(elements).forEach((el) => el.remove());
  flowerCount++;
  if (flowerCount === 5) {
    setTimeout(() => {
      title.innerHTML = "I love you <3";
    }, 5000);
  }
}

function redRose() {
  const title = document.getElementById("title");
  title.innerHTML = "You are caring";
  const elements = document.getElementsByClassName("redRose");

  // Convert to an array and use forEach
  Array.from(elements).forEach((el) => el.remove());
  flowerCount++;
  if (flowerCount === 5) {
    setTimeout(() => {
      title.innerHTML = "I love you <3";
    }, 5000);
  }
}

function violet() {
  const title = document.getElementById("title");
  title.innerHTML = "You listen to me";
  const elements = document.getElementsByClassName("violet");

  // Convert to an array and use forEach
  Array.from(elements).forEach((el) => el.remove());
  flowerCount++;
  if (flowerCount === 5) {
    setTimeout(() => {
      title.innerHTML = "I love you <3";
    }, 5000);
  }
}

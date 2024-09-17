const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const emoji = document.getElementById("emoji");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btnPrev = document.getElementById("btn0");
const btnEmoji = document.getElementById("btn2");
let previewsJoke = "";
let previewsEmoji = "";
// const maxHistory = 3;
const randomEmoji = () => {
  return Math.floor(Math.random() * (300 - 100) + 100);
};
// console.log(randomEmoji());
const getJoke = () => {
  jokeContainer.classList.remove("fade");

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      previousJoke = jokeContainer.textContent;
      previewsEmoji = emoji.innerHTML;
      emoji.innerHTML = `&#128${randomEmoji()}`;
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
      //   console.log(previewsJoke);
    });
};

getJoke();

const changeEmoji = () => {
  emoji.innerHTML = `&#128${randomEmoji()}`;
};

const showPreviousJokeEmoji = () => {
  if (previousJoke) {
    jokeContainer.textContent = previousJoke;
    emoji.innerHTML = previewsEmoji;
    previewsEmoji = "";
    previousJoke = ""; // Resetează pentru a nu reveni la acea glumă din nou
  }
};

btn.addEventListener("click", getJoke);
btnPrev.addEventListener("click", showPreviousJokeEmoji);
btnEmoji.addEventListener("click", changeEmoji);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowRight" ||
    event.key === "Enter" ||
    event.key === " "
  ) {
    getJoke();
  } else if (event.key === "ArrowLeft") {
    showPreviousJokeEmoji();
  }
});

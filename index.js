const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const jokeContainer = document.getElementById("joke");
const btnEmoji = document.getElementById("btn2");
const btnPrev = document.getElementById("btn0");
const emoji = document.getElementById("emoji");
const btn = document.getElementById("btn");
let previewsJoke = "";
let previewsEmoji = "";
//Generate Random Number for Emoji Code
const randomEmoji = () => {
  return Math.floor(Math.random() * (300 - 100) + 100);
};
// Get the Joke from the Back-End to the Front-End
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
    });
};
getJoke();

//Change Emoji Button
const changeEmoji = () => {
  emoji.innerHTML = `&#128${randomEmoji()}`;
};
//Show Previews Joke Button
const showPreviousJokeEmoji = () => {
  if (previousJoke) {
    jokeContainer.textContent = previousJoke;
    emoji.innerHTML = previewsEmoji;
    previewsEmoji = "";
    previousJoke = ""; // Resetează pentru a nu reveni la acea glumă din nou
  }
};
//Events Listeners
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

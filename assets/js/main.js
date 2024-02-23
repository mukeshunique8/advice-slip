const blockQuoteEl = document.querySelector("blockquote > p");
const refreshBtnEl = document.querySelector("button");

const API_URL = "https://api.adviceslip.com/advice";

refreshBtnEl.style.display = "none";

refreshBtnEl.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// // // Call the API.
// const adviseAPI = new XMLHttpRequest();
// adviseAPI.responseType = "json";
// adviseAPI.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     blockQuoteEl.textContent = adviseAPI.response.slip.advice;
//   }
// };
// adviseAPI.open("GET", "https://api.adviceslip.com/advice");
// adviseAPI.send();

// const result = fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((error) => console.error("Some network error: ", error));

async function getAdvicesData() {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Some network error: ", error);
  }
}

const adviceData = await getAdvicesData();

blockQuoteEl.textContent = adviceData.slip.advice;

// Display the buttona after loadin data
refreshBtnEl.style.display = "block";

//your JS code here. If required.
function updateOutput() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

updateOutput().then((message) => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
});

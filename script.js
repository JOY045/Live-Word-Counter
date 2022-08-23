let textArea = document.getElementById("textarea");
let characterCount = document.getElementById("character-count");
let wordCount = document.getElementById("word-count");

textArea.addEventListener("input", () => {
    characterCount.textContent = textArea.value.length;
    let txt = textArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
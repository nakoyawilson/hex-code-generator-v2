const color = document.querySelector(".color");
const hexcode = document.querySelector(".hexcode");
const hexcodeParagraph = document.querySelector("p")
const generateButton = document.querySelector(".generate");
const copyButton = document.querySelector(".copy");
const range = document.createRange();
const selection = window.getSelection();


const generateRandomColor = () => {
    return Math.random().toString(16).slice(2, 8).toUpperCase();
}

const selectCopiedText = () => {
    range.selectNodeContents(hexcodeParagraph);
    selection.addRange(range);
    setTimeout(() => {
        selection.removeAllRanges();
    }, 200);
}

const copyHexCode = () => {
    navigator.clipboard.writeText(hexcodeParagraph.textContent);
    selectCopiedText();
}

generateButton.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    color.style.backgroundColor = `#${randomColor}`;
    hexcode.textContent = randomColor;
})

copyButton.addEventListener("click", copyHexCode);


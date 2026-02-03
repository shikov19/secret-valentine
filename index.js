let noClickCount = 0;
const maxSize = 30;

function handleYes() {
    return window.location.href = "yes.html";
}

function handleNo() {
    noClickCount++;
    const yesButton = document.querySelector('.yes-button');
    const newSize = 1 + (noClickCount * 2);
    const finalSize = Math.min(newSize, maxSize);
    
    yesButton.style.transform = `scale(${finalSize})`;
    
    yesButton.style.transition = 'transform 0.3s ease-out';
}

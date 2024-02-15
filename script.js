const colorBox = document.getElementById('colorBox');
const colors = ['#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']; // Add more colors if needed

let currentColorIndex = 0;

colorBox.addEventListener('click', () => {
    colorBox.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

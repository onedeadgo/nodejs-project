document.getElementById('changeColorBtn').addEventListener('click', function() {
    const desk = document.getElementById('desk');
    const colors = ['hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(270deg)', 'hue-rotate(360deg)'];
    const currentColor = desk.style.filter;
    const newColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    desk.style.filter = newColor;
});

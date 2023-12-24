//Loader Function
function loader() {
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 100);
}

window.onload = fadeOut();

// Đợi 5 giây trước khi hiển thị thiệp Giáng Sinh với lời chúc
setTimeout(function() {
    var christmasCard = document.querySelector('.christmas-card');
    if (christmasCard) {
        christmasCard.style.display = 'block'; // Hiển thị thiệp Giáng Sinh
    }
}, 1000); 

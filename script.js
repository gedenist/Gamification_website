// Таймер для скидки
let discountDuration = 10 * 60; // 10 минут

// Показать всплывающее окно с анимацией
function showPopup() {
    let popup = document.getElementById('discountPopup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.classList.add('active'); // Запускаем анимацию
    }, 10);
}

// Закрыть всплывающее окно и сохранить таймер закрепленным внизу страницы
document.getElementById('closePopup').onclick = function() {
    let popup = document.getElementById('discountPopup');
    popup.classList.remove('active');
    setTimeout(function() {
        popup.style.display = 'none';
    }, 1000);

    // Показать таймер внизу страницы
    document.getElementById('stickyTimer').style.display = 'block';
};

// Открытие всплывающего окна при нажатии на закрепленный таймер
document.getElementById('stickyTimer').onclick = function() {
    document.getElementById('stickyTimer').style.display = 'none'; // Скрыть нижний таймер
    showPopup(); // Показать всплывающее окно
};

// Обновляем таймер
function updateTimer() {
    let minutes = Math.floor(discountDuration / 60);
    let seconds = discountDuration % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Обновляем оба таймера (во всплывающем окне и внизу страницы)
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    document.getElementById('stickyTimerDisplay').textContent = `${minutes}:${seconds}`;

    discountDuration--;

    if (discountDuration < 0) {
        clearInterval(timerInterval);
        document.getElementById('buyButton').disabled = true;
        document.getElementById('buyButton').textContent = 'Скидка истекла';
    }
}

// Запуск таймера при загрузке страницы
let timerInterval = setInterval(updateTimer, 1000);

// Покажем всплывающее окно сразу при загрузке страницы
window.onload = function() {
    showPopup();
};

// Кнопка "Купить со скидкой" с переходом на другую страницу
document.getElementById('buyButton').onclick = function() {
    window.open('https://static.wikia.nocookie.net/russia/images/f/fe/Kartinkijane.ru-73891.jpg/revision/latest/scale-to-width-down/1000?cb=20151115113123&path-prefix=ru', '_blank');
};

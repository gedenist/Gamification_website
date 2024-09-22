// Установите продолжительность скидки (в секундах)
let discountDuration = 10 * 60; // 10 минут

// Функция для обновления таймера
function updateTimer() {
    let minutes = Math.floor(discountDuration / 60);
    let seconds = discountDuration % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    discountDuration--;

    // Если время истекло
    if (discountDuration < 0) {
        clearInterval(timerInterval);
        document.getElementById('buyButton').disabled = true;
        document.getElementById('buyButton').textContent = 'Скидка истекла';
    }
}

// Запуск таймера при загрузке страницы
let timerInterval = setInterval(updateTimer, 1000);

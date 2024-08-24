(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



    document.getElementById('sendButton').addEventListener('click', function() {
        // Собираем данные формы
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Формируем текст сообщения для отправки в Telegram
        const telegramMessage = `Имя: ${name}\nEmail: ${email}\nТема: ${subject}\nСообщение: ${message}`;

        // Замените 'YOUR_BOT_TOKEN' на ваш токен бота
        const botToken = '7413336277:AAFLxPF6W0FN0T9Z3_Qrq0Bp08Xq0WU9uSI';
        // Замените 'CHAT_ID' на ваш ID чата (ID пользователя или группы)
        const chatId = '7484829584';


        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`)
            .then(response => {
                if (response.ok) {
                    alert('Сообщение отправлено!');
                } else {
                    alert('Ошибка при отправке сообщения.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при отправке сообщения.');
            });
    });

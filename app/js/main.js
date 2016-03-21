$(document).ready(function() {
    $('.maintain_block-item').hover(
        function() {
            $(this).addClass('animated bounce'); // Добавляем класс bounce
        },
        function() {
            $(this).removeClass('animated bounce'); // Убираем класс
        }
    )})
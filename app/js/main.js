$(document).ready(function() {
    $('.maintain_block-item').hover(
        function() {
            $(this).addClass('animated bounce'); // ��������� ����� bounce
        },
        function() {
            $(this).removeClass('animated bounce'); // ������� �����
        }
    )})
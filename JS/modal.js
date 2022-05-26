$('#openModal').on('click', function() {
    $('#videoPopUp').show();
});

$('.close').on('click', function() {
    $('#videoPopUp').hide();
    $('#myVideo').get(0).pause();
});
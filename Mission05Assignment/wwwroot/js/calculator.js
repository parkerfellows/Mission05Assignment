$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseFloat($('#hoursInput').val());
        var rate = parseFloat($('#rateInput').val());

        if (isNaN(hours) || hours <= 0) {
            $('#error').show();
            $('#totalOutput').val('');
        } else {
            $('#error').hide();
            var total = hours * rate;
            $('#totalOutput').val(total.toFixed(2));
        }
    });
});
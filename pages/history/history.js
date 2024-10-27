$(document).ready(function() {
    if ($('#historyTable tbody tr').length === 0) {
        $('.history-container').append('<p style="text-align: center; color: red;">No booking history available.</p>');
    }
});

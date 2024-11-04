<<<<<<< HEAD
$(document).ready(function() {
    $('#editProfile').on('click', function() {
        alert('bentar');
    });
});
=======
$(document).ready(function () {
    $(".btn-view-voucher").on("click", function () {
        const voucherName = $(this).data("voucher");
        $("#voucherDetail").text(`Detail for ${voucherName}`);
        $("#voucherModal").fadeIn();
    });

    $(".close-btn").on("click", function () {
        $("#voucherModal").fadeOut();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is("#voucherModal")) {
            $("#voucherModal").fadeOut();
        }
    });
});



const userData = {
    name: "Atyan AJG",
    username: "@atyanajg",
    email: "atyanajg@gmail.com",
    phone: "-"
};

$(document).ready(function() {
    $('.btn-edit').on('click', function() {
        $('#editName').val(userData.name);
        $('#editUsername').val(userData.username);
        $('#editEmail').val(userData.email);
        $('#editPhone').val(userData.phone);

        $('#editProfileModal').fadeIn();
    });

    $('#closeEditProfileModal').on('click', function() {
        $('#editProfileModal').fadeOut();
    });

    $('#saveProfileChanges').on('click', function() {
        userData.name = $('#editName').val();
        userData.username = $('#editUsername').val();
        userData.email = $('#editEmail').val();
        userData.phone = $('#editPhone').val();

        $('#editProfileModal').fadeOut();

        $('.profile-name').text(userData.name);
        $('.profile-username').text(userData.username);
        $('.detail-value').eq(0).text(userData.email);
        $('.detail-value').eq(1).text(userData.phone);
    });
});


>>>>>>> afzaal_1302220104

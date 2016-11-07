window.alert('hey')

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


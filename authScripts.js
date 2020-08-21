LoadAuthConfig = function()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/client_config.json", true);

    xhr.send(null);
}
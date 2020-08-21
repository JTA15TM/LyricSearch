LoadAuthConfig = function()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "client_config.json", true);

    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          alert(xhr.responseText);
        }
      
      }
}
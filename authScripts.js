LoadAuthConfig = function()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "client_config.json", true);

    onStartLoading();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            onErrorLoading();
        } else {
            onSuccessLoading(xhr.responseText);
        }
      }
      xhr.send(null);
}

onload = function()
{
    LoadAuthConfig();
}

onStartLoading = function()
{
    var component = "<img width=\"10%\" height=\"10%\" src=\"gifs/progress_bar.gif\"/>";
    document.getElementById("auth_state_view").innerHTML = component;
}

onErrorLoading = function()
{
    var component = "<p id=\"auth_error_title\">При загрузке данных произошла ошибка!</p>"
    + "<div id=\"auth_retry_button\" onclick=\"LoadAuthConfig();\">Повторить попытку</div>";
    document.getElementById("auth_state_view").innerHTML = component;
}

onSuccessLoading = function(response)
{
    var item = JSON.parse(response);
    var scopes = "";
    for(var i = 0; i < item.scopes.length; i++)
    {
        scopes += item.scopes[i].scope;
        if(i < item.scopes.length - 1)
        {
            scopes += ",";
        }
    }
    var link = "https://api.genius.com/oauth/authorize?client_id=" + item.client_id + "&redirect_uri=" + item.redirect_uri + "&scope=" + scopes + "&state=" + item.state + "&response_type=" + item.response_type;
    window.location.href = link;
}
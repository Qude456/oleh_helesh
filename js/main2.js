var userAvatar = document.getElementById("userImage");

var xhr = new XMLHttpRequest();


function search(){
  var res = document.getElementById("searchInput").value;
  xhr.open("GET", "https://api.github.com/users/"+res,true, "Qude456", "Gregory456");
  xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status === 200){
    var jsonResponse = JSON.parse(xhr.responseText);
    userAvatar.src = jsonResponse.avatar_url;
  }
}
xhr.send();
}

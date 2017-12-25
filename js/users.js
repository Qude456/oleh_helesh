var xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:1111")

var responseJson;
xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status === 200){
    responseJson = JSON.parse(xhr.responseText);

    createUi(responseJson);
    console.log(responseJson);
  }
}
xhr.send();

function getAllSubordinates(emplId, employees){
    var allSubords =[];
    getExactSubordinate(emplId);

    function getExactSubordinate(emplId){
      for (var i = 0; i < employees.length; i++) {
        if(employees[i].bossid === emplId){
          allSubords.push(employees[i]);
          getExactSubordinate(employees[i].id);
        }
      }
    }
    return allSubords;
}


function createUi(arrUsers){

  var parentDiv = document.getElementById("employeesWrapper");
  for (var i = 0; i < arrUsers.length; i++) {
      var currentDiv = document.createElement('div');
      currentDiv.classList.add("raw");
      currentDiv.innerHTML = ">> " + arrUsers[i].firstName + " " + arrUsers[i].lastName ;
      parentDiv.appendChild(currentDiv);
  }
}

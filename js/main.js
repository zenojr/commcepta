
function readFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if ( rawFile.readyState == 4 && rawFile.status == "200" ) {
          callback( rawFile.responseText );
      }
  }
  rawFile.send(null);
}

readFile( "/data/dados.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
  document.getElementById("nome_principal").innerHTML=  data[0].nome;
  document.getElementById("cargo_principal").innerHTML=   data[0].cargo;
  document.getElementById("idade_principal").innerHTML=    data[0].idade;
  document.getElementById("foto_principal").innerHTML= `<div class="avatar">
  <img id="foto_principal" src="img/funcionarios/` + data[0].foto + `" alt="Avatar"></div>`
  data.forEach(element => {
    
    
    var card = document.createElement('div');
    card.className = "funcionarios_cards"
  
    card.innerHTML =  `<div class="img_badge"> <span>` + element.id + 
    `</span></div><div onclick="clickAvatar(` + element.id +`)" class="avatar"><img src=img/funcionarios/` + element.foto + `></div><div class="avatar_description"><ul class="data_avatar"><li>` + element.nome + `</li><li>` + element.cargo + `</ul></div><div>` 
    
    document.getElementById("funcionarios_container").appendChild(card);
  });


});


document.getElementById("demo").innerHTML = cars[0];


function clickAvatar(id) {
  readFile( "/data/dados.json", function(text){
    var data = JSON.parse(text);
      
    idOut = id - 1;
    document.getElementById("nome_principal").innerHTML=  data[idOut].nome;
    document.getElementById("cargo_principal").innerHTML= data[idOut].cargo;
    document.getElementById("idade_principal").innerHTML= data[idOut].idade;
    document.getElementById("foto_principal").innerHTML= `<div class="avatar">
    <img id="foto_principal" src="img/funcionarios/` + data[idOut].foto + `" alt="Avatar"></div>`
  
  });
}


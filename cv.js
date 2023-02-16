fetch('https://randomuser.me/api/')
.then(response => response.json())
.then((json) => {console.log(json.results);
  /* json.forEach(usuario=>{

const li= document.createElement("li");
li.innerHTML=json.results[0].name;
listaUsuarios.appened(li);
})*/

   document.getElementById("nombre").innerHTML= json.results[0].name.first+" "+ json.results[0].name.last;
   document.getElementById("edad").innerHTML= "Edad: "+json.results[0].dob.age+ " años";
   document.getElementById("direccion").innerHTML= "Dirección: "+json.results[0].location.street.name+" "+json.results[0].location.street.number+", "+json.results[0].location.city+", "+json.results[0].location.state+", "+json.results[0].location.country;
   document.getElementById("telefono").innerHTML= "Telefono: "+json.results[0].phone;
   document.getElementById("Email").innerHTML= "Email: "+json.results[0].email;
   document.getElementById("imagenprincipal").src=json.results[0].picture.large;
})

//const user=json.results
//const obj =JSON.parse(user);
//document.getElementById("persona").innerHTML= obj.results;
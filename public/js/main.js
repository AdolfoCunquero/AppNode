let btnValidar = document.getElementById("validar_form")

btnValidar.addEventListener("click",function(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let email = document.getElementById("email").value 

    axios.post('/registration',{nombre:nombre,edad:edad,email:email}).then(function(res){
        let data = res.data
        mostrarMensaje(data.status, data.message)
        
    }).catch(function(err){
        console.log(err)
        mostrarMensaje("error","A ocurrido un error al procesar los datos")
    })
})

function mostrarMensaje(tipo,mensaje){
    Swal.fire(
        mensaje,
        '',
        tipo
      )
}
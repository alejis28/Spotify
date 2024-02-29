//1.URL
let url ="https://accounts.spotify.com/api/token"


//2. configura la peticion
let grantType="grant_type=client_credentials"
let clientid="client_id=d64f65dd000745cfbc794df8870e8d38"
let clientSecret="client_secret=c0f1979b032b46b4a1d074bebc2027ad"

let datosBody=grantType+'&'+clientid+'&'+clientSecret

//3.ejecute el consumo a traves del fetch
let peticion={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:datosBody

}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})//todo bien

.then(function(respuesta){
    console.log(respuesta.token_type)
    console.log(respuesta.access_token)
    let token=respuesta.token_type+" "+respuesta.access_token
    let urelCanciones="https://api.spotify.com/v1/artists/5ZNxiPcbKgaNcBrERMpqeu/top-tracks?market=us"
    let peticionCanciones={
        method:"GET",
        headers:{
            Authorization:token
            
        }
    }

    fetch(urelCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(respuesta){
         console.log(respuesta)
         console.log(respuesta.tracks[0].name)
         console.log(respuesta.tracks[0].preview_url)
         console.log(respuesta.tracks[0].album.images[0].url)
         
         let tituli1=document.getElementById("titulo1")
         tituli1.textContent=respuesta.tracks[0].name

         let imagen1=document.getElementById("imagen1")
         imagen1.src=album.images[0].url
         let audio1=document.getElementById("ausio1")
         audio1.src=respuesta.tracks[0].preview_url
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })


})//todo bien

.catch(function(respuesta){
    console.log(respuesta)
})//fallaste

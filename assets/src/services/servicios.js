// consultado apis

//1.declara una variable
//para almacenar la urel del api


let url="https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=us"

//2.almacenar en una variable
// o en variables datos de control
//

let token="Bearer BQCisqNYa4jNp-xEkrfCsN2cOLQOcVcOiBuZSMfRPGBqhYyhwGd50GLhGfRprfCVzvUSB0J5RxYHyxqe2yMuNNYl2InZ1Ra4Qnuico12xgutR_gLwEg"

//3
let peticion={
    method:"GET",
    headers:{
        Authorization:token
        
    }
}
//4
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})
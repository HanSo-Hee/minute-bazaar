const button= document.getElementById('get-location-button')

function gotLocation(position){

}


button.addEventListener('click', async() =>{
    const result=navigator.geolocation.getCurrentPosition(() =>{},() => {})
})
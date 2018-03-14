function autocomplete(input, latInput, lngInput){
    if(!input) return;

    const dropdown = new google.maps.places.Autocomplete(input)

    dropdown.addListener('place_changed', ()=>{
        const place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat()
        lngInput.value = place.geometry.location.lng()
    })

    //If enter is pressed on address field don't submit
    input.on('keydown', (e) => {
        if(e.keycode === 13){
            e.preventDefault()
        }
    })
}

export default autocomplete
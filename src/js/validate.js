
function validate(lat,lng) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let valid = false;
  lat = document.getElementById("species-lat");
  lng = document.getElementById("species-long");
  lat = parseFloat(lat.value);
  lng = parseFloat(lng.value);

  console.log(lat, lng);

  if (!isNaN(lat) && !isNaN(lng)) {
    if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      valid = true;
    }
  }
  
  let latLbl = document.getElementById("lat-lbl");
  let lngLbl= document.getElementById("lng-lbl");
  if(!(lat >= -90 && lat <= 90)) latLbl.innerHTML = '<label for="species-lat" id="lat-lbl">Latitude<span class="required">*</span><span class="wrong-values"> must be a valid Latitude (-90 to 90)</span></label>'
  else latLbl.innerHTML = '<label for="species-lat" id="lat-lbl">Latitude<span class="required">*</span></label>'
  if(!(lng >= -180 && lng <= 180)) lngLbl.innerHTML = '<label for="species-long" id="lng-lbl">Longitude<span class="required">* must be a valid Longitude (-180 to 180)</span></label>'
  else lngLbl.innerHTML = '<label for="species-long" id="lng-lbl">Longitude<span class="required">*</span></label>'
  
  return valid;
}

function submitForms(){
  let lat = document.getElementById("species-lat");
  let lng = document.getElementById("species-long");

  if(validate(lat, lng)){
    document.getElementById("global-form").submit();
  }
}
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  
  const form = document.querySelector('form');
  form.onsubmit = validate;
};



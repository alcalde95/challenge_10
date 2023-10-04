export  const stadeReadonly = (stade) => {
    document.getElementById('caja_nombre').readOnly = stade
    document.getElementById('species_caja').readOnly = stade
    document.getElementById('description_caja').readOnly = stade
    document.getElementById('soil_caja').readOnly = stade
    document.getElementById('temperature_caja').readOnly = stade
    document.getElementById('sun_caja').readOnly = stade
    document.getElementById('water_caja').readOnly = stade
    document.getElementById('multiplication_caja').readOnly = stade
    document.getElementById('foto').readOnly = stade
}
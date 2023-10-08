import { createContext } from 'react';

const TableUseStatescontext = createContext({
    "nombre_caja": "",
    "species_caja": "",
    "description_caja": "",
    "soil_caja": "",
    "temperature_caja": "",
    "sun_caja": "",
    "water_caja": "",
    "multiplication_caja": "",
    
    setNombreCaja: () => {},
    setSpeciesCaja: () => {},
    setDescriptionCaja: () => {},
    setSoilCaja: () => {},
    setTemperatureCaja: () => {},
    setSunCaja: () => {},
    setWaterCaja: () => {},
    setMultiplicationCaja: () => {},
});

export { TableUseStatescontext };
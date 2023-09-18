import React from 'react';
const MyEstadoGlobalContext = React.createContext({ email: 'NoEmail', setEmail: () => {} 
});
export {MyEstadoGlobalContext};
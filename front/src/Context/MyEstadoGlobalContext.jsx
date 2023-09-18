import React from 'react';
const MyEstadoGlobalContext = React.createContext({ user: 'NoUser', setUser: () => {} 
});
export {MyEstadoGlobalContext};
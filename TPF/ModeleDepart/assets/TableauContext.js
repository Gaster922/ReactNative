import React, { createContext, useState } from 'react';

// Créer le contexte
export const TableauContext = createContext();

// Fournisseur du contexte
export const TableauProvider = ({ children }) => {
  const [tableau, setTableau] = useState([]); // Le tableau partagé
  
  return (
    <TableauContext.Provider value={{ tableau, setTableau }}>
      {children}
    </TableauContext.Provider>
  );
};

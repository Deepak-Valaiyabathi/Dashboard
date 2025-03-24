import React, { createContext, useState } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [dataLogin, setDataLogin] = useState([
    {
      role: "Admin",
      password: 3535,
      roleId: 0,
    },
  ]);
  const [project, setProject] = useState([]);

  return (
    <DataContext.Provider
      value={{
        dataLogin,
        setDataLogin,
        project,
        setProject,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

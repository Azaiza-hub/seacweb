import React from "react";

const Layout = ({ children }) => {
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#3A9FF1",
      }}
    >
      <div style={{
       justifyContent:"center",
      }}>
        <div style={{
          display:"flex",
          justifyContent:"center",
          fontSize:"xx-large",
          color: "white",
          marginBottom:"50px"
        }}
        ><b>Sistema de Emergencia de Ayuda al Ciudadano</b></div>
        {children}
      </div>
    
    </div>
  );
};

export default Layout;

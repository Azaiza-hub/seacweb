import React from "react";

const Layout = ({ children }) => {
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        minHeight: "100vh",
        background: "#3A9FF1",
        paddingBottom: '2rem',
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

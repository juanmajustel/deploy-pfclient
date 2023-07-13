import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga durante 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Redirigir a "/home" después de la carga
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    }
  }, [isLoading, navigate]);

  return (
    <div>
      <div className="container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Landing;

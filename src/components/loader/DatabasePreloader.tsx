// components/DatabasePreloader.tsx
import { useEffect, useState } from "react";
import Loader from "./Loader";

// Define the type of the data you're fetching from the database
interface Data {
  id: number;
  titulo: string;
  resumen: string;
  contenido: string;
  orden: number;
  urlImagen: string;
}

interface DatabasePreloaderProps {
  apiUrl: string; // URL de la API donde obtendrás los datos
  children: React.ReactNode; // Los niños se mostrarán una vez cargados los datos
  delayMs?: number; // delay opcional
}

const DatabasePreloader = ({ apiUrl, children, delayMs = 500 }: DatabasePreloaderProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data[] | null>(null); // Ahora esperamos un arreglo de datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const result = await response.json();
        setData(result); // Guarda los datos obtenidos en el estado
        setTimeout(() => setLoading(false), delayMs); // Finaliza la carga después del delay
      } catch (error) {
        console.error(error);
        setTimeout(() => setLoading(false), delayMs); // En caso de error, también termina el loading
      }
    };

    fetchData();
  }, [apiUrl, delayMs]);

  if (loading) return <Loader />; // Muestra el loader mientras cargan los datos

  return (
    <>
      {data && data.length > 0 ? (
        children // Si hay datos, muestra el contenido de los niños
      ) : (
        <p>No se encontraron datos.</p> // Si no hay datos, muestra un mensaje
      )}
    </>
  );
};

export default DatabasePreloader;

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Paginacion  from '../components/Paginacion'
import axios from 'axios';

const Results = () => {
  const [searchParams] = useSearchParams();
  const [resultados, setResultados] = useState([]);
  const selectedTipo = searchParams.get('tipo');
  const selectedEdicion = searchParams.get('edicion');
  const selectedFormato = searchParams.get('formato');
  const selectedPague = searchParams.get('page');

  useEffect(() => {
    const selectedPague = searchParams.get('page');
    console.log("pagina:", selectedPague);
    window.scrollTo(0, 0);
    // Realizar la solicitud GET con Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/busqueda', {
          params: {
            tipo: selectedTipo,
            edicion: selectedEdicion,
            formato: selectedFormato,
            page: selectedPague,
          },
        });
        setResultados(response.data); // Asignar resultados obtenidos
        console.log("cuantos resultados :", resultados.length)
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };
    fetchData();
  }, [searchParams]);

  const manejarCambioPagina = (pagina) => {
    console.log('Página seleccionada:', pagina);
  };
  return (
    <div className="flex overflow-auto bg-gray-100">
      <div className="flex-1 flex flex-col bg-yellow-600 p-4 overflow-auto">
        {resultados.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 flex-grow">
            {resultados.map((resultado, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-center text-lg font-semibold">{resultado.nombre}</p>
                <img
                  src={`http://localhost:3000/imgs/${selectedFormato}/${resultado.edicion}/${resultado.numeracion}.${resultado.img}.webp`}
                  alt={`Imagen de ${resultado.nombre}`}
                  className="w-full h-auto object-contain "
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
        <div className="flex items-center justify-center bg-gray-100 bg-yellow-600">
          <Paginacion PaginaFinal={resultados.length } onChangePagina={manejarCambioPagina(selectedPague)} />
        </div>
      </div>
      <div className="w-1/4 bg-lime-700 flex items-center justify-center">
        <p>publicidad</p>
      </div>
    </div>
  );
};

export default Results;
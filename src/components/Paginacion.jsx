import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setPage } from "../Redux/Reducers/Search";
import { useSearchParams } from 'react-router-dom';

const Paginacion = ({ PaginaFinal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const selectedPague = searchParams.get('page');
  dispatch(setPage(selectedPague));
  const { page, tipo, edicion, formato } = useSelector((state) => state.search);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina < 1) return;

    // Actualizar Redux
    dispatch(setPage(nuevaPagina));

    // Obtener parámetros actuales de la URL y actualizar solo la página
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", nuevaPagina); // Solo cambia la página

    // Mantener los demás parámetros (tipo, edicion, formato)
    queryParams.set("tipo", tipo);
    queryParams.set("edicion", edicion);
    queryParams.set("formato", formato);

    // Redirigir con la nueva URL
    navigate(`/resultados?${queryParams.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 ">

      <button
        className={`px-4 py-2 rounded-lg text-white
        ${page === 1 ? 'bg-amber-600 cursor-not-allowed border' : 'bg-amber-900 hover:shadow-green-600'}`}
        onClick={() => cambiarPagina(page - 1)}
        disabled={page === 1}
      >
        Anterior
      </button>

      <div className="flex gap-2">
        {[+page - 2, +page - 1, page, +page + 1, +page +2].filter(p => p >= 1).map((pagina) => (
          <button
            key={pagina}
            className={`px-4 py-2 rounded-lg ${pagina === page ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => cambiarPagina(pagina)}
          >
            {pagina}
          </button>
        ))}
      </div>

      <button
        className={`px-4 py-2 rounded-lg text-white
        ${PaginaFinal < 12 ? 'bg-amber-600 cursor-not-allowed border' : 'bg-amber-900 hover:shadow-green-600'}`}
        onClick={() => cambiarPagina(+page + 1)}
        disabled={PaginaFinal < 12}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;


import logo from '../assets/imgs/logo-myl.png';
import filtros from '/public/filtros.json';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"; //redux
import { setTipo, setEdicion, setFormato, setPage  } from '../Redux/Reducers/Search'

const Navdar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {  page, tipo, edicion, formato } = useSelector((state) => state.search);

  const handleSearch = () => {
    dispatch(setPage(page));
    const queryParams = new URLSearchParams({
      tipo,
      edicion,
      formato,
      page: 1
    }).toString();
    navigate(`/resultados?${queryParams}`);
  };

  const handleHome = () => {
    navigate('/')
  }
  return (
    <div className='bg-amber-900 min-h-48 sticky top-0 z-50' >
    <div className=" h-36 flex flex-row space-x-5 justify-center items-center" >
      <img  className=" shadow shadow-white hover:shadow-green-600 flex-initial max-w-32"
            src={logo}
            alt="logo"
            onClick={() => handleHome()} />
    <div className='flex flex-col space-y-1 max-w-64 w-1/5  '>
      <label className='text-white' >Formato:</label>
      <select value={formato || "primerbloque"}
              className=" shadow shadow-white hover:shadow-green-600 flex-1 min-h-7"
              onChange={(e) => dispatch(setFormato(e.target.value))}
              >
        <option value="primerbloque">Primer Bloque</option>
        <option value="segundobloque">Segundo Bloque</option>
      </select>
    </div>
    <div className='flex flex-col space-y-1 max-w-64 w-1/5 '>
      <label className='text-white' >Edicion:</label>
      <select
        value={edicion || "Espada Sagrada"}
        className="shadow shadow-white hover:shadow-green-600 flex-1 min-h-7"
        onChange={(e) => dispatch(setEdicion(e.target.value))}
      >
        {filtros.formato && filtros.formato[formato] ? (
          filtros.formato[formato].map((edi, key) => (
            <option key={key}value={edi.replace(/ /g, '_')}>
              {edi}
            </option>
          ))
        ) : (
          <option value="error">problema al acceder a datos</option>
        )}
    </select>
    </div>
    <div className='flex flex-col space-y-1 max-w-64 w-1/5'>
      <label className='text-white' >Tipo de carta:</label>
      <select
        value={tipo}
        onChange={(e) => dispatch(setTipo(e.target.value))}
        className=" shadow shadow-white hover:shadow-green-600 flex-1 min-h-7 "
      >
        {filtros.tipo? filtros.tipo.map((tip, key) => (
          <option key={key} value={tip}>{tip}  </option>
        ))
         : <option value="error">problema al acceder a datos</option> }
      </select>
    </div>
    <div className='flex flex-col space-y-1 flex-end '>
      <label  className='text-white'>Por nombre:</label>
      <input type="text"  className=" shadow shadow-white hover:shadow-green-600 flex-1 w-16 min-h-7 max-w-64 min-w-48 text-black "/>
    </div>
    </div>
      <div className='flex justify-center items-center text-white '>
        <button className='border-2 py-1 px-6 shadow shadow-white hover:shadow-green-600'
                onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  )
};

export default Navdar;
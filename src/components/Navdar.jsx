import logo from '../assets/imgs/logo-myl.png'
import filtros from '/public/filtros.json'
import { useState } from 'react'

const Navdar = () => {
  const [selectedTipo, setSelectedTipo] = useState("todos");
  const [SelectedEdicion, setSelectedEdicion] = useState("Espada Sagrada")
  const [SelectedFormato, setSelectedtFormato] = useState("PrimerBloque")

  const handleSearch = () => {
    console.log("di click en la wea")
  }

  return (
    <div className='bg-amber-900 min-h-48'>
    <div className=" h-36 flex flex-row space-x-5 justify-center items-center" >
      <img className=" shadow shadow-white hover:shadow-green-600 flex-initial max-w-32" src={logo} alt="logo" />
    <div className='flex flex-col space-y-1 max-w-64 w-1/5  '>
      <label className='text-white' >Formato:</label>
      <select value={SelectedFormato}
              className=" shadow shadow-white hover:shadow-green-600 flex-1 min-h-7"
              onChange={(e) => setSelectedtFormato(e.target.value)}
              >
        <option value="PrimerBloque">Primer Bloque</option>
        <option value="SegundoBloque">Segundo Bloque</option>
      </select>
    </div>
    <div className='flex flex-col space-y-1 max-w-64 w-1/5 '>
      <label className='text-white' >Edicion:</label>
      <select
        value={SelectedEdicion}
        className="shadow shadow-white hover:shadow-green-600 flex-1 min-h-7"
        onChange={(e) => setSelectedEdicion(e.target.value)}
      >
        {filtros.formato && filtros.formato[SelectedFormato] ? (
          filtros.formato[SelectedFormato].map((edi, key) => (
            <option key={key} value={edi}>
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
        value={selectedTipo}
        onChange={(e) => setSelectedTipo(e.target.value)}
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
                onClick={() => handleSearch()}>
          Buscar
        </button>
      </div>
    </div>
  )
};

export default Navdar;
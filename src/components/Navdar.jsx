import logo from '../assets/imgs/logo-myl.png'
import filtros from '/public/filtros.json'
import { useState } from 'react'

const Navdar = () => {
  const [selectedTipo, setSelectedTipo] = useState("");
  console.log(selectedTipo);

  return (
    <div className="bg-amber-900 h-36  flex flex-row space-x-5 justify-center items-center" >
      <img className=" shadow shadow-white hover:shadow-green-600 flex-initial max-w-32" src={logo} alt="logo" />
    <div className='flex flex-col space-y-4 max-w-64 w-1/5  '>
      <label className='text-white' >Formato:</label>
      <select value="formato"  className=" shadow shadow-white hover:shadow-green-600 flex-1 min-h-7">
        <option value="1">Primer Bloque</option>
        <option value="2">Segundo Bloque</option>
      </select>
    </div>
    <div className='flex flex-col space-y-4 max-w-64 w-1/5 '>
      <label className='text-white' >Edicion:</label>
      <select value="edicion"  className=" shadow shadow-white hover:shadow-green-600 flex-1 min-h-7  ">
        <option value="1">primer bloque pb</option>
        <option value="1">opcion1</option>
      </select>
    </div>
    <div className='flex flex-col space-y-4 max-w-64 w-1/5'>
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

    <div className='flex flex-col space-y-3 flex-end '>
      <label  className='text-white'>Por nombre:</label>
      <input type="text"  className=" shadow shadow-white hover:shadow-green-600 flex-1 w-16 min-h-7 max-w-64 min-w-48 text-black "/>
    </div>
    </div>
  )
};

export default Navdar;
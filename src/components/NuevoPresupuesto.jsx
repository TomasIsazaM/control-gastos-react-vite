import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMesaje] = useState('')  

  const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!presupuesto || presupuesto < 0){
            setMesaje('No es un presupuesto valido')

            return
        }
        setMesaje('')
        setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>

                <input
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='añade tu presupuesto'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value='Añadir' />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto
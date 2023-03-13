import { formatearFecha } from '../helpers/helpers'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoEntretencion from '../assets/img/icono_ocio.svg'
import IconoOtros from '../assets/img/icono_gastos.svg'

const diccionarioIconos = {
  vivienda: IconoCasa,
  alimentacion: IconoComida,
  salud: IconoSalud,
  entretencion: IconoEntretencion,
  otros: IconoOtros,
}

const Gasto = ({ gasto }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto // Destructuring para no tener que escribir gasto.nombre, gasto.cantidad, etc.
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img
          src={diccionarioIconos[categoria]}
          alt='Icono gasto'
        />
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
          <p className='gasto'>{nombre}</p>
          <p className='fecha-gasto'>
            Agregado el: {''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

export default Gasto

import { Link } from 'react-router-dom';
import './tarjetas-categorias.css';

function TarjetasCategorias() {

    return (
        <aside className='tarjetascategoriacontainer'>
            <Link to='/personajes'>
                <div className="tarjetascategoriapersonajescontainer">
                    <h3>Personajes</h3>
                </div>
            </Link>
            <Link to='/episodios'>
                <div className="tarjetascategoriaepisodioscontainer">
                    <h3>Episodios</h3>
                </div>
            </Link>
        </aside>
    )
}

export default TarjetasCategorias;
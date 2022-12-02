import Buscador from '../components/Buscador/Buscador'
import Logo from '../components/Logo';
import CorrerNoticias from '../components/Resultado_Busqueda/Correr_Noticias/CorrerNoticias';
import TarjetasNoticias from '../components/Resultado_Busqueda/Tarjeta_Noticias/TarjetaNoticias';
import '../Paginas/Principal.css'

const Principal = () => {
    return (
        <main className="super-page-container">
            
        <Logo/>
            
        
        <Buscador />  
        <TarjetasNoticias />  
        <CorrerNoticias />

        </main>

    );
}

export default Principal;
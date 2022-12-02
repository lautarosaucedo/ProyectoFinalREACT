import '../Buscador/Buscador.css'

const Buscador = () => {
    return (

        <form class="ubicacion" role="search">
            <input type="search" placeholder="Buscar Noticias" id="Buscador" />
            <button class="button button1" type="submit">Buscar</button>
        </form>
    );
}

export default Buscador; 
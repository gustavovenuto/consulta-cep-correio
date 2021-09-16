import './estilos/estilos.css';

function CepConsultado({ evento }) {
    return(
        <>
        <ul className="list-group">
            {evento.map( item =>
                <li className="list-group-item">
                    <span>CEP: {item.cep}</span>
                    <span>Logradouro: {item.logradouro}</span>
                    <span>Bairro: {item.bairro}</span>
                    <span>Localidade: {item.localidade}</span>
                    <span>uf: {item.uf}</span>
                </li>)}
        </ul>

        </>
    )
}


export default CepConsultado;
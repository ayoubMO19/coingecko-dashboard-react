import '../card.css'; // Asumiendo que tienes un archivo CSS para la tarjeta

function Card(props) {
    return (
    <div className="card">
        <div className="card-header">
            <h3>{props.title}</h3>
        </div>
        <div className="card-content">
            {props.image && <img src={props.image} alt="Imagen de la tarjeta" />}
        </div>
        <div className="card-footer">
            <h4>{props.data}</h4>
        </div>
    </div>
    );
}

export default Card;
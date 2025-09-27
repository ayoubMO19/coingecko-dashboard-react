import '../card.css'; // Asumiendo que tienes un archivo CSS para la tarjeta

function Card(props) {
    return (
    <div className="card">
        <div className="card-header">
        <h3>{props.title}</h3>
        </div>
        <div className="card-content">
        <p>{props.description}</p>
        {props.image && <img src={props.image} alt="Imagen de la tarjeta" />}
        </div>
        <div className="card-footer">
        {props.children} {/* Permite pasar elementos hijo */}
        </div>
    </div>
    );
}

export default Card;
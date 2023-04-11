function Card(props) {
    return (
        <div className="card">
            <img src={`${props.img}`} alt={`${props.place}`} />
            <h5>{props.country}</h5>
            <h2>{props.place}</h2>
            <h4>{props.date}</h4>
            <p>{props.info}</p>
            <hr />
        </div>
    )
}
export default Card
function CardItemDetail(props) {
    return (
        <div className="card m-3 p-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://static.thcdn.com/images/large/original/productimg/1600/1600/11864118-2034607939265087.jpg"
                        className="img-fluid rounded-start"
                        alt="StarWars T-shirt"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <p className="card-text">{props.description}</p>
                        <h4>Precio:</h4>
                        <p className="card-text">{props.price}</p>
                        <h4>SKU:</h4>
                        <p className="card-text">{props.sku}</p>
                        <h4>Stock:</h4>
                        <p className="card-text">{props.stock}</p>
                        <span></span>
                        <p className="card-text">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItemDetail;

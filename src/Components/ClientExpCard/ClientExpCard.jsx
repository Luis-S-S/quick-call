import './ClientExpCard.scss';

function ClientExpCard() {

    return (
        <div className="client-card">
            <div className="client-card__header">
                <img className="client-card__profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_from_a_camera.jpg/1200px-Black_from_a_camera.jpg" alt="profile image" />
                <h2 className="client-card__title">Pepito Perez Almada</h2>
            </div>
            <p className="client-card__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil quod quo illo. Voluptatum provident debitis nisi dicta animi blanditiis ipsam, consequatur, inventore veritatis voluptatibus eveniet quia, accusamus vero atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit cum unde placeat doloribus atque quos quae, nulla neque totam iste quia corrupti. Beatae voluptatum, delectus quidem distinctio quaerat ipsa.</p>
        </div>
    )
}

export default ClientExpCard;

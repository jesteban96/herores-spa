import { Link } from "react-router-dom";

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImgUrl = `./assets/heroes/${id}.jpg`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutter">

                    <div className="col-4">
                        <img src={heroImgUrl} alt={superhero} className="card-img" />
                    </div>    

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego!==characters) && (<p className="card-text">{characters}</p>)
                            }

                            <p className="card-text">
                                <span className="text-muted">{first_appearance}</span>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Show Mor..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

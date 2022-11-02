import { getHeroesByPublisher } from "../helpers"
import { HeroeCard } from "./";

export const HeroresList = ({publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroeCard 
                        key={hero.id}
                        {...hero}    
                    />
                ))
            }
        </div>
    )
}

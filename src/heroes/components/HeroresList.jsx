import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroeCard } from "./";

export const HeroresList = ({publisher}) => {
    
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 rows-cols-xs-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 g-3">
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

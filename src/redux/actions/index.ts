export const PLANETS_AVAILABLE = 'PLANETS_AVAILABLE';

import {PlanetList} from '../../service/getPlanets';
 
export function getData(){
    return (dispatch) => {
 
        setTimeout(() => {
            const planets  = PlanetList;
            dispatch({type: PLANETS_AVAILABLE, planets:planets});
        }, 2000);
 
    };
}
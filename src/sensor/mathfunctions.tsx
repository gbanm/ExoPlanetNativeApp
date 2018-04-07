export const siderealtime=(longitude:number):string =>{
	const now = new Date;
	var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
		  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

	const min= now.getUTCMinutes()
	const start =Date.UTC(now.getUTCFullYear(), 0, 0);
	const diff= (utc_timestamp - start);
	const oneDay = 1000 * 60 * 60 * 24;
	const days = Math.floor(diff / oneDay);

	let startime=0.0657098*days-17.41409 +((min+4*longitude)/60)*1.002737909;
	if(startime<0){	
		startime=startime+24;
	}
	
	if(startime>24){
		startime=startime-24;
	}
	return timeformat(startime);
	
 }
export const dot_product=(a1:number,a2:number,a3:number, b1:number, b2:number, b3:number):number=>{

	let  numerator =Math.sqrt(a1*a1 + a2*a2 +a3*a3)*Math.sqrt(b1*b1 + b2*b2 +b3*b3)
	numerator = numerator ===0?1:numerator 
	return Math.acos((a1*b1+a2*b2+a3*b3)/numerator)

}
 export const declination = ( latitude:number, altitude:number, azimuth:number):number=>{
		
	let sindec=Math.sin(toRadians(latitude))*Math.sin(toRadians(altitude))-Math.cos(toRadians(latitude))*Math.cos(toRadians(altitude))*Math.cos(toRadians(azimuth_angle(azimuth)));
	
	return toDegrees(Math.asin(sindec));
	
 }

export const toRadians=(value:number)=> {

    return value * Math.PI / 180;
}
export const toDegrees=(value:number)=> {

    return value * 180/ Math.PI ;
}

export const  azimuth_angle=(azimuth:number):number =>{

	if(azimuth>180)
	{
     return azimuth-180;
	}

	if(azimuth<180)
	{
    return azimuth+180;
	}
	return azimuth;
			
		}

export const hourangle=(latitude:number,altitude:number, azimuth:number)=>{
            let numerator=Math.sin(toRadians(azimuth_angle(azimuth)));
	     	let denominator=Math.cos(toRadians(azimuth_angle(azimuth)))*Math.sin(toRadians(latitude))+Math.tan(toRadians(altitude))*Math.cos(toRadians(latitude));
			
			return toDegrees(Math.atan2(numerator,denominator));
					
					
			}

export const right_ascension=(hour:number,hourangle:number)=>{
	const right_ascension=Math.abs(hour*15-hourangle);
	
	if(right_ascension>360)
	{
		return right_ascension-360;
		
	}
	
		return right_ascension;
	
	}

		
const timeformat=(time:number)=>{
      const decimal = Math.round(time); 
	  const fractional =(time - decimal);
		if(fractional< 10/60)
		{
		return "0"+(fractional*60).toString().substring(0, 1);
		}

			 return  decimal +":"+(fractional*60).toString().substring(0, 2);
	
	}
		
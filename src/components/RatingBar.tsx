import * as React from 'react';
import Svg,{ Circle,G, ClipPath,Path,Image,Rect,Use,Defs,
  
  } from 'react-native-svg';

interface RatingbarProps{ rating:number}
export default class Ratingbar extends React.Component<RatingbarProps, any> {

  

    render() {

        const {rating} = this.props
        return (<Svg
            height="100"
            width="500"
        >
        
            <Image
             
             width="40" height="40" x="20" y="30"
                href={require('../images/earth.png')}
        
            /> <Image
             
            width="40" height="40" x="80" y="30"
               href={require('../images/earth.png')}
        
           />
            
            <Image
             
             width="40" height="40" x="140" y="30"
                href={require('../images/earth.png')}
        
            />
            
            <Image
             
             width="40" height="40" x="200" y="30"
                href={require('../images/earth.png')}
        
            />
               <Image
             
             width="40" height="40" x="260" y="30"
                href={require('../images/earth.png')}
        
            />  
         <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"    fillOpacity={rating>=0.1?"0":"1"}    
             transform = "rotate(90 40 40) translate(30 0)"/>
              <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"   fillOpacity={rating>=0.2?"0":"1"} 
            transform = "rotate(270 20 20) translate(-30 0)"/>
        
         <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"   fillOpacity={rating>=0.3?"0":"1"}     
             transform = "rotate(90 40 40) translate(30 -60)"/>
        <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"    fillOpacity={rating>=0.4?"0":"1"}     
            transform = "rotate(270 20 20) translate(-30 60)"/>
        
         <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"     fillOpacity={rating>=0.5?"0":"1"}     
             transform = "rotate(90 40 40) translate(30 -120)"/>
        <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"       fillOpacity={rating>=0.6?"0":"1"}  
            transform = "rotate(270 20 20) translate(-30 120)"/>
             <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"  fillOpacity={rating>=0.7?"0":"1"}        
             transform = "rotate(90 40 40) translate(30 -180)"/>
        <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"      fillOpacity={rating>=0.8?"0":"1"}    
            transform = "rotate(270 20 20) translate(-30 180)"/>
        
          
         <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"    fillOpacity={rating>=0.9?"0":"1"}   
             transform = "rotate(90 40 40) translate(30 -240)"/>
        <Path d="M0,40 a1,1 0 0,0 40,0" fill="#c6d4ff"  fillOpacity={rating>=1?"0":"1"}    
            transform = "rotate(270 20 20) translate(-30 240)"/>
         
        </Svg>)

    }
}
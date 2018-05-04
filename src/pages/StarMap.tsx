import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import {AppRegistry, StyleSheet, View,Platform ,Image} from 'react-native';
import{resource} from '../config/Resource'
import{geojson} from '../config/geojson'
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';

import  HamburgerMenu from '../navigation/HamburgerMenu'
import { Dimensions } from 'react-native'
import{PlanetList } from '../service/getPlanets'
import{SolarSystem } from '../service/getSolarSystem'
import { decorator as sensors } from "react-native-sensors";
import{siderealtime,dot_product,right_ascension,getdeclination } from '../sensor/mathfunctions'
import Compass from '../sensor/compass'
import RNSimpleCompass from 'react-native-simple-compass';
import {
  DeviceEventEmitter, NativeModules
} from 'react-native';
import { constants} from '../config/constants'


import styles from "../styles/defaultStyle";

import customMap from "../styles/customMap"

const start =  {
  latitude: 51,
  longitude: 0,
  latitudeDelta: 20,
  longitudeDelta: 10,
} 
interface StarmapProp { navigation:any, Accelerometer:any, gyroscop:any}
interface StarmapState {region: any,
  currentRegion?:any,
  degree:number,
 zoom:number,
 altitude:number,
 siderealtime:string
 rightascension:number,
 points:Array<any>,
lines:Array<any>,
 declination:number,gps:boolean}
 class StarMap extends React.Component<StarmapProp, StarmapState> {

  constructor(props) {
    super(props);
    this.state = {
      region:  start,
      degree:0,
     zoom:7,
     points:[],
     lines:[],
     rightascension:start.longitude/15,
     declination:start.latitude,
     gps:false,
     altitude:0,
     siderealtime:""
    };

    setTimeout(()=>{  navigator.geolocation.getCurrentPosition(this.success, this.error)}, 100)
 
  }

 success=(pos)=> {
    var crd = pos.coords;

    if(this.refs.map && this.state.currentRegion=== undefined){
  
  this.setState({currentRegion:{latitude:crd.latitude, longitude:crd.longitude}});
   }

  };
  
error=(err)=> {


  };
  


  onRegionChangeComplete(region) {

    let lines =  geojson.features.filter(p=>p.geometry.type=="LineString"&& 
    p.geometry.coordinates[0][1] <region.latitude + region.latitudeDelta/2+30 && 
    p.geometry.coordinates[0][1]>region.latitude - (region.latitudeDelta/2+30)&& 
    p.geometry.coordinates[0][0] <region.longitude + region.longitudeDelta && 
    p.geometry.coordinates[0][0] >region.longitude - (region.longitudeDelta/2+30))
let points = geojson.features.filter(p=>p.geometry.type=="Point" && p.properties.size=="xxl" && 
p.geometry.coordinates[1] <region.latitude + region.latitudeDelta&& 
p.geometry.coordinates[1]>region.latitude - region.latitudeDelta&& 
p.geometry.coordinates[0] <region.longitude + region.longitudeDelta && 
p.geometry.coordinates[0] >region.longitude - region.longitudeDelta)


if(!(this.state.gps)){
  const rightascension = 12 + -1*region.longitude/15
  const declination =region.latitude
  this.setState({rightascension,declination})
    }

this.setState({points, lines})



  }
  navigateToPlanet=(planet:any)=>{

  this.props.navigation.navigate("d3view",{navigation:planet})
       }


  componentWillReceiveProps(nextProps){

              
              let {region,currentRegion,altitude, degree,rightascension,declination}= this.state
           
              const gps = nextProps.navigation.state.params&&nextProps.navigation.state.params.gps
              if(this.state.currentRegion!== undefined && (gps!==undefined &&gps)){
               const rightascension =right_ascension(currentRegion.longitude,currentRegion.latitude,altitude, degree)
               const declination =getdeclination(currentRegion.latitude, altitude, degree)
      
              
      
            const longitude = (rightascension-12)<180?(rightascension-12):(rightascension-12)-360;
            if(region.longitude+2<longitude ||region.longitude-2>longitude){
            region = {
              latitude: declination,
              longitude: longitude,
              latitudeDelta: 10,
              longitudeDelta: 10,
            } 
      const altitude =dot_product(nextProps.Accelerometer.z,nextProps.Accelerometer.y,nextProps.Accelerometer.x,1,0,0)
           
            this.setState({ gps, region,rightascension,declination, altitude, siderealtime:siderealtime(this.state.currentRegion.longitude) });
       
          }
        
      
          const degree_update_rate = 3;
          RNSimpleCompass.start(degree_update_rate, (degree) => {
          
            if(this.refs.map && (degree+2<this.state.degree ||degree-2>this.state.degree)){
             
          this.setState({degree})
            }
            RNSimpleCompass.stop();
          });
      
            }else{
      
              this.setState({ gps:false})
        
        
            }
             }  

 
  render() {

 const{region, gps,rightascension,declination,degree ,currentRegion,altitude,siderealtime,points,lines}= this.state;
 const {Accelerometer}= this.props


    return (<Container ref="map" style={styles.mapcontainer}>
  <MapView
    
      moveOnMarkerPress={false}
  
        mapType={ "standard" }
        style={styles.map}
        initialRegion={start}
        customMapStyle={customMap}
        region={gps?region:null}
        showsCompass={true}
        minZoomLevel={2}
        maxZoomLevel={4}
    
     onRegionChangeComplete={(region)=> this.onRegionChangeComplete(region)}
   
    
     ><UrlTile urlTemplate={constants.tiles}  />
     {PlanetList.filter(p=>p.Esi>=0.7 && p.Coordinate!==undefined).map((planet,index) =>  (
    <Marker
      key={planet.Name}
      coordinate={planet.Coordinate}
      title={planet.Name}
     image={require('../images/marker.png')}
      onPress={p=> this.navigateToPlanet(planet)}
    />) ) }
   
            {points.map((star,index) =>  ( 
 <Marker
     coordinate={{  latitude:star.geometry.coordinates[1] as number,longitude:star.geometry.coordinates[0] as number}}
      key={"star"+ index}
      image ={require('../images/smarker.png')}
     title={star.properties.name}
      description={star.properties.constellation}
 />))}
 { lines.map((line,index) =>  (
    <React.Fragment key={"fragment"+ index}><Polyline
      key={"line"+ index}
       coordinates={(line.geometry.coordinates as number[][]).map(p=> { return {latitude:p[1] as number,longitude:p[0] as number}}) }
      strokeColor="#add7ed" 
       strokeWidth={1}
       zIndex={1000000}
  />
  {(line.geometry.coordinates as number[][]).map((p,i)=> { return <Circle   key={`${p[1]}${p[0]}${i}`} center={{latitude:p[1] as number,longitude:p[0] as number}}
  radius={25000}
  zIndex={10000000000}
  strokeColor={"#f2f7f8"}
  fillColor={"#f2f7f8"}></Circle> })} 
    </React.Fragment>
   
))}
</MapView>
{currentRegion&&(<Compass longitude={currentRegion.longitude}  latitude={currentRegion.latitude}  azimuth={degree} altitude={altitude} rightascension={rightascension} declination={declination}   siderealtime={ siderealtime}  gps ={gps}/>)}
</Container>)
  }
}
 export default sensors({
  Accelerometer: {
      updateInterval: 300
  },
  Gyroscope: true,

})(StarMap);;
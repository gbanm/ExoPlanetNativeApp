import{resource} from '../config/Resource'
import { AsyncStorage } from "react-native"
export const jovanbase64Icon = 'data:image/jpeg;base64,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';
export const terranbase64Icon="data:image/jpeg;base64,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"
export const redIcon='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAE0AbgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOEj2NbxXSlRNI5VomOCcd/cdK+Kkmm4dF1P2q5At0Ib/wAy7lX7PsKpxzJ68npWns+anamvev8AcS5Wd29DN+aexuZDdQRiLBSNuHcZ6DFdaShUiuVu/wBxnOb5bopafbxz3CLctIgkbBKjOBW9apKEW4W0MKdPmd5bs3pvDrxDbuVR95BMNhYdc156x13e33HUoRtbczLGeOC8fzd5Q5BiVsZ9K6atNzguX7yYySk9fkXIraJrGK4iZkleYoVB27fTFc8qklUcJapI0S00Ld3pF1MkksLRurL8zuMEY7fWsqeKpxajJBJPoYUlzNIvlOzEIOgJINehGlCPvLqZc7bsxu+4lfCs5I5AHQVfLTirsTc22gilnIbqyO/zqeMmlKMF6paBGUmrovG3hhvCguPLV3GcLu2DGcH1rm9pOcL8t7fiaJKLepOJCdPJWUi4DYjkHAZcnK56g96zcUqlmtOqKu2tDF8X3V8vhuS2uItsbqrbj1Pzjn9K7cBSovEc8Hqv8jwuIZT/ALPqJrTT/wBKRpaPdmW5jVjh0RhH8pbdnoMexrDFUlGLa2drnr0qnO7FO5MhZDerKQQdh/HH862p8tn7Kwqn98jRIRj5yHzz3FU5T7aAoQT0epsRXlppttDK0KXbKxaM527W9GHeuJ0alebiny9y6lRU43J9Z8QzeKryCW7WG3kjXYT0Xao4UDsP8av2Dw95X5r2McMoKPLBW16lPUNJkjjhmhR23jLgckH1+lFHFptwl02N5U+qNLzkTTrUEW4jZWdH75HHPpXJyN1Jb3NE0Z1/Pez+QZZXWGcYGM4x05HrXVRhShzWWqIk5NqxSjQWs6s7qVBIOOeK3lL2sbJEpez1bJb6GOKSJrS5V1dcgrwVPcVFGcpJqpHYqSvsyvPcuzxxoFyF25A7/wCPXmtYUkk5MznUd1FF46bLJYiWKKRo0GGZozy2fWudYhRnZv8AE05VaxFHFFbXyLdgIjfeUk/uzVucqlNuGr/MVlBmP4qlX+yL1GIkYlMSDpjcOnt0rrwUH7SLWi10+R4vEUv9gqL/AA/+lI6q+sFsJJGsxLHJE22RnHyoSO2P0ryqdd1klU1T2PdSSXumJdAIQEdpQv3TnI9Tx9a76bb3VjGa5dVqRRQJ5pEzGN+Scjoe2auVR8t46ozjTV9dzchS3vIIPs0cST2yeZLG2QWx12n3xXBKU6UnzNtS0T/zN1Z2XVDZbNZo5L63hEEuQyRO+cr079TmiNZxaozd13sPl150tSaTWpYZ3gumcKYCCkR2neR1NTHCRlHnguvXsKU0pcrMVITeMIkkC8E5PH4Cu1z9l7zREo+0XKnY0bWK6hmtjcBjbQnjByAK5ak6coy5fiZrGLWnQo6lGy3LgBjDuzuIPfp9a6cPJct+pFS97dAtoJrp1trf94iAsO2B3xRUnGmnUno2KK1UVsSQt/p8i20Hluw+RDyQR9ama/dpzd0hxaUmkaV3/aMFnBZFiisxYYyDz1/DmuSm6M5urua2NOfw2bewS7unIuyQyxMu9nBHU+3SsVjG5ci+H7jOMlKWmvmcX4ysRFoM8oSVJBt8xXHAG8YINetl9dyrKLaa6fcePxFBf2fUkvL/ANKRp2WtTm5tI55FiSJvmcjO7nq3rWFXBRUZSirt/wBaHqQr62loM1a8gl1MS2lviAMDhuC/r+BNVh6Mo0uWpLX8glUbasiW0IiuL6a4hUh0JPcLnnb/APXrOp70YQg/67lxjaTlIhtYmeORrYbnZD5o5+Rf6jFXUnZpT2vp5hCK3XUfZW8jombpVCOGUMenuKVWpFN2juVGDS1ZDfW5urjzUlEsxJyFHJx3q6NRUo8rVkZ1aPPJNPUszSRWbR2l3atE6L+9GMs2eR/SsownVvUhK99ivaQhoyOS7lknjaKZorZiBx0Ue4qo0oxi1JXkNybacdjpo7eC7819TnzFHEoQIAvmEd/evLc5U7KktW/uLd+hiarYW0DK9jeJLvxhVJLc9cj0Fd2HrzkuWpG39fqJ90LJpt3p1yLi3ImaHEgccdOcgURxNOtHklpcOV77nUz6xaeJbeB9QMStGmxUX5ShznP6mvPqU62HlaP9IijSjTT5ep2nhjRrfUIbcR3Uf2gAoEn6OP8AH2rnpUvbSsmk+zOHG4ueHveL5e66HH/GLRDpfgnW1mJ3J5Ww4yGzMnHTivRyunKnjoRl0v8Akzyc5xaxGWzlHrb5ao5PQrBrieZ3USZQhTInAJ6k+mK2xVdQiktNejPp4x6smvNLa6vlglkW2aNB5agfeA7/AJVFLEqnBySvfcJQ5ra7C6tc/ZLc2EsUbMrAGWPBWQYBBz+NFCk5z9rF/LsHMralOIwQPJLbzkCbgp0bGORx+Vay55pRktgSim/MrJYvfyIUlXZ/EzcCIe9be3VFNNa/mROmp6jns1juFImRsIGynp71CrOUWrF8qvci1BhNdm5BDyhxuQjAI9q1orlh7N6IyqxfMpR3Q3T7d57loXjYqeRg8A+vvTrVFCKnF6hCLbaktDcl06dxBEjM8ca7iOm3mvOjXirya1ZvYc0ml27N5Es7AJjYIhuLZ53Zo5a8/iS+/T5Cud74f8Q+HY7KG31K18tpEPmblBdF7AZ9eua5o0uVvmXMr7r9DgxNDEylzUpbbLp8zVuPCugXNquoWMvkJt3xg/dznoT/APWpSa5HKM/k/wArnPDG4iE/ZVI3ZoWg0u/a1NnN5GoQ/LlT8kkgPUf41koU5cqg+WS+5szqSxFHm9ouaD+9Iy/2gJDN8JNSklkcTt5G+MjADecmcjpzgEV72BlzV6cpPV3uvk/+HPmcdHlw9WMVorWfldf8MzhLURzIZLMH7M0n71WPLD/61eNO8Xae9tD9DMrxfPaSSJJasWlQjJB+6PSuzLoVF7s9mZz0jcz4r1ZbRzLELiYDdlhwigY610SoOM0k7IammrlrRBDLHLdXFsskp5jGe/0rHFOUWqcZWXUI+8lIZZI0xvpITKr4O5AOSfrTqvl5FIatrYgsx5NwA8LI6L/EelXUfNG6d7jjoXBrmIvsVvHbwBiTLPsB3en9aj6o/wCJJt9kZtrmM6xvWsbrdG++Ecnjpnrit6tFVYWkrMadm7PQ2ZbzSpYZ7hBcGV1x5C5AX3zXFGjXjJQdrdy7kOiXc9tFNGyottMQCtx3PrmrxNOM2mndrsJa6sgs7uCJpJb2ITqR5aE/w88H+dXUpTlaNN26jb6neaBqttr0B0+e4No6gbMjCY6fN6V5lTDSpNXen4HLUTpP2sI379/kamvaDPpEulz2rqFMwUXG4FSMdfw/wpum6SfPs9n0McPjI4lSi1stupU+O94n/CudViiuUnEogG5fQSxnk/XmvSy6qvrsIqV73/JnzOZUX9RqSlG1rf8ApSMG1kFtqMNqgjSEruG49fX615c1z03N7n2z2MzxJp1k15I4kZJ1kUOqrwoPb3zXXg69WMEraNE25rMzdRbT4NPmj0+4ZnH3u2VPb3rpoKtOqpVY6ClJKLsJojfbtPktsiMxfOHDYwOmcd6eLXsainvcKcrxsXLe7gSBrKzjia6hbcZ3G7zB1+UetYzpybVWez6dvUaerVzntUupL6csIxC+cEDivRoUo0Y6u6MajlNcsdGGlpF55inxkjrRiHLl5ojopRbi9zYv4lsNPt/s9vbByjI7Fcs+fXJ4OPSuOlUdab527F+z5b8pUQT2s8UcbxwMV3sHOQT7itfcqRcpJsp32RaM83iG9itZmS1gQHkDI3Y7ms1CGCg6kfebJ1luQ2USW18S7Rt5aMYflyJTjg/4fSnVm6kNOu/kUlYv6JZnUmkmtUleeIb3aSXaOO2O9Y4ibpe7K1n5BzpanU+H/EFo+i3mlXtwEuXYMGkbKow9PQ9s+lctSjOCuo3iznq0m60asem/c5Tx5awnwTrZjv3lkt/K3Ij5Q5lQenPWuzK2/rcLxtvr8meXxHN/2fPTe35ox9SumD2dx5wZ2XJAOSpB6V10KSanCx7FSpyuLOj028k1q3ltb0RwyyKJFl6F8Hjn2rza9JYWSnT1S0saRd1exi6xaLYQxQq6sshLyMOcNnj8hXbhqrrScnutiJpRXkLbzabY6TFIY1ubibIdWJAUZ6cGicK9as43slsJSjCF+gyC0ggsDfPJIpZv3KdD17mnOrOdT2SXqVGKirlbV7kXFwqxICSoyy9ScVrhqXJHmkxVJO/IjZsrTTbTT4pLvcWkBOSwyrAVw1aterUah0LjFQRTudeaXSGtHi3O8m4P/sj0966IYHlq+0T0S/Eh1UO0++tILRpLq2kub0NmNmPC/Wpq0ak58sJWj1KvZJkE+qGWJreZIkZ2z5gJIVT2x+PWtIYXlfPFt26eZLqLaRLHfm3aC3sYVlcFcsADub8ah0PaXnUdkVKfLZJXOie6hlilt5LL7JNyzXcLZR3xyPT0FefyONpKV/J72HFO976HJOjx2oKxx+TOeZmGWGDzXrRknPV6rp0Jkn9kyvElw0Hh2+tULNDJs5YYzh1P9K6cJTU68aj3V/yZ43EL5cuqR9P/AEpFmUxeaXkfzQrYwOMgfyqY81rJWuenPkWr1sXdO1ZbO1dPKDyEgrJ3AHQfzrnrYR1Z3vZdi41VGPcakhnlN208apyNjD73HpVOPIvZqOvcpPmfPfQqRAPAgWHzJN5JA7j0xW0rqTu7IzjrBaXNHU3gls4Ybe3eIrzgvnHHIrloc0KjnKVzWUOaHKZliXF5Fszy2AB1NdlZLkdzCk3z+R0S2gtoT/aC+eJyYyzciI/415Tq88v3WltfU6nG6tLUju9Bj06BZbu5JUHiNOuM+taU8dKvLlhH5kKnGK9Cjq00ErmQAwQsciBTluBjn0rfDQnHTd9yasoqPvMr6JIhvV80hQRjcwBCgck89a1xcX7P3TKhPmlqSyGFdRneQ7lYnHlnC89z6Dms0pOlFLp3N9FJsuWGp/2enl/8fMK7tqMTtB/vAdue9Y1aHtnd6MpWS0M8ySNOJXxsB3FWHAroUYqPKtxO979B3jOx0+08JTyG5Et9cIkiopJCDzF46dcfypYCrVqYmKt7quvwZ4vEH/Ivq/L/ANKRy48R2gP+ruBweijn9a9R4OfkeauKMIteWX3L/MkbxDpZskUQ3YuAxz8q7SP++qlYSv7Ru65fx/IX+suC5OXkl9y/zID4htNoGy4wBgDaP8a0+qT8if8AWXCWsoy+5f5lqz8TWFq8UsX2xZlPzfu1IA9vmrGrgqtROMrW9X/kaU+J8FCzUZfcv/khg8U2zXG+aK4ZCxZlGB1/Gq+oSULRauH+teH5ruMrfL/MnsvFen22qRXHk3TQxtkKVUkj0PNZ1MBVnScLq79SlxThOa/LL7l/mbOrePtG1EgyWl8jJ9wqFGPw3Vw0MnxFHaS19f8AI0/1swX8svuX/wAkNf4g6cbSRRDeNOWBBeJGGB0H3v1oWS1udO6t6v8AyH/rbg/5Zfcv/kivq/jfS9RtIITa3KtGGO4RIMscf7XTitsPldejJy5lb1f+RnPinBTWsJfcv/kjIHiOxWXKxXDIB0KKP/Zq7Xg6rjq1f+vIlcUYNSvyyt6L/wCSJZ/FNjKxIhnXccnaijH0G6s4ZfUj1X3/APALfFeDtbll9y/+SIYvEdksmWjuSuecKoP860lg6jWliI8U4SL+GX3L/wCSJ18Uac0bCRLwPyRhVI9v4qy+oVU9LW+f+Rp/rZg2tYy+5f5kut+KNI1DwzdWCxXjXREf2dnjUKhBXcSQxPIBwMd6jDZfXpYhVW1bW+r87dDzs24hw+MwsqFOMk3bdLo0+7P/2Q=='
export const orangeIcon='data:image/jpeg;base64,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'
export interface SearchPageState {mass:string, comp:string,atmos:string,disc:string, temp:string,lightyears:string}

export interface filter{Key:string, MaxValue:number, MinValue:number, Name:string}

export interface planetcolor {jovian:string,iron:string,hotsuperearth:string,hotjupiter:string,hotstone:string,coldsuperearth:string,coldstone:string,superearth:string, stone:string}
export interface Planet{
  name :string
  img: any
  period:number
  hzd:number
  hzc :number
  hza:number
  hzi :number
  type: string
  comp:number
  atmosphere:number
  meanDistance:number
  distance: number
  esi:number
  sph:number
  discYear:number,
  discMethod:number,
  radius?:number,
  radiusEu?:number
  coordinate?: any
  starDistance: number,
  star?: Star
  temp?:number
  tempMin?:number
  mass?:number,
  density?:number,
  gravity?:number,
  surfacePressure?:number,
  escapeVelocity?:number,
  massType?:number
  tempMax?:number
  tempZone?:number
 
  hab?:boolean
 moons:true
}

export interface Star{
  name :string
  img: any
  type: string
  color?:number
  luminosity?:number
  magnitude?:number
  constellation?:number
  habZoneMin?:number
  habZoneMax? :number
  mass?: number
  age?:number
  temp?:number
  planets?: Array<Planet>
  noHabPlanets?: number
  noPlanets?: number
  radius?:number
  radiusSu?:number
}
export const PlanetList= [{
  name:"1RXS 1609 b",
  img: {uri:jovanbase64Icon},
  type: resource.hotJovian,
 massType:0,

  distance: 145.00,
  temp:-100,
  esi:0,
  sph:0,
  period:100,
  discMethod:1,
  hzd:1,
  hzc :1,
  hza:1,
  hzi :1,
  meanDistance:2,
  atmosphere:1,
tempMin:-200,
 mass:2,
 density:3,
 gravity:3,
 surfacePressure:1,
 escapeVelocity:2,

tempMax:0,

  comp: 0,
  hab:false,
  moons:true,
  discYear:2008,
  star:{
    name:"1RXS 1609",
    type: resource.orange,
    color:2,
    luminosity:5,
    magnitude:1,
    img:{uri:orangeIcon},
    constellation:1,
    noHabPlanets:0,
    noPlanets:1
  }
} , {
  name:"GJ 180 c",
  img:  {uri:terranbase64Icon},
 type: resource.superEarth,
  massType:2,
  distance: 11.69,
  atmosphere:0,
  temp:0,
  tempMin:-200,


  tempMax:100,
  comp:2,
  esi:0.7,
  sph:0.4,
  period:200,
  hzd:2,
  hzc :2,
  hza:1,
  hzi :1,
  mass:10,
  density:2,
  gravity:2,
  surfacePressure:1,
  escapeVelocity:2,
  meanDistance:0.4,
  hab:true,
  moons:false,
  discYear: 2014,
  discMethod:2,
  coordinate:{  latitude:51,longitude:0 },
  star:{
    name:"GJ 180",
    type: resource.red,
    img:{uri:redIcon},
    constellation:1,
    color:3,
    luminosity:5,
    magnitude:1,
    mass: 2,
    age:1000,
    temp:3000,
    radius:1,
    noHabPlanets:1,
    noPlanets:2
  }
},{name:"GJ 180 b",
img:  {uri:jovanbase64Icon},
type: resource.hotJovian,
massType:0,
comp:1,
distance: 11.69,
esi:0,
period:20,
hzd:1,
hzc :1,
hza:2,
hzi :2,
atmosphere:0,
meanDistance:10,
temp:100,
tempMin:-100,
mass:6,
density:7,
gravity:7,
surfacePressure:6,
escapeVelocity:2,

tempMax:200,
sph:0,
hab:false,
moons:true,
discYear: 2014,
radius: 15,

starDistance: 150,
star:{
  name:"GJ 180",
  type: resource.red,
  img:{uri:redIcon},
  constellation:1,
  color:4,
  luminosity:5,
  magnitude:0,
  mass: 3,
  age:4000000,
  temp:100000,
  radius:2,
  noHabPlanets:1,
  noPlanets:2
}
} ] as Array<Planet> 

export const storeBase64= async () => {

  let value = await AsyncStorage.getItem('base64');

 
  if (value === null) {

    const colors =  await fetch("http://exoplanets.azurewebsites.net/api/ExoSolarSystems/GetImages",{
    headers:{
      'Content-Type': 'application/json'
    }
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((myJson) =>  {
  
      return myJson 
  
    });
  

    value =JSON.stringify(colors);
    await AsyncStorage.setItem('base64', value);
  
  }


return value
}




 export const GetPlanetListAsync=   (filter:filter, filterstate:any, top:number) => {
  let skip = top-100


let filterstring = "%24filter=Message eq null"
  if(filter!=null)
  {
    if(filter.Key==="Hab" || filter.Key==="Moons")
    {
      filterstring = `${filterstring} and ${filter.Key}%20eq%20true`
    }
    if(filter.Key==="Temp" || filter.Key==="Esi" || filter.Key==="Sph")
    {
      filterstring  = `${filterstring} and ${filter.Key} gt ${filter.MinValue} and ${filter.Key} lt  ${filter.MaxValue}`
    }

    if(filter.Name!=null)
    {
    skip = 0
    top=10
    filterstring  = `${filterstring} and indexof(Name, '${filter.Name}') gt -1`
  
    }


  }

  if(filterstate.filter!==undefined)
  { 

  
   const currentfilter = filterstate.filter.filter
  const compindex =resource.compsearch.indexOf(currentfilter.comp)
  const massindex = resource.masssearch.indexOf(currentfilter.mass)
  const atmosindex = resource.atmossearch.indexOf(currentfilter.atmos)
  const discindex =  resource.discsearch.indexOf(currentfilter.disc)
  const tempindex = resource.tempsearch.indexOf(currentfilter.temp)

  const lightyearsindex = resource.lightyearsearch.indexOf(currentfilter.lightyears)
if(compindex>-1){
  filterstring =  `${filterstring} and Comp eq ${compindex}`

}

if(massindex>-1){
  filterstring =  `${filterstring} and MassType eq ${massindex}`
}

if(atmosindex>-1){
  filterstring =  `${filterstring} and Atmosphere eq ${atmosindex}`

}
if(tempindex>-1){
  filterstring =  `${filterstring} and TempZone eq ${tempindex}`
 
}

  switch(lightyearsindex) {
       case 0:
       
       filterstring =  `${filterstring} and Distance lt ${20}`
      
        break;
        case 1:
        filterstring =  `${filterstring} and Distance lt ${200}`
        break;
         case 2:
         filterstring =  `${filterstring} and Distance lt ${2000}` 
        break;
        case 3:
        filterstring =  `${filterstring} and Distance lt ${20000}` 
          break;
  }  
}

  const planetList =   fetch(`http://exoplanets.azurewebsites.net/api/ExoSolarSystems/ExoPlanets?${filterstring}&%24top=${top}&%24skip=${skip}&%24orderby=DiscYear%20desc`)
  .then((response) => {
    return response.json();
  })
  .then((myJson):Array<Planet> =>  {

    return myJson as Array<Planet> 

  });

  return  planetList;
 }

 export const GetPlanetAsync=   (name:string) => {

  const planetList =   fetch(`http://exoplanets.azurewebsites.net/api/ExoSolarSystems/ExoPlanets?%24filter=Name eq '${name}'`)
  .then((response) => {
    return response.json();
  })
  .then((myJson):Planet =>  {


    return myJson[0] as Planet

  });

  return  planetList;
 }


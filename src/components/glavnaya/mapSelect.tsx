import React,{useEffect, useState} from 'react';
import axios from '../../axios';
import "../glavnaya/mapSelect.css";
import ymaps from "ymaps"
import ArendaRoom from './ArendaRoom';


const MapSelect=()=>{
  const [points,setPoints]=useState<any>([]);
  ymaps.load("https://api-maps.yandex.ru/2.1/?lang=ru_RU").then(maps => {
    const map = new maps.Map('map1', {
      center: [53.902292, 27.561821],
      zoom: 12,
    });
    

    const placemark = new maps.Placemark ([53.912929, 27.584684], {
      hintContent:"Объяление",
      balloonLayout: "",
      balloonContent:[
        `<div class="Card" style={width:"500px"}>
          <div class="balloon">Доступно ${10} объявлений</div>
          <a href="/katalog/city=Минск" onClick={localStorage.setItem("gorod","Минск")}>Посмотреть все</a>
          </div>`]    
      })
    map.geoObjects.add(placemark);
})
  
  .catch(error => console.log('Failed to load Yandex Maps', error));


  return(
    <div id="map1" className="map">
    
    </div>
  )
}

export default MapSelect

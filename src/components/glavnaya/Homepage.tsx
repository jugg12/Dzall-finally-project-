import "./Homepage.css";
import React, {useEffect, useState,useMemo} from "react";
import innerText from 'react-innertext';
import { ThunkDispatch } from 'redux-thunk'
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import img1 from "./img/section2/1.svg";
import img2 from "./img/section2/2.svg";
import img3 from "./img/section2/3.svg";
import img4 from "./img/section2/4.svg";
import img5 from "./img/footer/7.svg";
import img6 from "./img/footer/9.svg"
import img7 from "./img/footer/10.svg"
import img8 from "./img/footer/11.svg"
import click from "./Homepagejs"
import arrowbtm from "./img/footer/arrowbottom.svg"
import axios from "../../axios";
import ArendaRoom from "./ArendaRoom";
import { Col,Row } from "react-bootstrap"
import { ReducerState, Action } from './interfaces'
import { render } from "react-dom";
import {Slider} from "react-slick"
import "slick-carousel/slick/slick.css";


const PAGE_LIMIT = 3;




export default function Homepage(){
  const arrow__left=document.querySelector(".arrow__left");
  const arrow__right=document.querySelector(".arrow__right");
  const slider=document.querySelector(".cards ")
  const index=1;
  const [ToggleState,setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index)
  }
  
  const next = ()=>{
    console.log(slider)
  }

  
  return(
    <>
    <Header></Header>
      <section className="first">
        <div className="conteiner">
          <div className="first__block">
            <div className="block__item">
              <h1 className="innerText">Sdaem.by - у нас живут <span style = {{color:"#FFD54F"}} > ваши объявления</span></h1>
              <div className="all" >
                <div className="block__tabs">
                    <div className={ToggleState === 1 ? "tabs tabs__active":"tabs"} onClick={()=>toggleTab(1)} >
                      <p className="select__item" >Квартиры на сутки</p>
                    </div>
                    <div className={ToggleState === 2 ? "tabs tabs__active":"tabs"} onClick={()=>toggleTab(2)}>
                      <p className="select__item" >Котеджи и усадьбы</p>
                    </div>
                    <div className={ToggleState === 3 ? "tabs tabs__active":"tabs"} onClick={()=>toggleTab(3)}>
                      <p className="select__item">Бани и сауны</p>
                    </div>
                    <div className={ToggleState === 4 ? "tabs tabs__active":"tabs"} onClick={()=>toggleTab(4)}>
                      <p className="select__item">Авто напрокат</p>   
                    </div>
                </div>
              </div>
              <div className="select__filter">
                <div className="select__filter__item">
                  <p className="select__filter__item__css">Город</p>
                    <div className="dropdown">
                      <button className="Spisok" onClick={click} >Выберите</button >
                      <ul className="Spisok__dropdown">
                        <li className="dropdown__item" data-value="1">Минск</li>
                        <li className="dropdown__item" data-value="2">Город 2</li>
                        <li className="dropdown__item" data-value="3">Город 3</li>
                        <li className="dropdown__item" data-value="4">Город 4</li>
                        <li className="dropdown__item" data-value="5">Город 5</li>
                      </ul>
                      <input type="text" name="select__category" value="" className="drodown__item__hiden" />
                    </div>
                </div>
                <div className="select__filter__item">
                  <p className="select__filter__item__css">Комнаты</p>
                    <div className="dropdown">
                      <button className="Spisok" onClick={click}>Выберите</button>
                      <ul className="Spisok__dropdown">
                        <li className="dropdown__item">1 комната</li>
                        <li className="dropdown__item">2 комнаты</li>
                        <li className="dropdown__item">3 комнаты</li>
                        <li className="dropdown__item">4 комнаты</li>
                        <li className="dropdown__item">5 комнат</li>
                      </ul>
                      <input type="text" name="select__category" value="" className="drodown__item__hiden" />
                    </div>
                </div>
                <div className="select__filter__item">
                <p className="select__filter__item__css">Цена за сутки (BYN)</p>
                <div className="filter">
                  <input  className="filter__input" type="text" placeholder="От" />
                  <p className="filter__text">-</p>
                  <input className="filter__input" type="text" placeholder="До" />
                </div>
                </div>
                <div className="select__filter__item">
                  <div className="raz">
                  <p className="select__filter__item__css2">Больше опций</p>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9"/>
                  <path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9"/>
                  <path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9"/>
                  </svg>
                </div>
                </div>
                <div className="select__filter__item select__filter__item2">
                  <div className="raz">
                    <p className="select__filter__item__css2 ">На карте</p>
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0069 3.11628C9.90811 1.44186 8.09415 0.5 6.05346 0.5C4.0302 0.5 2.21625 1.44186 1.08253 3.11628C-0.0511958 4.75581 -0.312824 6.84884 0.384851 8.68023C0.576711 9.1686 0.873223 9.67442 1.25694 10.1279L5.66973 15.3256C5.77439 15.4302 5.87904 15.5 6.03601 15.5C6.19299 15.5 6.29764 15.4302 6.40229 15.3256L10.8325 10.1279C11.2162 9.67442 11.5302 9.18605 11.7046 8.68023C12.4023 6.84884 12.1407 4.75581 11.0069 3.11628ZM6.05346 9.2907C4.55346 9.2907 3.31508 8.05233 3.31508 6.55233C3.31508 5.05233 4.55346 3.81395 6.05346 3.81395C7.55346 3.81395 8.79183 5.05233 8.79183 6.55233C8.79183 8.05233 7.5709 9.2907 6.05346 9.2907Z" fill="#664EF9"/>
                    </svg>
                  </div>

                </div>
                <div className="select__filter__item">
                  <button className="Voyti choose" >
                    <div className="btnarrow">
                      <p className="t"> Показать</p>
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.21484 10.75L5.96484 6L1.21484 1.25" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* section 2 */}

      <section className="second">
        <div className="second__block">
          <div className="conteiner">
              <div className="second__block__delenie">
                <div className="pervoe__delenie">
                  <div className="second__block__item1">
                      <img src={img1} className="img" alt="" />
                      <div className="pos">
                      <p className="sec__inner__text">Снять квартиру</p>
                      <h2 className="sec__sec__text">Квартиры на сутки</h2>
                        <div className="btns">
                          <div className="btns1">
                            <button className="city">Минск</button>
                            <button className="city">Витебск</button>
                            <button className="city">Гродно</button>
                            <button className="city">Гомель</button>
                          </div>
                          <div className="btns2">
                            <button className="city">Брест</button>
                            <button className="city">Могилев</button>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="second__block__item2">
                    <img src={img2} className="img" alt="" />
                      <div className="pos">
                        <p className="sec__inner__text">Снять коттедж на праздник</p>
                        <h2 className="sec__sec__text">Коттеджи и усадьбы</h2>
                        <Link to=""><button className="arrow"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.2656L7.57143 7.6942L0.999999 1.12277" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button></Link>
                      </div>             
                  </div>
                  <div className="second__block__item3">
                    <img src={img3} className="img" alt="" />
                      <div className="pos">
                        <p className="sec__inner__text">Попариться в бане с друзьями</p>
                        <h2 className="sec__sec__text">Бани и сауны</h2>
                        <Link to=""><button className="arrow"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.2656L7.57143 7.6942L0.999999 1.12277" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button></Link>
                      </div>             
                  </div>
                  <div className="second__block__item4">
                    <img src={img4} className="img" alt="" />
                      <div className="pos">
                        <p className="sec__inner__text">Если срочно нужна машина</p>
                        <h2 className="sec__sec__text">Авто на прокат</h2>
                        <Link to=""><button className="arrow arrow2"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.2656L7.57143 7.6942L0.999999 1.12277" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button></Link>
                      </div>             
                  </div>
                </div>
                <div className="vtoroe__delenie">
                  <h2 className="vtoroe__delenie__inner">Квартиры</h2>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Квартиры в Минске</Link>
                    <p className="vtoroe__delenie__sec__text">3567</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Квартиры в Гомеле</Link>
                    <p className="vtoroe__delenie__sec__text">2032</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Квартиры в Гомеле</Link>
                    <p className="vtoroe__delenie__sec__text">2302</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Квартиры в Могилеве</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Квартиры в Бресте</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Квартиры в Витебск</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>

                  <h2 className="vtoroe__delenie__inner">Коттеджи и усадьбы</h2>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Аггроусадьбы</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Коттеджи</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Загородный комплекс</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">База отдыха</Link>
                    <p className="vtoroe__delenie__sec__text">110</p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Еще</Link>
                    <p className="vtoroe__delenie__sec__text"></p>
                  </div>

                  <h2 className="vtoroe__delenie__inner">Популярные направления</h2>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Коттеджи и усадьбы на о. Брасласких </Link>
                    <p className="vtoroe__delenie__sec__text"></p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links vtoroe__delenie__links2 ">Коттеджи и усадьбы (жилье) на Нарочи</Link>
                    <p className="vtoroe__delenie__sec__text"></p>
                  </div>
                  <div className="vtoroe__delenie__info">
                    <Link to="" className="vtoroe__delenie__links">Коттеджи и усадьбы (жилье) у воды,
                    на берегу, на озере</Link>
                    <p className="vtoroe__delenie__sec__text"></p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      
    {/* section 3 */}

      <section className="third" style={{height:"970px",
                                 marginBottom:"90px"}}>
        <div className="third__block">
          <img src={img5} alt="" />
          <div className="conteiner"></div>
        </div>
        <div className="third__block">
          <div className="conteiner">
            <div className="card__list">
              <div className="Card">
                  <div className="ColRowHome conteiner" style={{position:"absolute",
                                                      marginTop:"7%"}}>
                    <div className="cards" style={{display:"flex",justifyContent:"space-between"}}>
                      <Row>
                        <Col>
                          <ArendaRoom>{"/ArendaCard"}</ArendaRoom>
                        </Col>
                      </Row>
                    </div>
                   
                    <div className="predlojenia">
                      <div className="chislo__predlojenie">
                        <h1 className="kol-vo__predlojeniy">321 <span style ={{color:"#664EF9"}}>+</span></h1>
                        <p className="dopkol-vo__predlojeniy">Предложений по Минску</p>
                      </div>
                      <div className="btn__predlojenie">
                        <button className="btndob btnpredl">Посмотреть все</button>
                      </div>
                    </div>
                  
                  </div>
    

              
              </div>
               
            </div>
            <div className="delenie__third__block">
              <div className="pervoe__delenie__third__block">
                <p className="info__pervogo__delenia">Квартиры на сутки</p>
                <h1 className="dopinfo__pervogo__delenia">Аренда квартир в Минске</h1>
               
              </div>
              <div className="vtoroe__delenie__third__block">
                <div className="select_metro">
                      <div className="dropdown">
                        <button className="Spisok spisokmetro" onClick={click}>Выберите</button>
                        <ul className="Spisok__dropdown">
                          <li className="dropdown__item" data-value="1">Минск</li>
                          <li className="dropdown__item" data-value="2">Город 2</li>
                          <li className="dropdown__item" data-value="3">Город 3</li>
                          <li className="dropdown__item" data-value="4">Город 4</li>
                          <li className="dropdown__item" data-value="5">Город 5</li>
                        </ul>
                        <input type="text" name="select__category" value="" className="drodown__item__hiden" />
                      </div>
                      <div className="dropdown">
                        <button className="Spisok spisokmetro" onClick={click}>Выберите</button>
                        <ul className="Spisok__dropdown">
                          <li className="dropdown__item" data-value="1">Минск</li>
                          <li className="dropdown__item" data-value="2">Город 2</li>
                          <li className="dropdown__item" data-value="3">Город 3</li>
                          <li className="dropdown__item" data-value="4">Город 4</li>
                          <li className="dropdown__item" data-value="5">Город 5</li>
                        </ul>
                        <input type="text" name="select__category" value="" className="drodown__item__hiden" />
                      </div>
                </div>
              

              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="forth">
          <div className="Forma formaforth">
            <div className="fort__block">
              <div className="conteiner">
                <h1 className="forth__inner__text">Поиск квартир на карте</h1>
                <h2 className="forth__sec__text">Ищите квартиры на сутки в центре города, возле парка или в живописном районе</h2>
                <button className="Voyti btnopen">
                  <div className="btnopen__class"><svg className="mapicon" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.462 2.71394C10.3632 1.03952 8.54923 0.0976563 6.50853 0.0976562C4.48528 0.0976562 2.67132 1.03952 1.5376 2.71394C0.403882 4.35347 0.142254 6.44649 0.839929 8.27789C1.03179 8.76626 1.3283 9.27207 1.71202 9.72556L6.12481 14.9232C6.22946 15.0279 6.33412 15.0977 6.49109 15.0977C6.64807 15.0977 6.75272 15.0279 6.85737 14.9232L11.2876 9.72556C11.6713 9.27207 11.9853 8.7837 12.1597 8.27789C12.8574 6.44649 12.5957 4.35347 11.462 2.71394ZM6.50853 8.88835C5.00853 8.88835 3.77016 7.64998 3.77016 6.14998C3.77016 4.64998 5.00853 3.41161 6.50853 3.41161C8.00853 3.41161 9.24691 4.64998 9.24691 6.14998C9.24691 7.64998 8.02598 8.88835 6.50853 8.88835Z" fill="url(#paint0_linear_2831_1715)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2831_1715" x1="0.455078" y1="0.847657" x2="14.7623" y2="4.16693" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD54F"/>
                    <stop offset="1" stop-color="#FEC100"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <p className="btntext">Открыть карту</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="tochki__forth">
            <img src={img6} alt="" />
            </div>
          </div>
          <div className="item__info__delenie">
            <div className="conteiner">
              <div className="delenie__flex">
                <div className="item__info__forth">
                  <div className="infoicon">
                    <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2831_1742)">
                    <circle cx="69.2593" cy="58.6362" r="49.2593" fill="white"/>
                    </g>
                    <g clip-path="url(#clip0_2831_1742)">
                    <path d="M84.922 65.9641L93.4843 57.4915C96.6822 54.2936 102.833 58.3282 99.5098 62.2373L89.1419 74.4352C88.736 74.9125 88.2696 75.3357 87.7551 75.6936C86.0838 76.7617 84.0933 77.1176 82.132 77.1176H66.7462C65.6335 77.1176 64.5213 77.182 63.416 77.3104L58.9909 77.8075L49.8125 68.9008C49.8125 68.9008 55.0192 59.0682 65.233 61.8943C67.1432 62.4232 69.1198 62.675 71.1019 62.675H81.2136C85.9738 62.675 86.0114 70.2385 81.1739 70.2385H72.3713" fill="white"/>
                    <path d="M52.9617 89.3978L61.6935 80.4395C61.696 80.4371 61.696 80.4331 61.6935 80.4306L46.8772 66.0525C46.8747 66.05 46.8707 66.0505 46.8683 66.0525L38.0542 75.203L52.9617 89.3978Z" fill="#FFD54F" fill-opacity="0.4"/>
                    <path d="M48.5318 39.3267C45.7641 39.5889 43.5986 41.9194 43.5986 44.756V50.5629C43.5986 51.5656 44.4115 52.379 45.4147 52.379H57.8673C58.8704 52.379 59.6833 51.5656 59.6833 50.5629V44.756C59.6833 41.9174 57.5149 39.5849 54.7437 39.3262" fill="#FFD54F"/>
                    <path d="M57.7343 34.0666C57.7343 37.432 55.0062 40.1601 51.6408 40.1601C48.2754 40.1601 45.5474 37.432 45.5474 34.0666C45.5474 30.7012 48.2754 27.9727 51.6408 27.9727C55.0062 27.9727 57.7343 30.7012 57.7343 34.0666Z" fill="white"/>
                    <path d="M64.6167 39.3267C61.8491 39.5889 59.6831 41.9194 59.6831 44.756V50.5629C59.6831 51.5656 60.4965 52.379 61.4996 52.379H73.9522C74.9554 52.379 75.7683 51.5656 75.7683 50.5629V44.756C75.7683 41.9174 73.5993 39.5849 70.8287 39.3262" fill="url(#paint0_linear_2831_1742)"/>
                    <path d="M73.8192 34.0666C73.8192 37.432 71.0912 40.1601 67.7258 40.1601C64.3604 40.1601 61.6318 37.432 61.6318 34.0666C61.6318 30.7012 64.3604 27.9727 67.7258 27.9727C71.0912 27.9727 73.8192 30.7012 73.8192 34.0666Z" fill="white"/>
                    <path d="M80.7017 39.3267C77.9335 39.5889 75.7681 41.9194 75.7681 44.756V50.5629C75.7681 51.5656 76.5814 52.379 77.5841 52.379H90.0367C91.0399 52.379 91.8532 51.5656 91.8532 50.5629V44.756C91.8532 41.9174 89.6843 39.5849 86.9131 39.3262" fill="#FFD54F"/>
                    <path d="M89.9047 34.0666C89.9047 37.432 87.1762 40.1601 83.8107 40.1601C80.4453 40.1601 77.7173 37.432 77.7173 34.0666C77.7173 30.7012 80.4453 27.9727 83.8107 27.9727C87.1762 27.9727 89.9047 30.7012 89.9047 34.0666Z" fill="white"/>
                    <path d="M100.206 56.5515C99.2339 55.6544 97.911 55.1003 96.5767 55.0309C95.0615 54.9526 93.642 55.4928 92.5848 56.5505L85.3613 63.6982C85.2185 63.4509 85.0554 63.2175 84.8725 63.0009C83.9839 61.9456 82.6843 61.3647 81.2137 61.3647H71.1016C69.1948 61.3647 67.3347 61.1174 65.5731 60.6302C60.9805 59.3599 56.593 60.2877 52.8841 63.3151C51.3759 64.5463 50.2756 65.8855 49.5797 66.8619L47.7666 65.1024C47.5282 64.8709 47.205 64.7396 46.8725 64.7396C46.8695 64.7396 46.867 64.7396 46.864 64.7396C46.5196 64.7421 46.1865 64.8853 45.9476 65.1331L37.1335 74.2832C36.8976 74.5281 36.7692 74.8572 36.7767 75.1972C36.7841 75.5377 36.9264 75.8609 37.1727 76.0953L52.0802 90.2901C52.3275 90.5255 52.6447 90.643 52.9615 90.643C53.294 90.643 53.6266 90.5136 53.8769 90.2569L62.6087 81.2986C62.8471 81.0537 62.9794 80.7192 62.973 80.3772C62.9665 80.0402 62.8253 79.715 62.5834 79.4801L61.8231 78.7426L63.5633 78.5468C64.616 78.4243 65.6866 78.3624 66.7463 78.3624H82.1316C84.6317 78.3624 86.755 77.8157 88.4432 76.7372C88.4571 76.7283 88.4709 76.7188 88.4848 76.7094C89.0895 76.2891 89.6382 75.791 90.115 75.2294L100.483 63.0321C102.257 60.9449 102.146 58.3403 100.206 56.5515ZM52.9282 87.5685L39.866 75.1308L46.9027 67.8255L59.8886 80.4272L52.9282 87.5685ZM98.5355 61.3766L88.1676 73.5745C87.8385 73.9616 87.4613 74.3055 87.0455 74.597C85.7781 75.3994 84.1251 75.8068 82.1316 75.8068H66.7458C65.5885 75.8068 64.4183 75.8748 63.2728 76.0081L59.4475 76.4373L51.4378 68.6646C51.9945 67.8394 53.018 66.5056 54.5004 65.2952C57.5823 62.7793 61.0786 62.0383 64.8916 63.0936C66.8752 63.6422 68.9643 63.9208 71.1016 63.9208H81.2137C83.0297 63.9208 83.5145 65.494 83.5145 66.4233C83.5145 67.1023 83.2964 67.7487 82.9162 68.1967C82.5039 68.682 81.9175 68.9278 81.1735 68.9278H72.3709C71.6651 68.9278 71.0931 69.5003 71.0931 70.2061C71.0931 70.9119 71.6651 71.4838 72.3709 71.4838H81.1735C82.6595 71.4838 83.97 70.9039 84.8641 69.8512C85.6081 68.9759 86.0324 67.825 86.068 66.5948L94.3874 58.3626C95.5765 57.1736 97.4342 57.472 98.4735 58.4305C99.0108 58.9262 99.7335 59.9675 98.5355 61.3766Z" fill="url(#paint1_linear_2831_1742)"/>
                    <path d="M68.3856 69.8654C68.2245 69.1779 67.5371 68.7522 66.8496 68.9128C66.1626 69.0739 65.7359 69.7613 65.8975 70.4488L65.9094 70.5008C66.0476 71.0896 66.5725 71.4872 67.1524 71.4872C67.2491 71.4872 67.3472 71.4762 67.4454 71.4534C68.1328 71.2924 68.5591 70.6044 68.398 69.9174L68.3856 69.8654Z" fill="url(#paint2_linear_2831_1742)"/>
                    <path d="M45.4146 53.6252H57.8672C58.5452 53.6252 59.1727 53.4051 59.6832 53.0334C60.1938 53.4051 60.8212 53.6252 61.4993 53.6252H73.9524C74.6304 53.6252 75.2579 53.4051 75.7684 53.0334C76.2789 53.4051 76.9064 53.6252 77.5844 53.6252H90.037C91.743 53.6252 93.1308 52.2369 93.1308 50.5309V44.7239C93.1308 42.1158 91.6712 39.8502 89.4864 38.7325C90.5451 37.4558 91.1825 35.8182 91.1825 34.0338C91.1825 29.9691 87.8755 26.6621 83.8107 26.6621C79.746 26.6621 76.439 29.9691 76.439 34.0338C76.439 35.8182 77.0764 37.4563 78.1351 38.7325C77.1909 39.2163 76.3825 39.9147 75.7684 40.7617C75.1543 39.9142 74.3459 39.2158 73.4012 38.7325C74.4599 37.4563 75.0973 35.8182 75.0973 34.0338C75.0973 29.9691 71.7904 26.6621 67.7256 26.6621C63.6608 26.6621 60.3539 29.9691 60.3539 34.0338C60.3539 35.8182 60.9917 37.4563 62.0504 38.733C61.1057 39.2163 60.2973 39.9147 59.6832 40.7622C59.0691 39.9147 58.2607 39.2163 57.316 38.7325C58.3747 37.4563 59.0121 35.8182 59.0121 34.0343C59.0121 29.9691 55.7052 26.6621 51.6404 26.6621C47.5761 26.6621 44.2692 29.9691 44.2692 34.0343C44.2692 35.8182 44.9066 37.4563 45.9653 38.733C43.7805 39.8507 42.3203 42.1168 42.3203 44.7244V50.5309C42.3203 52.2369 43.7086 53.6252 45.4146 53.6252ZM83.8112 29.2181C86.4664 29.2181 88.6269 31.3782 88.6269 34.0338C88.6269 36.689 86.4664 38.8495 83.8112 38.8495C81.1556 38.8495 78.9956 36.6895 78.9956 34.0338C78.9951 31.3782 81.1556 29.2181 83.8112 29.2181ZM80.4909 40.6125C81.4896 41.1186 82.6172 41.4056 83.8107 41.4056C85.0047 41.4056 86.1323 41.1186 87.1306 40.6125C89.1166 40.9585 90.5753 42.67 90.5753 44.7239V50.5309C90.5753 50.8278 90.3339 51.0691 90.037 51.0691H77.5844C77.2881 51.0691 77.0467 50.8278 77.0467 50.5309V44.7239C77.0462 42.6704 78.5054 40.9585 80.4909 40.6125ZM67.7261 29.2181C70.3812 29.2181 72.5418 31.3782 72.5418 34.0338C72.5418 36.689 70.3812 38.8495 67.7261 38.8495C65.0704 38.8495 62.9104 36.6895 62.9104 34.0338C62.9104 31.3782 65.0704 29.2181 67.7261 29.2181ZM64.4062 40.6125C65.4045 41.1186 66.5321 41.4056 67.7261 41.4056C68.9201 41.4056 70.0472 41.1186 71.0459 40.6125C73.0315 40.9585 74.4906 42.67 74.4906 44.7239V50.5309C74.4906 50.8278 74.2493 51.0691 73.9524 51.0691H61.4998C61.2029 51.0691 60.9615 50.8278 60.9615 50.5309V44.7239C60.9615 42.6704 62.4207 40.9585 64.4062 40.6125ZM51.6409 29.2181C54.2961 29.2181 56.4566 31.3782 56.4566 34.0338C56.4566 36.689 54.2961 38.8495 51.6409 38.8495C48.9857 38.8495 46.8252 36.689 46.8252 34.0338C46.8252 31.3782 48.9857 29.2181 51.6409 29.2181ZM44.8764 44.7239C44.8764 42.6704 46.3355 40.9585 48.3211 40.6125C49.3198 41.1186 50.4469 41.4056 51.6409 41.4056C52.8349 41.4056 53.962 41.1186 54.9607 40.6125C56.9468 40.9585 58.4055 42.67 58.4055 44.7239V50.5309C58.4055 50.8278 58.1641 51.0691 57.8672 51.0691H45.4146C45.1177 51.0691 44.8764 50.8278 44.8764 50.5309V44.7239Z" fill="url(#paint3_linear_2831_1742)"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_2831_1742" x="0" y="0.376953" width="138.519" height="138.518" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="11"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.498056 0 0 0 0 0.606283 0 0 0 0 0.733333 0 0 0 0.16 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1742"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1742" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2831_1742" x1="59.6831" y1="39.9788" x2="77.5015" y2="46.2995" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD54F"/>
                    <stop offset="1" stop-color="#FEC100"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2831_1742" x1="36.7764" y1="72.8332" x2="98.1652" y2="72.8332" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2831_1742" x1="65.8633" y1="70.183" x2="68.2906" y2="70.183" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2831_1742" x1="42.3203" y1="40.1436" x2="90.3339" y2="40.1436" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <clipPath id="clip0_2831_1742">
                    <rect width="64.9651" height="64.9651" fill="white" transform="translate(36.7764 26.1543)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <h1 className="info__forth__inner__text">Начните привлекать клиентов бесплатно!</h1>
                  </div>
                    <h2 className="info__foth__sec__text">Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <b>бесплатно создавать и публиковать</b> объявления на сайте. </h2>
                    <button className="Voyti razmestitbtn">+ Разместить объявление</button>
                </div>

                <div className="item__info__forth">
                  <div className="infoicon">
                    <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2831_1762)">
                    <circle cx="69.2593" cy="58.6362" r="49.2593" fill="white"/>
                    </g>
                    <g clip-path="url(#clip0_2831_1762)">
                    <rect x="68.9424" y="33.6328" width="25.4375" height="11.5" fill="#B8C4FF"/>
                    <path d="M91.3838 31.5078H72.2939C69.677 31.5078 67.5479 33.637 67.5479 36.2539V42.582C67.5479 45.199 69.677 47.3281 72.2939 47.3281H80.2041V50.5977H72.2939C69.677 50.5977 67.5479 52.7264 67.5479 55.3433V61.6715C67.5479 64.2888 69.677 66.4176 72.2939 66.4176H80.2041V69.6871H72.2939C69.677 69.6871 67.5479 71.8162 67.5479 74.4332V80.7613C67.5479 83.3783 69.677 85.5074 72.2939 85.5074H91.3838C94.0007 85.5074 96.1299 83.3783 96.1299 80.7613V74.4332C96.1299 71.8162 94.0007 69.6871 91.3838 69.6871H83.3682V66.4176H91.3838C94.0007 66.4176 96.1299 64.2888 96.1299 61.6715V55.3433C96.1299 52.7264 94.0007 50.5977 91.3838 50.5977H83.3682V47.3281H91.3838C94.0007 47.3281 96.1299 45.199 96.1299 42.582V36.2539C96.1299 33.637 94.0007 31.5078 91.3838 31.5078ZM92.9658 74.4332V80.7613C92.9658 81.6339 92.256 82.3433 91.3838 82.3433H72.2939C71.4214 82.3433 70.7119 81.6339 70.7119 80.7613V74.4332C70.7119 73.561 71.4214 72.8512 72.2939 72.8512H91.3838C92.256 72.8512 92.9658 73.561 92.9658 74.4332ZM92.9658 55.3433V61.6715C92.9658 62.5441 92.256 63.2535 91.3838 63.2535H72.2939C71.4214 63.2535 70.7119 62.5441 70.7119 61.6715V55.3433C70.7119 54.4712 71.4214 53.7617 72.2939 53.7617H91.3838C92.256 53.7617 92.9658 54.4712 92.9658 55.3433ZM92.9658 42.582C92.9658 43.4542 92.256 44.1641 91.3838 44.1641H72.2939C71.4214 44.1641 70.7119 43.4542 70.7119 42.582V36.2539C70.7119 35.3813 71.4214 34.6719 72.2939 34.6719H91.3838C92.256 34.6719 92.9658 35.3813 92.9658 36.2539V42.582Z" fill="url(#paint0_linear_2831_1762)"/>
                    <path d="M50.1455 79.1797C51.0193 79.1797 51.7275 78.4715 51.7275 77.5977C51.7275 76.7242 51.0193 76.0156 50.1455 76.0156C47.5158 76.0156 45.2939 73.8424 45.2939 71.2695C45.2939 70.3961 44.5857 69.6875 43.7119 69.6875C42.8381 69.6875 42.1299 70.3961 42.1299 71.2695C42.1299 75.642 45.7723 79.1797 50.1455 79.1797Z" fill="#FEC100"/>
                    <path d="M43.7119 66.418C44.5857 66.418 45.2939 65.7098 45.2939 64.8359V58.5078C45.2939 57.6344 44.5857 56.9258 43.7119 56.9258C42.8381 56.9258 42.1299 57.6344 42.1299 58.5078V64.8359C42.1299 65.7098 42.8381 66.418 43.7119 66.418Z" fill="#FEC100"/>
                    <path d="M43.7119 53.7621C44.5857 53.7621 45.2939 53.0535 45.2939 52.1801V45.7465C45.2939 43.1737 47.5158 41.0004 50.1455 41.0004H57.5765L52.432 44.4298C51.7049 44.9147 51.5084 45.8969 51.9933 46.6236C52.4802 47.3545 53.4637 47.5448 54.1871 47.0624L63.6793 40.7347C64.1193 40.4409 64.3838 39.947 64.3838 39.418C64.3838 38.889 64.1193 38.395 63.6793 38.1017L54.1871 31.7736C53.4599 31.2891 52.4778 31.4856 51.9933 32.2123C51.5084 32.9395 51.7049 33.9217 52.432 34.4061L57.5765 37.8359H50.1455C45.7731 37.8359 42.1299 41.3729 42.1299 45.7461V52.1797C42.1299 53.0535 42.8381 53.7621 43.7119 53.7621Z" fill="#FEC100"/>
                    <path d="M56.4736 76.0156C55.5998 76.0156 54.8916 76.7242 54.8916 77.5977C54.8916 78.4715 55.5998 79.1797 56.4736 79.1797H62.8018C63.6756 79.1797 64.3838 78.4715 64.3838 77.5977C64.3838 76.7242 63.6756 76.0156 62.8018 76.0156H56.4736Z" fill="#FEC100"/>
                    <path d="M88.2197 37.8359H75.458C74.5842 37.8359 73.876 38.5441 73.876 39.418C73.876 40.2914 74.5842 41 75.458 41H88.2197C89.0931 41 89.8018 40.2914 89.8018 39.418C89.8018 38.5441 89.0931 37.8359 88.2197 37.8359Z" fill="url(#paint1_linear_2831_1762)"/>
                    <path d="M73.876 58.5078C73.876 59.3816 74.5842 60.0898 75.458 60.0898H88.2197C89.0931 60.0898 89.8018 59.3816 89.8018 58.5078C89.8018 57.6344 89.0931 56.9258 88.2197 56.9258H75.458C74.5842 56.9258 73.876 57.6344 73.876 58.5078Z" fill="url(#paint2_linear_2831_1762)"/>
                    <path d="M73.876 77.5977C73.876 78.4715 74.5842 79.1797 75.458 79.1797H88.2197C89.0931 79.1797 89.8018 78.4715 89.8018 77.5977C89.8018 76.7242 89.0931 76.0156 88.2197 76.0156H75.458C74.5842 76.0156 73.876 76.7238 73.876 77.5977Z" fill="url(#paint3_linear_2831_1762)"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_2831_1762" x="0" y="0.376953" width="138.519" height="138.518" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="11"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.498056 0 0 0 0 0.606283 0 0 0 0 0.733333 0 0 0 0.16 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1762"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1762" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2831_1762" x1="67.5479" y1="58.5076" x2="94.5566" y2="58.5076" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2831_1762" x1="73.876" y1="39.418" x2="88.9251" y2="39.418" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2831_1762" x1="73.876" y1="58.5078" x2="88.9251" y2="58.5078" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2831_1762" x1="73.876" y1="77.5977" x2="88.9251" y2="77.5977" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9D94FF"/>
                    <stop offset="1" stop-color="#6B50E9"/>
                    </linearGradient>
                    <clipPath id="clip0_2831_1762">
                    <rect width="54" height="54" fill="white" transform="translate(42.1299 31.5078)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <h1 className="info__forth__inner__text">Поднимайте объявления</h1>
                  </div>
                    <h2 className="info__foth__sec__text">Вы в любое время можете <b>поднимать</b> объявления <b>вверх первой страницы</b> каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</h2>
                    <button className="Voyti razmestitbtn">
                      <div className="btnarrow">
                        <p className="t">Узнать стоимость услуги </p>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 11.8027L6.5 6.80273L1.5 1.80273" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div> 
                    </button>
                </div>

                <div className="item__info__forth">       
                    <h1 className="info__forth__intro__text">Приоритет Gold </h1>
                    <h2 className="info__foth__sec__text info__foth__sec__text2">Приоритетное размещение <b>Gold</b> позволяет <b>закрепить ваше объявление</b> в верхней части каталога!</h2>
                   
                    <h2 className="info__foth__sec__text">Gold объявления <b>перемещаются 
                    каждые 5 мин</b> на 1 позицию, что делает размещение одинаковым для всех.</h2>
                    <button className="btndob razmestitbtn">
                      <div className="btnarrow">
                        <p className="t">Еще о тарифе Gold</p>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.23535 11.8027L6.23535 6.80273L1.23535 1.80273" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div> 
                    </button>

                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="fivth">
        <div className="tochkilast">
          <div className="conteiner">
            <img className="imglast" src={img5} alt="" />
          </div>
        </div>
        <div className="fivth__block">
          
          <div className="conteiner">
            <div className="twoparts">
              <div className="firstpart">
                <h1 className="info__pervogo__delenia info__pervogo__delenia2">ЧТО ТАКОЕ SDAEM.BY</h1>
                <h2 className="dopinfo__pervogo__delenia dopinfo__pervogo__delenia2">Квартира на сутки в Минске</h2>
                <div className="delenie__fivth">
                  <div className="delenie1">
                    <img className="delenie1img" src={img8} alt="" />
                    <div className="delenietochki">
                      <img src={img5} alt="" />
                    </div>
                    
                  </div>

                  <div className="delenie2_1">
                    <p className="delenie2__text"> <b>Нужна квартира на сутки в Минске?</b></p>
                    <p className="delenie2__text">На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <b>более 500 квартир</b>. Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
                    <p className="delenie2__text">В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.</p>
                  </div>
                </div>
                <p className="delenie__text">Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.    </p>
              </div>

              <div className="secondpart">
                <h1 className="intro">Новости</h1>
                <div className="news">
                  <p className="newstextintro">Линия Сталина: суровый отдых в усадьбах  на сутки</p>
                  <p className="newstextsec">14 Январь</p>
                </div>
                <div className="news">
                  <p className="newstextintro">Аренда квартиры посуточно</p>
                  <p className="newstextsec">14 Январь</p>
                </div>
                <div className="news">
                  <p className="newstextintro">Дворцово-парковый комплекс Чапских</p>
                  <p className="newstextsec">14 Январь</p>
                </div>
                <div className="news">
                  <p className="newstextintro">Дворцово-парковый комплекс Чапских</p>
                  <p className="newstextsec">14 Январь</p>
                </div>
                <div className="news">
                  <p className="newstextintro">Дворцово-парковый комплекс Чапских</p>
                  <p className="newstextsec newstextsec2">14 Январь</p>
                </div>
                <div className="btnarrow">
                  <p className="t">Посмотреть все</p>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L6 6L1 1" stroke="#664EF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </>
  )
}
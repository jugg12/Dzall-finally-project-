import React,{useState,useEffect} from "react";
import {Link,NavLink,useHistory} from "react-router-dom";
import "./Header.css";
import { useSelector,useDispatch } from "react-redux";
import UserSlice, {add} from "../../store/slices/UserSlice";
import click from "./Homepagejs";
import axios from "../../axios";
import {Formik,Form,Field} from "formik"
import store from "../../store";
import click2 from "../glavnaya/clickbtnkontakti";
import Modal from "./module";


const Header=() =>{
 
  const[modalActive,setModalActive] = useState(false);
  const history=useHistory();
  let login=localStorage.getItem("login");
  let id = localStorage.getItem("id");
  const userurl=localStorage.getItem("url");
  let kvartiri=localStorage.getItem("kvartiri");
  let gorod=localStorage.getItem("gorod");
  const [Arenda,setArenda]=useState<any>([]);
  const [Login,setLogin]=useState(true);

  function validateLogin(value){
    const btn = document.querySelector(".Registrationbtn")
    axios.get(`/users?login=${value}`).then((res)=>{
    if(res.data.length==0){
      setLogin(true)
    }
    else if (res.data.length!==0){
      setLogin(false) 
    }
  }) 
}

  useEffect(()=>{
    axios.get(`users?login=${login}`).then(({data})=>{
      setArenda(data);
    })
  },[])

  const changeUser = (value) =>{
    axios.patch(`/users/${id}`, {login:`${value.login}`}).then((res)=>console.log(res)).catch((res)=>console.log(res))
    localStorage.setItem('login',value.login);
    login=value.login;
    setModalActive(false);
  }

  

  const click3=()=>{
    document.querySelectorAll(".dropdown2").forEach(function(dropdownWrapper){
      const listitemclick=dropdownWrapper.querySelectorAll(".dropdown__item");
      const btn = dropdownWrapper.querySelector(".Spisok");
      const btnclick = dropdownWrapper.querySelector(".Spisok__dropdown");
      btnclick.classList.toggle("Spisok__dropdown__visible");
      listitemclick.forEach(function(listitem){
        listitem.addEventListener("click",(e)=>{
          if(listitem.textContent=="Выйти"){
          login=null;
          e.stopPropagation();
          localStorage.clear()
          window.location.reload()
          btnclick.classList.remove("Spisok__dropdown__visible")}
          else{
          setModalActive(true)
          }
        })
      })
      document.addEventListener('click',(e)=>{
        if(e.target !== btn){
          btnclick.classList.remove("Spisok__dropdown__visible");
        }
      })
    })
  }

  const click4=()=>{
    document.querySelectorAll(".dropdown3").forEach(function(dropdownWrapper){
      const items=dropdownWrapper.querySelector(".Items");
      const listitemclick=dropdownWrapper.querySelectorAll(".dropdown__item");
      const btnclick = dropdownWrapper.querySelector(".Spisok__dropdown");
      const kvartiri= dropdownWrapper.querySelector(".kvartiri");
      
      btnclick.classList.toggle("Spisok__dropdown__visible");
      listitemclick.forEach(function(listitem){
        listitem.addEventListener("click",(e)=>{
          btnclick.classList.remove("Spisok__dropdown__visible");
          localStorage.setItem("kvartiri",listitem.textContent);
          localStorage.setItem("gorod",listitem.id);
        })
      })
        document.addEventListener("click",()=>{
          btnclick.classList.remove("Spisok__dropdown__visible");
        })
      })
   }

   const [Cities,setCities]=useState([]);
   useEffect(()=>{
    axios.get(`/Cities`).then(({data})=>{
      setCities(data);
    })
   },[])
  

  return(
    <>
    <header>
       <nav>
            <div className="conteiner">
            <div className="VerhNav">
              <div className="leftpart" style={{display:"flex",alignItems:"center"}}>
                <NavLink to="/" className="item" exact>Главная</NavLink>
                <NavLink to="/News"className="item">Новости</NavLink>
                <NavLink to="/123"className="item">Размещение и тарифы</NavLink>
                <NavLink to="/Map"className="item">
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.43757 1.74419C6.70501 0.627907 5.49571 0 4.13525 0C2.78641 0 1.57711 0.627907 0.821293 1.74419C0.0654788 2.83721 -0.10894 4.23256 0.356176 5.45349C0.484083 5.77907 0.681758 6.11628 0.937572 6.4186L3.87943 9.88372C3.9492 9.95349 4.01897 10 4.12362 10C4.22827 10 4.29804 9.95349 4.3678 9.88372L7.32129 6.4186C7.57711 6.11628 7.78641 5.7907 7.90269 5.45349C8.3678 4.23256 8.19339 2.83721 7.43757 1.74419ZM4.13525 5.86047C3.13525 5.86047 2.30966 5.03488 2.30966 4.03488C2.30966 3.03488 3.13525 2.2093 4.13525 2.2093C5.13525 2.2093 5.96083 3.03488 5.96083 4.03488C5.96083 5.03488 5.14687 5.86047 4.13525 5.86047Z" fill="#8291A3"/>
                  </svg>
                  Объявления на карте
                </NavLink>
                <NavLink to="/kontakti"className="item" >Контакты</NavLink>
              </div>
              <div className="rightpart">
                <NavLink to="/1234"className="item item3">Закладки</NavLink>
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="14.23px" viewBox="0 0 24 24" width="24px" fill="#8291A3">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                {
                  (login)!==null?
                    <div className="UserLink">
                      
                      <div className="dropdown2">
                        <button className="Spisok" onClick={click3} style={{padding:"0px 69px 0px 12px",margin:"1px 0px"}}>
                          <div style={{display:"flex",alignItems:"center",boxSizing:"border-box",position:"absolute",marginTop:"-15px"} } >
                            <img className="ImgUser" src={userurl} alt="" />
                            <p className="max">{login}</p>
                          </div>
                        </button >
                        <ul className="Spisok__dropdown" >
                          <li key="change" className="dropdown__item">Редактировать</li>
                          <li key="exit" className="dropdown__item">Выйти</li>
                        </ul>
                        <input type="text" name="select__category" className="drodown__item__hiden" />
                      </div>
                    </div>
                    :<Link to="/Vhod"className="item item2">Вход и регистрация </Link>
                }
              </div>
            </div>
          </div>
        </nav>
    </header>
    <div className="head">
    <div className="conteiner">
          <div className="Menu">
          <Link to="/">
            <svg style={{cursor:"pointer"}} className="Logo" width="135" height="19" viewBox="0 0 135 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.0996094" width="134" height="19" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_2831_2326" transform="scale(0.00746269 0.0526316)"/>
            </pattern>
            <image id="image0_2831_2326" width="134" height="19" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAATCAYAAABV0nVhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM5Q0IxQzVDQUI4MTFFN0FBNEJFNEEyRjMzMUI3NTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM5Q0IxQzZDQUI4MTFFN0FBNEJFNEEyRjMzMUI3NTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzlDQjFDM0NBQjgxMUU3QUE0QkU0QTJGMzMxQjc1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzlDQjFDNENBQjgxMUU3QUE0QkU0QTJGMzMxQjc1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhiAN3YAAAQ4SURBVHja7FpLbttADJUDX0A9QIEqu3SpHkFZd6UcQT6CfQTrCNYRok269hwhWnZpFegFdASXNChjTJOamUhWijYEBCPOzIgiHx8/8iIS5POX+xQ+8Irpqxav378OTfQh/5Qcj0fx+wUDRAEfa7gS5RwEyAYAUrN9uGfroQfuN3CVcEbrozicvYOPgn3dwf5PA3t89eGCz1Z6nnFvPwOsz+BjP7D+EdYbL2f9/H4M0BnPrBdff1TW/oPgwxbW3Av3EtfeMQfsBkAR0f+eCUBvkYScfIAzth6giAVQoMQjdJhKMvZ3+o567MDBO+u7lWR7WFMwUBSKv1d3VnSEGHpH6WaMrAmMQ5IHOGZuSf8yfQpw9MlewAyGmOTK5h72NdHDi+kZQwIFposN0j5Sd6DTvB+GQPkWYOTEKP8LMIx1tQOMfE6LCmtkxBaZovNp31I48CSQD58sSsei8zmQOhtLuZicnCvMUcH9OpZGEg9jFwTcoPphKmAgMFFvqi9uKsACjywNPA8FDqxvYE0lBP2awCUFZAVs0djAkPL7nlijpmJzEfgsHSu2aqWg60FTebBFZ3VK/ZpyRpZoWRBlZKNUCIp0Bl0k+/Doz5nNMoUtOptllgMP0m/GeqIlAxjfyloSjFg4KxfulShswA1RM6Rj1KaebXThiOwGztl40HnBWLMWjGymBgY4cy0U8Rf6250JsUYH+0ohGKXuqQS26DgwSiFVcMetifbRQasRAJEiLBXmKIlg7EapQ3yAkTg6Lh9pFL1Ttqa7AUNsHXo9KimlHOg+7KC7ANUdRTI668nzgfAG+xu3i9LZhs9PJiyCQ+jbpvCMQBwz4L9HIfwKANBYypVuL9jiDIweHDQ0Wnk+3PaGXUEu1Cu1YviE0tNcYhy6NhMwk6srMUIQJxrrU4oxKts8vPD67rr4BAfgooqc3tcZvIAZKhpDnX5B0cREsZB+bAPlQj3kAnPlWNMFOKjQ2lRMsY4WfKquBG10YLY6taM0x5BYQ21Pr4BBE8hUoO2y70pgDW5+FSIhiDHI6amjws6UwrFwFJYb3vLye4wpnAcYIx343y3bVywsm0iewBphvYH11wc9vIg6LxVnJPZsgXr10IIqtrqAhBQulEitCTjxiJrBxV6Jx7yhc3U4ZAutHXUCg7oLXkhusEgM7FLyWw7VlsqwAx35CgaoyXH5GwyRRsMvlc4UZ0X6mILWBYzC43yjVfee7ejNGCPgxdokOiwpJxqJNZTp2DnvT/AavmHTyFxpbxuP9g07hMT3re0E6WQdyjZz6IUTz6kYI6JWdR8wlGki+Q1eiJR2G2X9BuSqOJKcrQzKZpmEUjDNxhYBPnmaMpVEROXfrLesQ7/HqEa8c+iHVJXg7FxhpTZgUFZE843IOcu+B1t0ffvKp56ji1ule+inhIk92JmJpj9kRtF+wfVHgAEA5QnSPz/jqYUAAAAASUVORK5CYII="/>
            </defs>
            </svg>
          </Link>
              <NavLink to={`/katalog/city=${gorod}` } className="Items" style={{marginRight:"39px",padding:0}}>
                <div className="dropdown3">
                  <div className="group Items"onMouseEnter={click4} style={{marginRight:"0px"}}>
                    <p className="kvartiri">{kvartiri}</p>
                    <svg style={{marginLeft:"15px"}}width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0069 2.61628C9.90811 0.941861 8.09415 0 6.05346 0C4.0302 0 2.21625 0.941861 1.08253 2.61628C-0.0511958 4.25581 -0.312824 6.34884 0.384851 8.18023C0.576711 8.6686 0.873223 9.17442 1.25694 9.62791L5.66973 14.8256C5.77439 14.9302 5.87904 15 6.03601 15C6.19299 15 6.29764 14.9302 6.40229 14.8256L10.8325 9.62791C11.2162 9.17442 11.5302 8.68605 11.7046 8.18023C12.4023 6.34884 12.1407 4.25581 11.0069 2.61628ZM6.05346 8.7907C4.55346 8.7907 3.31508 7.55233 3.31508 6.05233C3.31508 4.55233 4.55346 3.31395 6.05346 3.31395C7.55346 3.31395 8.79183 4.55233 8.79183 6.05233C8.79183 7.55233 7.5709 8.7907 6.05346 8.7907Z" fill="#FFD54F"/>
                    </svg>
                  </div>
                  <ul className="Spisok__dropdown">
                    <>
                    {
                      Cities.map((item)=>{
                        return(
                          <Link to={`/katalog/city=${item.city}`} className="Items3"><li className="dropdown__item" id={item.city} >Квартиры на сутки в {item.citySklon}</li></Link>
                        )
                      })
                    }
                    </>
                  </ul>
                </div>
              </NavLink>
          <NavLink to="123456"className="Items">Коттеджи и усадьбы</NavLink>
          <NavLink to="1234567"className="Items">Бани и Сауны</NavLink>
          <NavLink to="12345678"className="Items">Авто напрокат</NavLink>
          <Link to=""><button className="btndob">+ Разместить объявление</button></Link>
          </div>
        </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            {
              <Formik 
                initialValues={{
                  login:login}} 
                  validateOnBlur
                  onSubmit={changeUser}>
               {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty})=>(
                <Form style={{width:"600px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                  <p className="innerText_Module">Редактирование пользователя</p>
                  <div className="LOGIN">
                  <Field className={((touched.login && errors.login)||(values.login===""))? "login__error":"login"} onChange={handleChange} onBlur={handleBlur} name = "login" type="text" validate={validateLogin} value={values.login} placeholder="Логин"/>
                    <svg className={((touched.login && errors.login)||(values.login===""))? "icon__error":"iconHidden"} style={{right:"44%"}} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM10.5 2C11.6 2 12.4 2.9 12.3 4L11.5 12H9.5L8.7 4C8.6 2.9 9.4 2 10.5 2ZM10.5 18C9.4 18 8.5 17.1 8.5 16C8.5 14.9 9.4 14 10.5 14C11.6 14 12.5 14.9 12.5 16C12.5 17.1 11.6 18 10.5 18Z" fill="#EB5757"/>
                    </svg>
                    <svg className="userOf" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2831_1547)">
                      <path opacity="0.3" className="user" d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" fill="#664EF9"/>
                      <path opacity="0.3" className="user" d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" fill="#664EF9"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_2831_1547">
                      <rect width="20" height="20" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                </div>
                <div className={("OshibkaVvoda" && ((touched.login&&errors.login)||(Login==false)||(values.login=="")))? "OshibkaVvoda fix":"OshibkaVvoda"} style={{padding: "9.5px 13px"}}>
                  <div className="">
                    <p className="OshibkaVvodaText">{((Login==false?"Логин уже занят":"")||((values.login=="")?"Логин не может быть пустым":""))}</p>
                  </div>
                  <div className="">
                    <svg style={{marginLeft:"15px",paddingTop:"5px"}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C11.1 2 11.9 2.9 11.8 4L11 12H9L8.2 4C8.1 2.9 8.9 2 10 2ZM10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18Z" fill="white" fill-opacity="0.5"/>
                    </svg>
                  </div>
                </div>
                  <div className="close">
                    <button className="Voyti popupbtn" disabled={((Login==false)||(values.login==""))?isValid:!isValid} onClick={()=>{handleSubmit}} type="submit">Завершить редактирование</button>
                  </div>
                </Form> 
                )}
              </Formik>
            }
          </Modal>
        </>
  );
}
export default Header
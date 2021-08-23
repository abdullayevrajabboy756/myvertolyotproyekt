import React, {useState} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import ModelQism from "./HarakatQismlar/ModelQism";
import ObzorQism from "./HarakatQismlar/ObzorQism";
import KompaniyaQism from "./HarakatQismlar/KompaniyaQism";
import PremushestvoQism from "./HarakatQismlar/PremushestvoQism";
import KalkulyatorQism from "./HarakatQismlar/KalkulyatorQism";
import UslugiQism from "./HarakatQismlar/UslugiQism";
import NovostiQism from "./HarakatQismlar/NovostiQism";
import AsosiyQism from "./HarakatQismlar/AsosiyQism";
import MyLinks from "./HarakatQismlar/MyLinks";


function HomeQisim(props) {
    function changeMenu() {
        setOpenMenu(!openMenu)
    }

    const [openMenu, setOpenMenu] = useState(false);
    return (
        <BrowserRouter>
            <div>
                <div className="d-flex Myvertolyot">
                    <div className="left">
                        <button type="button" onClick={changeMenu}
                                className={openMenu ? "click mybtn" : "click mybtn click-close"}><img
                            src="images/menu.png" alt=""/></button>
                        <button type="button" className="mysbtns">
                            <div className="left-bottom2 ">дальше</div>
                            <div className="left-bottom ">Листайте</div>
                            <div className="text-center ikknchs"><img src="images/left-bottom.png" alt=""/></div>
                        </button>

                        <div className={openMenu ? "admin-menu" : "admin-menu admin-menu-close"}>
                            <div className="d-flex one">
                                <div className=""><img src="images/Logo.png" alt=""/></div>
                                <button type="button" onClick={changeMenu}
                                        className={openMenu ? "click mybtn" : "click mybtn click-close"}><img
                                    src="images/Close.png" alt=""/></button>
                            </div>

                            <div className="mysize"><a href="/okompani"> История компании</a></div>
                            <div className="mysize"><a href="/novosty">Каталог вертолетов</a></div>
                            <div className="mysize"><a href="/obzorvertolyot">Каталог запчастей</a></div>
                            <div className="mysize"><a href="/kalkulyator">Конфигуратор</a></div>
                            <div className="mysize"><a href="/novosti">Новости</a></div>
                            <div className="mysize"><a href="/">Обслуживание</a></div>
                            <div className="mysize"><a href="/modelqsm">Техническая информация</a></div>
                            <div className="mysize"><a href="/uslugi">Услуги</a></div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                            <div className="lines"></div>
                            {/*
                            <div className=""> +7 (495) 723-44-44</div>
                            <div className="">+7 (963) 777-57-57</div>
                            <div className=""><a href="">info@aerounion.msk.ru</a></div>
                            <div className="">Координаты: N56.12695 E037.0695</div>
                            <div className="">Частота радиосвязи: 123.9 Мгц - UUCH</div>*/}


                        </div>
                    </div>
                    <div className="right">
                        <div className="right-bg">

                            <div className="right-top">
                                <ul>
                                    <li className="nav-item topdan">
                                        <a href="/" className="navbar-brand"><img src="images/Logo.png" alt=""/></a>
                                    </li>

                                    <li exact={true} className="nav-item">
                                        <NavLink activeClassName="text-style" to="/" className="nav-link">

                                        </NavLink>
                                    </li>

                                    <li className="nav-item chapdan1">
                                        <NavLink activeClassName="text-style" to="/modelqsm" className="nav-link">
                                            Модели
                                        </NavLink>
                                    </li>

                                   <li className="nav-item chapdan">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/obzorvertolyot">
                                            Обзор вертолетов
                                        </NavLink>
                                    </li>

                                    <li className="nav-item chapdan">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/okompani">
                                            О компании
                                        </NavLink>
                                    </li>

                                    <li className="nav-item chapdan">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/preimenshestvo">
                                            Преимущества
                                        </NavLink>
                                    </li>

                                    <li className="nav-item chapdan">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/kalkulyator">
                                            Калькулятор
                                        </NavLink>
                                    </li>

                                    <li className="nav-item chapdan">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/uslugi">
                                            Услуги
                                        </NavLink>
                                    </li>

                                    <li className="nav-item chapdan">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/novosti">
                                            Новости
                                        </NavLink>
                                    </li>

                                    <li className="nav-item my-links ">
                                        <NavLink className="nav-link" activeClassName="text-style" to="/novosty">

                                        </NavLink>
                                    </li>

                                    <li className="d-flex">
                                        <button className="ones" type="button">ENG</button>

                                        <div className="toes"></div>

                                        <button type="button" className="threes">RUS</button>

                                        <button className="foores" type="button">
                                            <div className="imgs">
                                                <img className="bir" src="images/one.png" alt=""/>
                                                <img src="images/two.png" alt=""/>
                                                <img className="ikki" src="images/three.png" alt=""/>
                                            </div>
                                        </button>

                                        <button type="button" className="fivees"><img src="images/search.png" alt=""/>
                                        </button>

                                    </li>


                                </ul>


                            </div>

                            <div className="right-bottom">
                                <Switch>
                                    <Route exact path="/" component={AsosiyQism}/>
                                    <Route path="/modelqsm" component={ModelQism}/>
                                    <Route path="/obzorvertolyot" component={ObzorQism}/>
                                    <Route path="/okompani" component={KompaniyaQism}/>
                                    <Route path="/preimenshestvo" component={PremushestvoQism}/>
                                    <Route path="/kalkulyator" component={KalkulyatorQism}/>
                                    <Route path="/uslugi" component={UslugiQism}/>
                                    <Route path="/novosti" component={NovostiQism}/>
                                    <Route path="/novosty" component={MyLinks}/>
                                </Switch>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default HomeQisim;
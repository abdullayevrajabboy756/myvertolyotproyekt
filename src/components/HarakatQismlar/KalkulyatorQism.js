import React from 'react';

function KalkulyatorQism(props) {
    return (
        <div>
            <div className="kalkulyators d-flex">
                <div className="one">
                    <img src="images/map.png" alt=""/>
                </div>
                <div className="qas1"><img src="images/second.png" alt=""/></div>
                <div className="qas2"><img src="images/first.png" alt=""/></div>
                <div className="qas3"><img src="images/moshin.png" alt=""/></div>
                <div className="qas4"><img src="images/kokver.png" alt=""/></div>
                <div className="qas5"><img src="images/qizilyol.png" alt=""/></div>
                <div className="qas6"><img src="images/kokyol.png" alt=""/></div>
                <div className="two">
                    <div className="one d-flex">
                        <div className="uppr">на авто</div>
                        <span>или</span></div>
                    <div className="two1"> на robinson?</div>
                    <div className="d-flex two-one">
                        <form action="" className="d-flex input-group">
                            <input type="radio"  className="active"/>
                            <div className="lefd">Популярный маршрут</div>
                            <input type="radio" className=""/>
                            <div className="">Другой маршрут</div>
                        </form>
                    </div>

                    <div className="two2">
                        <label htmlFor="ons" className="d-block">От куда:</label>
                        <select name="ons">
                            <option value="">Москва</option>
                            <option value="">Sanktpeterburg</option>
                        </select>

                        <label htmlFor="ons" className="d-block">Куда:</label>
                        <select name="ons">
                            <option value="">Тверь</option>
                            <option value="">Москва</option>
                            <option value="">Sanktpeterburg</option>
                        </select>
                    </div>

                    <div className="leave-yol d-flex">
                        <div className=""><img src="images/vertalyot.png" alt=""/></div>
                        <div className="sur">40 мин</div>
                        <div className=""><img src="images/avto.png" alt=""/></div>
                        <div className="sur2">2 ч 20 мин</div>
                    </div>

                    <div className="qwer">
                        Поездка Москва – Тверь на машине: 183км / 70км/ч = 2ч 20 мин. Поездка Москва – Тверь на вертолете:
                        162км / 246 км/ч = 40 мин
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KalkulyatorQism;
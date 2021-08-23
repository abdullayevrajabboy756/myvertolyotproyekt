import React from 'react';

function PremushestvoQism(props) {
    return (
        <div className="premushestvo">
            <div className="d-flex">
                <div className="chap-tomon">
                    <div className="bir">что вы получите</div>
                    <div className="ikki">приобретая robinson</div>
                    <div className="d-flex">

                        <div className="yuldz">
                            <div className="yuldz1"><img src="images/bir.png" alt=""/></div>
                            <div className="yuldz2"><img src="images/ikki.png" alt=""/></div>
                            <div className="star  "><img src="images/star 1.png" alt=""/></div>
                            <div className="">
                                <div className="top-qolip text-center ">Статус</div>
                                <div className="qolip text-center leftdan">Вертолет - это престижная покупка, которая
                                    подчеркивает не только ваш статус, но и статус вашей компании</div>
                            </div>
                        </div>

                        <div className="soat">
                            <div className="soat1"><img src="images/bir.png" alt=""/></div>
                            <div className="soat2"><img src="images/ikki.png" alt=""/></div>
                            <div className="soat  star"><img src="images/clock 1.png" alt=""/></div>
                            <div className="">
                                <div className="top-qolip text-center">Время</div>
                                <div className="qolip text-center leftdan">Экономия времени
                                    при полете на вертолете относительно автомобиля составляет от 3 до 8 раз</div>
                            </div>
                        </div>

                        <div className="kaptar">
                            <div className="kaptar1"><img src="images/bir.png" alt=""/></div>
                            <div className="kaptar2"><img src="images/ikki.png" alt=""/></div>
                            <div className="kaptar star"><img src="images/bird.png" alt=""/></div>
                            <div className="">
                                <div className="top-qolip text-center">Свобода</div>
                                <div className="qolip text-center leftdan">Вертолет способен доставить вас в те места, куда не
                                    добраться на любом другом транспорте для бизнеса или же отдыха</div>
                            </div>
                        </div>

                        <div className="svetofor">
                            <div className="svetofor1"><img src="images/bir.png" alt=""/></div>
                            <div className="svetofor2"><img src="images/ikki.png" alt=""/></div>
                            <div className="svetofor text-center"><img src="images/svetofor.png" alt=""/></div>
                            <div className="">
                                <div className="top-qolip text-center">Отсутствие пробок</div>
                                <div className="qolip text-center">Никакие пробки и заторы на дорогах не страшны</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ong-tomon">
                    <div className="emayl">
                        <div className="bir text-center">Есть Вопросы?</div>
                        <div className="ikki text-center">Оставьте заявку прямо сейчас</div>
                        <div className="text-center"><input type="text" placeholder="Имя"/></div>
                        <div className="text-center"><input type="number" placeholder="Номер телефона"/></div>
                        <div className="text-center"><button type="button" className="">Оставить заявку</button></div>

                        <div className="text-center tort">Оставьте заявку, мы перезвоним вам  время <br/>
                        и ответим на все ваши вопросы</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PremushestvoQism;
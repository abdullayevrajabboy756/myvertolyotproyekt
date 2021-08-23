import React from 'react';

function ObzorQism(props) {

    return (
        <div className="obzor-qism">
            <div className="second-obzor d-flex">

                <div className="obzor-bir">
                    {/*<div className="d-flex bir">
                        <button><img src="images/prev.png" alt=""/></button>
                        <div className="leftright"><span>02</span>/04</div>
                        <button><img src="images/next.png" alt=""/></button>
                    </div>*/}

                    <div className="ikki">Robinson R44</div>

                    <div className="uch">Значимость этих проблем настолько очевидна,
                        что укрепление и развитие структуры требуют
                        определения и уточнения дальнейших
                        направлений развития.
                    </div>

                    <div className="d-flex tort">
                        <button type="button" className="btn bir soznt">Подробнее</button>
                        <button type="button" className="btn ikki ">Конфигуратор</button>

                        <div className="mylinksd">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="/obzorvertolyot">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="/novosty">Next</a></li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className="obzor-ikki">
                    <div className="one">
                        <img src="images/plas.png" alt=""/>
                    </div>

                    <div className="two">
                        <img src="images/plas.png" alt=""/>
                    </div>

                    <div className="three">
                        <img src="images/plas.png" alt=""/>
                    </div>

                    <div className="bir"><img src="images/krug.png" alt=""/></div>
                    <div className="ikki"><img src="images/krug.png" alt=""/></div>


                </div>

                <div className="obzor-uch">
                    <div className="bir">
                        <div className="sizes1">287</div>
                        <div className="sizes2"> км/ч</div>
                    </div>
                    <div className="ikki">
                        <div className="sizes1">6</div>
                        <div className="sizes2">человек</div>
                    </div>
                    <div className="uch">
                        <div className="sizes1">870</div>
                        <div className="sizes2">литров</div>
                    </div>
                    <div className="tort">
                        <div className="sizes1">5</div>
                        <div className="sizes2">часов</div>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default ObzorQism;
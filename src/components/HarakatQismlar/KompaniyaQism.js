import React from 'react';

function KompaniyaQism(props) {
    return (
        <div className="kompaniya-qism d-flex">
            <div className="lefts">
                <div className="bir">Кратко</div>
                <div className="ikki">о компании</div>
                <div className="uch">Значимость этих проблем настолько очевидна, что укрепление и развитие структуры
                    требуют определения и уточнения дальнейших направлений развития.
                </div>
                <div className="tort">Развитие структуры требуют определения и уточнения дальнейших направлений
                    развития.
                </div>
                <div className="d-flex besh">
                    <div className="besh1">
                        <div className="yuqor">15 лет</div>
                        <div className="past">Успешной работы</div>
                    </div>
                    <div className="besh2">
                        <div className="yuqor">5000+</div>
                        <div className="past">Довольных клиентов</div>
                    </div>
                    <div className="besh3">
                        <div className="yuqor">100+</div>
                        <div className="past">Человек в команде</div>
                    </div>
                </div>
                <div className="olti">
                    <button type="button" className="d-flex">
                        Узнать больше
                        <div className=""><img src="images/chapga.png" alt=""/></div>
                    </button>
                </div>
            </div>
            
            <div className="rights d-flex">
                <div className="one d-flex">

                    <div className="topdansur">Официальный диллер</div>
                </div>
                <div className="right-two">

                    <div className="posis-one">
                        <div className="onst"><img src="images/black.png" alt=""/></div>
                        <img src="images/ons.png" alt=""/>
                    </div>

                    <div className="posis-two">
                        <div className="two" ><img src="images/black.png" alt=""/></div>
                        <img src="images/twos.png" alt=""/>
                    </div>

                    <div className="posis-three">
                        <div className="thres" ><img src="images/white.png" alt=""/></div>
                        <img src="images/threes.png" alt=""/>
                    </div>

                    <div className="d-flex two">
                        <div className="two1">Aero</div>
                        <div className="two2">union</div>
                    </div>
                    <div className="three"><img src="images/Play.png" alt=""/></div>
                </div>
            </div>
        </div>
    );
}

export default KompaniyaQism;
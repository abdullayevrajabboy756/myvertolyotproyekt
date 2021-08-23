import React from 'react';

function AsosiyQism(props) {
    return (
        <div className="bottom-one">
            <div className="d-flex bottoms">
                <div className="onset">
                    <div className="birs">Успейте купить </div>
                    <div className="ikks"> Robinson R44, R66</div>
                    <div className="uchs">Желающие приобрести вертолет могут оформить заказ по действующим
                        ценам до очередного ежегодного повышения цен в январе 2021 года</div>
                    <div className="torts">
                        <button type="button" className="btn">Оформить заказ</button>
                    </div>
                    <div className="spinner-border text-muted spins"></div>
                </div>
                <div className="twoset">
                    <div className="lines"></div>
                    <a href="facebook.com" target="_blank"  className="d-block"><img src="images/facebook.png" alt=""/></a>
                    <a href="youtube.com" target="_blank"  className="second d-block"><img src="images/youtube.png" alt=""/></a>
                    <a href="instagram.com" target="_blank"  className=""><img src="images/Instagram.png" alt=""/></a>
                </div>
            </div>
        </div>
    );
}

export default AsosiyQism;
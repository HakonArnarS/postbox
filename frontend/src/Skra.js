import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import './App.scss';


const Skra = (props)=>{
    const [delivery, setDelivery] = useState({ name: '', email: '', phone: '', numberOfPackages: '', pontunarnr: '', lysing: '',  });

    const publish = (e) => {
        e.preventDefault(); 
        console.log(delivery);
        fetch('http://localhost:3001/post-orders', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(delivery)
        })
        .then(r =>
            r.text()
        )
        .then(buisKey =>
            props.setBuisKey(buisKey)  
        )
        
    }


    const getName = e => {
        setDelivery({ ...delivery, name: e.target.value })
    };
    const getEmail = e => {
        setDelivery({ ...delivery, email: e.target.value })
    };
    const getPhone = e => {
        setDelivery({ ...delivery, phone: e.target.value })
    };
    const getPackages = e => {
        setDelivery({ ...delivery, numberOfPackages: e.target.value })
    };
    const getOrderNr = e => {
        setDelivery({ ...delivery, pontunarnr: e.target.value })
    };
    const getDescription = e => {
        setDelivery({ ...delivery, lysing: e.target.value })
    };

    


    return(
        <div>
            <div>
                <Link to="/home"><button>Skrá sendingu</button></Link>
                <Link to="/sendingar"><button>Mínar sendingar</button></Link>
                <Link to="/"><button onClick={props.logOut}>Log Out</button></Link>
            </div><br/><br/>
            <div className="skraContainer">
                <div>
                    <form onSubmit={publish} className="formSkra">
                        {/* <input  name="senderName" id="senderName" defaultValue={props.user.name} required></input><br/><br/> */}
                        <h2>{props.user.name}</h2>

                        <label htmlFor="name">Nafn viðtakanda*</label><br/>
                        <input name="name" id="name" type="text" onKeyUp={getName}  required></input><br/>

                        <label htmlFor="email">Netfang viðtakanda*</label><br/>
                        <input name="email" id="email" type="text" onKeyUp={getEmail} required></input><br/>

                        <label htmlFor="phone">Farsími viðtakanda*</label><br/>
                        <input name="phone" id="phone" type="text" onKeyUp={getPhone} required></input><br/>

                        <label htmlFor="numberOfPackages">Fjöldi pakka</label><br/>
                        <input name="numberOfPackages" id="numberOfPackages" type="number"  onChange={getPackages}></input><br/>
                        
                        <label htmlFor="pontunarnr">Pöntunarnúmer</label><br/>
                        <input name="pontunarnr" id="pontunarnr" type="text" onKeyUp={getOrderNr} required></input><br/>
                        
                        <label htmlFor="lysing">Lýsing á sendingu</label><br/>
                        <input name="lysing" id="lysing" type="text" onKeyUp={getDescription} required></input><br/><br/>

                        <button type="submit" className="btn1">Skrá sendingu</button>
                    </form><br/>
                    
                </div>
                
                <div className="skraInfo">
                    <h3>Upplýsingar / leiðbeiningar</h3>
                    <ul>
                        <li>Ef sendingin fer í snjallboxið, fær sendandinn strikamerki, sem hann skannar inn, og kóða sem hann notar til þess 
                            að opna boxið sem sendingin verður geymd í. Boxið þarf að velja hjá snjallboxinu sjálfu.
                        </li>
                        <li>Þegar Snjallbox er hlaðið,  þarf að velja stærðina (1-4) á talnaborði og smella á # til að staðfesta. 
                            Stærðir: (breidd x hæð x dýpt í mm) 
                            a. 1 minnsta boxið (282mm x 122mm x 586mm) 
                            b. 3 miðstærð (282mmx 274mm x 586mm)  
                            c. 4 stærsta hólfið (282mmx 427mm x 586mm).
                        </li>
                        <li>Ef pakkinn fer í hillu fer hann í geymslu hjá Origo sem staðsett er í Borgartúni 37 og viðtakandi fær sendingarnúmer 
                            eða QR kóða sem hann sýnir.
                        </li>
                        <li>Snjallboxið er staðsett  hjá Origo Borgartúni 37. Opið er í verslun Origo alla virka daga 9-17.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Skra; 
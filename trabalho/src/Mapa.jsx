import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { useState } from 'react';

import Menu from './components/Menu';
import style from "./Mapa.module.css"


export const Mapa = () => {
    const geoData = ({lat: -25.424427733698327, lng: -49.272273732230715 }) 

    const Numero = '5541998802927'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleWhatsAppMessage = () => {
        const {name, email, message} = formData;
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${Numero}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}`;

        window.open(whatsappUrl, '_blank');
    }

    return(
        <div className={style['wrap-all-contact']}>
            <Menu/>
            <h1 className={style.wrapH1}>Contato</h1>
            <br />
            <div className={style.wrapTwoDivs}>
                <div className={style.wrapMap}>
                    <h2>Mapa</h2>
                    <MapContainer center={[geoData.lat, geoData.lng]} zoom={14} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {geoData.lat && geoData.lng &&
                        <Marker position={[geoData.lat, geoData.lng]}>
                        <Popup>
                        <a target='_blank' href={`https://www.google.com.br/maps/place/Sistema+Fiep+-+Unidade+Centro/@${geoData.lat},${geoData.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu`}>Google maps view</a>
                        </Popup>
                        </Marker>}
                    </MapContainer>
                </div>
                <div>
                    <h3>WhatsApp</h3>
                    <div className={style.inputsDiv}>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="name" >Nome:</label>
                            <input className={style.inputS1} type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
                        </div>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="email" >Email:</label>
                            <input className={style.inputS1} type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="message" >Mensagem:</label>
                            <textarea className={style.txtArea} id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                            <button className={style.btnTec} onClick={handleWhatsAppMessage}>Enviar mensagem</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
import style from './Card.module.css'


export default function Card(props){
    return(
        <div className={style.card}>
            <h2>{props.title}</h2>
            <img src={props.imgSrc} alt={props.title} width={100} height={'auto'}/>
            <p style={{color: props.statusColor}}>{props.desc}</p>
            
        </div>
    )
}
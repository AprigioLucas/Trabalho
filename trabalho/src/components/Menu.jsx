import style from './Menu.module.css'
    
export default function Menu(){
    return(
        <div className={style['wrap-menu']}>
            <p>
                <a href={`/`}>Tecnologias</a>
            </p>
            
            <p>
                <a href={'/Media'}>Media</a>
            </p>
           
            <p>
                <a href={'/Mapa'}>Mapa</a>
            </p>
            
            <p></p>

        </div>
    )
}
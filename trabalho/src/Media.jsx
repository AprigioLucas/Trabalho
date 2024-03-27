import style from "./Media.module.css"
import Menu from "./components/Menu"

import { useEffect, useState } from "react"

export const Media = () => {
    const [numero1, setNumero1] = useState("")
    const [numero2, setNumero2] = useState("")
    const [numero3, setNumero3] = useState("")
    const [numero4, setNumero4] = useState("")
    const [numero5, setNumero5] = useState("")
    const [resp, setResp] = useState()

    const handleCalc = () => {
        const num1 = parseFloat(numero1)
        const num2 = parseFloat(numero2)
        const num3 = parseFloat(numero3)
        const num4 = parseFloat(numero4)
        const num5 = parseFloat(numero5)

        if(!isNaN(num1) && !isNaN(num2)&& !isNaN(num3)&& !isNaN(num4)&& !isNaN(num5)){
            setResp(num1 + num2 + num3 + num4 + num5)
           
        }
    }

    const handleMedia = () => {
        handleCalc(); 
        const media = resp / 5; 
        setResp(media); 
        
    }
   
    return(
        <div className={style.sectionCalc}>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
                    <div className={style.wrapInputsCalc}>
                        <input 
                        className={style.inpStyle}
                        type="text"
                        placeholder="Digite o primeiro número" 
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text" 
                        placeholder="Digite o segundo número" 
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text" 
                        placeholder="Digite o terceiro número" 
                        value={numero3}
                        onChange={(e) => setNumero3(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text" 
                        placeholder="Digite o quarto número" 
                        value={numero4}
                        onChange={(e) => setNumero4(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text" 
                        placeholder="Digite o quinto número" 
                        value={numero5}
                        onChange={(e) => setNumero5(e.target.value)}
                        />
                    </div>
                    <div className={style.wrapInputsCalc}>
                        <div className={style.wrapEach}>
                            <h1>Media</h1>
                            {!isNaN(resp) && <p>{resp.toFixed(2)}</p>}
                            <button onClick={handleMedia}>Calcular media</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
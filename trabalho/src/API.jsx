import { useState } from "react"
import { Card } from "./components/Card"
import Menu from "./components/Menu"
import {apiRMCharacters} from "./api/server"
import { useEffect } from "react"
import style from "./API.module.css"
export const RickAndMorty = () => {

const [data, setData] = useState([])
const [page, setPage] = useState("")
const [searchName, setSearchName] = useState("")


  useEffect(()=> {
    apiRMCharacters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
        if(!response.data.results){
            console.log("Array vazio")
        }
        setData(response.data.results)
    }).catch((error) => {
        if(error.response.status === 404){
            console.log("Esta página não contém este personagem")
        }
        if(error.response.status === 500){
            console.log("Erro de conexão com servidor")
        }
        console.error(error)
    })
  }, [page, searchName])

    return(
        <>
            <Menu/>
            <div className= {style.wrapContainer}>
            <h1> API do Rick and Morty </h1>

            <input className={style.wrapInputs} 
                type="text" 
                placeholder="Busque uma página" 
                value={page}
                onChange={(event) => setPage(event.target.value)}
                />
            <br />
            <input 
                type="text" 
                placeholder="Digite um nome" 
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
                />
            <br />
             <div className={style.wrapCards}>
             {data.map((item) => {
                 return(
                     <div key={item.id}>
                    <Card 
                    title={item.name}
                    desc={item.status}
                    imgSrc={item.image}
                    />
                    <div>
                      {item.status === "Alive"
                       ? <div style={{background: "green", width: "100px"}}>Vivo</div>
                       : item.status === "Dead"
                       ? <div style={{background: "red", width: "100px"}}>Morto</div>
                       : <div style={{background: "grey", width: "100px"}}>desconhecido</div>}
                    </div>
                    </div>
                )
            })}
             </div>
            </div>
        </>
    )
}
   
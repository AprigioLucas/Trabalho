import { useState } from "react";
import Card from "./components/Card";
import Menu from "./components/Menu"
import {apiRMCharacters} from "./api/server"
import { useEffect } from "react";
import style from "./RickAndMorty.module.css"

export const RickAndMorty = () =>{
    const[data, setData] = useState([])
    const[page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")

    useEffect(()=> {
        apiRMCharacters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            if(!response.data.results){
                console.log("Array vazio")
            }
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                console.log("Não existe esse personagem nessa pagina")
            }
            if(error.response.status === 500){
                console.log("Erro de conexão com servidor")
            }
            console.error(error)
        })
      }, [page, searchName])
    
        return(
            <div>
                <Menu/>
                <div className={style.wrapContainer}>

                <h1>Rick and Morty API</h1>
    
                <input 
                    type="text" 
                    placeholder="Digite uma página" 
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
                 <section className= {style.wrapCards} >
                 {data.map((item) => {
                     return(
                         <div key={item.id}>
                        <Card 
                        title={item.name}
                        desc={item.status}
                        // value={item.status}
                        imgSrc={item.image}
                        statusColor={item.status === 'Alive' ? 'green' 
                              : item.status === 'Dead' ? 'red' 
                              : 'gray'}
                        />
                       
                        </div>
                    )
                })}
                 </section>
                </div>
            </div>
        )

}
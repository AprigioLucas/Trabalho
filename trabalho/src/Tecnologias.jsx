import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu'
import style from './Tecnologias.module.css'


import reactImg from './assets/svg/react.svg'
import viteImg from './assets/img/VITE.svg'
import axiosImg from './assets/img/AXIOS.webp'
import reactrdImg from './assets/img/REACTRD.webp'
import npmImg from './assets/img/NPM.png'
import nodeImg from'./assets/img/NODE.png'

export const Tecnologias =()=>{
    const [show, setShow] = useState('all');
    
    return(
        <>
        <Menu/>
        <section className={style['wrap-tecnologias']}>

        <h1>Tecnologias:</h1>
        <div className={style['wrap-btns-tec']}>
                <button className={style.btnTec} onClick={() => setShow('react')}>REACT</button>
                <button className={style.btnTec} onClick={() => setShow('vite')}>VITE</button>
                <button className={style.btnTec} onClick={() => setShow('axios')}>AXIOS</button>
                <button className={style.btnTec} onClick={() => setShow('react_rd')}>REACT ROUTER DOM</button>
                <button className={style.btnTec} onClick={() => setShow('npm')}>NPM</button>
                <button className={style.btnTec} onClick={() => setShow('node')}>NODE</button>
                <button className={style.btnTec} onClick={() => setShow('all')}>Todas</button>
               </div>
                <div className={style['wrap-cards-tec']}>
                   {show === 'react' && <Card title='REACT' imgSrc={reactImg} desc='React é uma biblioteca JavaScript utilizada para construir interfaces de usuário interativas e reativas.'/>}
                   {show === 'vite' && <Card title='VITE' imgSrc={viteImg} desc='Vite é uma ferramenta de desenvolvimento web que oferece um ambiente de construção extremamente rápido para aplicativos baseados em JavaScript e TypeScript.'/>}
                   {show === 'axios' && <Card title='AXIOS' imgSrc={axiosImg} desc='O Axios é uma biblioteca JavaScript que facilita o processo de fazer solicitações HTTP a servidores, oferecendo uma interface simples e eficaz para interagir com APIs.'/>}
                   {show === 'react_rd' && <Card title='REACT_RD' imgSrc={reactrdImg} desc='O React Router DOM é uma biblioteca que facilita a navegação e o roteamento em aplicações web construídas com React, permitindo a criação de rotas dinâmicas e gerenciamento de URLs dentro da aplicação.'/>}
                   {show === 'npm' && <Card title='NPM' imgSrc={npmImg} desc='O npm (Node Package Manager) é um gerenciador de pacotes para o ambiente Node.js, utilizado para instalar, compartilhar e gerenciar dependências de projetos JavaScript.'/>}
                   {show === 'node' && <Card title='NODE' imgSrc={nodeImg} desc='Node.js é um ambiente de execução de JavaScript que permite aos desenvolvedores criar aplicativos de rede escaláveis e de alto desempenho, utilizando o JavaScript tanto no lado do servidor quanto no cliente.'/>}
                   {show === 'all' && 
                   <>
                   <Card title='REACT' imgSrc={reactImg} desc='React é uma biblioteca JavaScript utilizada para construir interfaces de usuário interativas e reativas'/>
                   <Card title='VITE' imgSrc={viteImg} desc='Vite é uma ferramenta de desenvolvimento web que oferece um ambiente de construção extremamente rápido para aplicativos baseados em JavaScript e TypeScript.'/> 
                   <Card title='AXIOS' imgSrc={axiosImg} desc='O Axios é uma biblioteca JavaScript que facilita o processo de fazer solicitações HTTP a servidores, oferecendo uma interface simples e eficaz para interagir com APIs.'/>
                   <Card title='REACT_RD' imgSrc={reactrdImg} desc='O React Router DOM é uma biblioteca que facilita a navegação e o roteamento em aplicações web construídas com React, permitindo a criação de rotas dinâmicas e gerenciamento de URLs dentro da aplicação.'/>
                   <Card title='NPM' imgSrc={npmImg} desc='O npm (Node Package Manager) é um gerenciador de pacotes para o ambiente Node.js, utilizado para instalar, compartilhar e gerenciar dependências de projetos JavaScript.'/>
                   <Card title='NODE' imgSrc={nodeImg} desc='Node.js é um ambiente de execução de JavaScript que permite aos desenvolvedores criar aplicativos de rede escaláveis e de alto desempenho, utilizando o JavaScript tanto no lado do servidor quanto no cliente.'/>
                   </>}
                </div>
                </section>
        </>

    )
}
"use client";
import Head from "next/head";
import React from "react";
import Image from "next/image";

//import Estilo
import styles from "./page.module.css";

// import Componentes
import Header from "./Header/Header";
import MolduraInformacoes from "./Componentes/MolduraInformações/informacoes";
import CardDepoimento from "./Componentes/CardDepoimento/depoimentos";

//import de Imagens
import LogoDente from "@/../public/dente01.png";
import Aparelho from "@/../public/aparelho.png";
import Cliente1 from "@/../public/cliente01.png";
import Cliente2 from "@/../public/cliente02.png";
import Cliente3 from "@/../public/cliente03.png";

export default function Home() {
  return (
    <>
     <Head>
        <title>Dentes Saudaveis</title>
        <meta name="description" content="Dentes Saudaveis á 40 anos no mercado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dente01.png"/>
      </Head>
        <Header titulo="Dentes Saudáveis" imagem={LogoDente} tituloImagem="Dente Molar"/>
        <main className={styles.containerMain}>
          <div className={styles.containerTitulo}>
            <h1>Os melhores <strong>Aparelhos Dentários </strong>!</h1>
            <p>Confira a baixo todas as especialidades odontológicas que temos á sua disposição!</p>
          </div>
          <div className={styles.containerEspecialidades}>
            <ul>
                <li>Pré-avaliação</li>
                <li>Aparelhos Dentários</li>
                <li>Raio-X digita</li>
                <li>Clareamento dental</li>
            </ul>
          </div>
          <section className={styles.containerBeneficios}>
            <h2>POR QUE USAR <strong>APARELHO?</strong></h2>
            <div className={styles.containerImagemAparelho}>
              <Image className={styles.imagemAparelho} src={Aparelho} title="Aparelho" alt="Aperelho"/>
            </div>
          </section>
          <section className={styles.containerTextosBeneficios}>
            <article>
              <h3>Alinhar os dentes</h3>
              <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
            </article>
            <article>
              <h3>Melhorar a dicção e a higiene dentária</h3>
              <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. <br /> Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
            </article>
            <article>
              <h3>Corrigir espaço entre os dentes</h3>
              <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. <br /> Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
            </article>
          </section>
          <section className={styles.containerDepoimentos}>
            <h2>Veja o que nossos <span>clientes</span> estão falando</h2>
            <div  className={styles.containerDepoimentosCard}>
              <CardDepoimento imagem={Cliente1} nome="Pedro" Depoimento="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."/>
              <CardDepoimento imagem={Cliente2} nome="Rafaela" Depoimento="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."/>
              <CardDepoimento imagem={Cliente3} nome="Stefani" Depoimento="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."/>
            </div>
          </section>
          <section className={styles.ContainerInformacoes}>
           
            
          </section>
      </main>
    </>
  )
}


"use client";
import Head from "next/head";
import React from "react";

//import Estilo
import styles from "./page.module.css";

// import Componentes
import Header from "./Header/Header";
import MolduraInformacoes from "./Componentes/MolduraInformações/informacoes";
import CardDepoimento from "./Componentes/CardDepoimento/depoimentos"

//import de Imagens
import LogoDente from "@/../public/dente01.png"


export default function Home() {
  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header titulo="Dentes Saudáveis" imagem={LogoDente} tituloImagem="Dente Molar"/>
       <main className={styles.containerMain}>
        <div className={styles.containerTitulo}>
          <h2>Os melhores <strong>Aparelhos Dentários </strong>!</h2>
          <p>Confira a baixo todas as especialidades odontológicas que temos á sua disposição!</p>
        </div>
       </main>
    </>
  );
}

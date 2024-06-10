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
import Dentista1 from "@/../public/dentista01.png";
import Dentista2 from "@/../public/dentista02.png";

export default function Home() {
  return (
    <>
     <Head>
     <meta charset="UTF-8"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
         
          <section className={styles.containerInformacoes}>
          
           <MolduraInformacoes titulo="Horários">
            <ul>
            <li>Segunda - 09:00 ás 18:00</li>
            <li>Terça - 09:00 ás 18:00</li>
            <li>Quarta - 09:00 ás 18:00</li>
            <li>Quarta - 09:00 ás 18:00</li>
            <li>Quinta - 09:00 ás 18:00</li>
            <li>Sexta - 09:00 ás 17:00</li>
            <li>Sábado - 09:00 ás 12:00</li>
            </ul>
            </MolduraInformacoes>
          
            <MolduraInformacoes titulo="Dentistas">
              <div className={styles.containerImagemDentista}>
                <Image className={styles.imagemDentista} src={Dentista2} width={100}  alt="Dentista" title="Dentista"/>
                
                <div className={styles.textosMolduraDentista}>
                  <h3>Dr.Jóse Fonseca </h3>
                  <p>Segunda á Quinta</p>
                </div>
              
              </div>
             
              <div className={styles.containerImagemDentista}>
                <Image className={styles.imagemDentista} src={Dentista1} width={100}  alt="Dentista" title="Dentista"/>
               
                <div className={styles.textosMolduraDentista}>
                  <h3>Dr.Rafaela Assis</h3>
                  <p>Terça á Sabádo</p>
                </div>
             
             </div>
            </MolduraInformacoes>
            
            <MolduraInformacoes titulo="Horarios">
            <ul>
            <li>Telefone: (33) 3225-4569</li>
            <li>Email:dentessaudaveis@gmail.com</li>
            </ul>
            </MolduraInformacoes>
          </section>
          <section className={styles.containerLocalizacao}>
            <h3>Onde estamos <strong>localizados?</strong></h3>
            <p>R. Vital Brasil, 39-255 - Boa Vista I</p>
            <div className={styles.containerIframe}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7775822657445!2d-40.30574262554571!3d-20.350805051548683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8160499f4d275%3A0x73aebff4668bbccb!2sR.%20Vital%20Brasil%2C%2039-255%20-%20Boa%20Vista%20I%2C%20Vila%20Velha%20-%20ES%2C%2029102-770!5e0!3m2!1spt-BR!2sbr!4v1718021950068!5m2!1spt-BR!2sbr" width="100%" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
          <footer className={styles.rodaPe}>
            <h4>© Copyright 2021 | Consultório Dentes Saudáveis</h4>
            <p>Replicado por Tarcisio H</p>
          </footer>
      </main>
    </>
  )
}


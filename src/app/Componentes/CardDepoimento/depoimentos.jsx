import style from "../CardDepoimento/style.module.css";

import Image from "next/image";

const CardDepoimento = (props)=>{
    return(
        <section className={style.containerGlobalCard}>
             <article className={style.containerCard}>
            <div className={style.containerImagem}>
              <Image className={style.imagem} src={props.imagem} alt={props.titulo} title={props.titulo}/>  
            </div>
            <div className={style.containerTextos}>
                <h2>{props.nome}</h2>
                <p>{props.Depoimento}</p>
            </div>
            </article>
        </section>
    )
}
export default CardDepoimento;
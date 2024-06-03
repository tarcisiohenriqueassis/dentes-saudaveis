import style from "../CardDepoimento/style.module.css";

export default function CardDepoimento(props){
    return(
        <section className={style.containerGlobalCard}>
             <article className={style.containerCard}>
            <div className={style.containerImagem}>
                {props.imagem}
            </div>
            <div className={style.containerTextos}>
                <h2>{props.nome}</h2>
                {props.children}
            </div>
            </article>
        </section>
    )
}
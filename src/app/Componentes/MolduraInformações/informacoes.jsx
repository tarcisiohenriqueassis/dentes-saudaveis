import style from "../MolduraInformações/style.module.css";

export default function MolduraCardInformacoes(props){
    return(
        <section className={style.containerGlobalInformacoes}>
            <article className={style.containerCard}>
                <h2>{props.titulo}</h2>
                <div className={style.containerInformacoes}>
                    {props.children}
                </div>
            </article>
        </section>
    )
}
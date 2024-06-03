import style from "../Header/style.module.css";

import Image from "next/image";

 const Header = (Props) =>{
    return(
        <header className={style.header}>
            <div className={style.containerImagem}>
              <Image className={style.imagem} src={Props.imagem} alt={Props.tituloImagem} title={Props.tituloImagem}/>
            </div>
            <h1>{Props.titulo}</h1>
        </header>
    )
}
export default Header;
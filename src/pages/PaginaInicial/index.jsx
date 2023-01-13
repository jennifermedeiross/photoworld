import Banner from './banner.png'
import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";
import styles from './PaginaInicial.module.scss';
import Galeria from '../../Componentes/Galeria';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do mundo</h1>
                        <img src={Banner} alt="A foto de um lugar do mundo" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                </div>
            </main>
        </>
    )
}
import style from "./Header.module.scss";

export function Header() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={style.header}>
            <img src="/logoAG.png" alt="logo" />
            <div className={style.menu}>
                <button onClick={() => scrollToSection("inicio")}>
                    <h3>Início</h3>
                </button>
                <button onClick={() => scrollToSection("sobre")}>
                    <h3>Sobre nós</h3>
                </button>
                <button onClick={() => scrollToSection("alunos")}>
                    <h3>Alunos</h3>
                </button>
                <button onClick={() => scrollToSection("planos")}>
                    <h3>Planos</h3>
                </button>
                <button onClick={() => scrollToSection("contato")}>
                    <h3>Contato</h3>
                </button>
            </div>
        </div>
    );
}

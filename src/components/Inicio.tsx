import  { useState, useEffect } from 'react';
import { Button } from "./Button";

import style from "./Inicio.module.scss";

export function Inicio() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [
        "/inicioBackGround1.jpg",
        "/inicioBackGround2.jpg",
        "/inicioBackGround3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex(prevIndex =>
                prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    });

    return (
        <div id="inicio" className={`${style.inicio} ${style.fadeInOut}`} style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
            <h1>Seja bem-vindo(a), ao seu novo estilo de vida!</h1>
            <p>
                Oferecemos treinos personalizados, orientações nutricionais e o suporte
                necessário para você alcançar seus objetivos. <br /> Juntos, criaremos um plano adaptado
                às suas metas específicas. <br /> Estamos aqui para esclarecer dúvidas,
                ajustar estratégias e celebrar suas conquistas. <br /> Seu sucesso é a
                nossa prioridade!
            </p>
            <Button text={"Confira nossos planos"} type={undefined} />
        </div>
    );
}

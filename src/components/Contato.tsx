import React, { useState } from "react";
import style from "./Contato.module.scss";
import emailjs from "emailjs-com";
import { Button } from "./Button";

export function Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formSubmitted) {
            // Se o formulário já foi enviado, não faça nada
            return;
        }

        const serviceId = "gmailMessage";
        const templateId = "template_9dksy9y";
        const userId = "Isz2DDX97hFuHKRSR";
        const toEmail = "agteam.consultoria@gmail.com";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_email: toEmail,
            message: message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log("E-mail enviado com sucesso!", response);
                setFormSubmitted(true); // Define que o formulário foi enviado
                clearForm();
                window.scrollTo(0, 0);
                window.alert("Mensagem enviada com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao enviar e-mail:", error);
            });
    };

    function clearForm () {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div id="contato" className={style.contato}>
            <h1>Entre em contato com a gente!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={formSubmitted ? "" : "Digite seu nome aqui..."}
						disabled={formSubmitted}
                    />
                </label>
                <label>
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder={formSubmitted ? "" : "Digite seu e-mail aqui..."}
						disabled={formSubmitted}
                    />
                </label>
                <label>
                    Mensagem:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder={formSubmitted ? "Obrigado! Sua mensagem ja foi enviada, em breve entraremos em contato!" : "Digite sua mensagem aqui..."}
                    />
                </label>
                <Button 
                    text="Enviar" 
                    type="submit"  
                    disabled={formSubmitted} 
                    className={formSubmitted ? style.disabledButton : ''}
                />
            </form>
        </div>
    );
}

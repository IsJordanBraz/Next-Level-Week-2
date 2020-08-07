import React from 'react';

import whatappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://cdn.pixabay.com/photo/2015/01/27/09/58/human-613601_960_720.jpg" alt="Hindu man"/>
            <div>
                <strong>Hamires Maomen</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir  coisas em laboratório e por mudar vidas das pessoas através de experiências.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatappIcon} alt="Contato"/>
                Entrar em contato.
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;
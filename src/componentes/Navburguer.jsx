import React from 'react';
import MenuHamburguer from './MenuHamburguer.jsx';

const Navburguer = () => {
    // Exemplo de itens de menu
    const menuItems = [
        { title: 'Projetos', link: '#Project' },
        { title: 'Tecnologias', link: '#Skills' },
        { title: 'Sobre Mim', link: '#Temple' },
        // Adicione mais itens de menu conforme necessário
    ];

    return (
        <div >
            <div>
                <MenuHamburguer menuItems={menuItems} />
            </div>
        </div>
    );
};

export default Navburguer;
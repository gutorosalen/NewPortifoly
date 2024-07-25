import React, { useState } from 'react';
import styles from './MenuHamburguer.module.css'; // Estilos opcionais

const MenuHamburguer = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.menuhamburguer}>
            <button className={styles.menutoggle} onClick={toggleMenu}>
                ☰
            </button>
            {isOpen && (
                <div className={styles.menuitems}>
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.link}>
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuHamburguer;
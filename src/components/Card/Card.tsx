import { useState } from 'react';
import S from './card.module.css';

type CardProps = {
    title: string;
    href: string;
    img: string;
};

export const Card = ({ title, href, img }: CardProps) => {
    const [isHover, setIsHover] = useState(false);
    const bgImage = {
        backgroundImage: isHover
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});`
            : `url(${img})`,
    };

    const hovering = () => {
        setIsHover(true);
    };

    const leaveHover = () => {
        setIsHover(false);
    };

    return (
        <div
            className={S['card']}
            style={bgImage}
            onMouseEnter={hovering}
            onMouseLeave={leaveHover}
        >
            <p className={S['card-title']}>{title}</p>
            <a className={S['card-btn']} href={href}>
                Mais Fotos
            </a>
        </div>
    );
};

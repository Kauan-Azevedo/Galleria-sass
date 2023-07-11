import S from './nav.module.css';

type navProps = {
    title: string;
    items: { name: string }[];
};

export const Navbar = ({ title, items }: navProps) => {
    return (
        <header className={S.header}>
            <h2 className={S.h2}>{title}</h2>
            <ul className={S.ul}>
                {items.map((item, index) => {
                    return (
                        <li className={S.li} key={index}>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};

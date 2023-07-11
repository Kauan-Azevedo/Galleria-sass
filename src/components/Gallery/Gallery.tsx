import S from './gallery.module.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Gallery = ({ children }: any) => {
    return <div className={S.gallery}>{children}</div>;
};

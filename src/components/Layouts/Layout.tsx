import React, { FC, PropsWithChildren } from 'react';
import Main_header from "../Main_header/Main_header";
import Main_footer from "../Main_footer/Main_footer";


const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Main_header />
            {children}
            <Main_footer />
        </>
    );
};

export default Layout;
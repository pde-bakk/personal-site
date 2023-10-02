import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-footer_colour text-center lg:text-left">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                © {new Date().getFullYear()} Copyright: Peer de Bakker
                {/*<a*/}
                {/*	className="text-neutral-800 dark:text-neutral-400"*/}
                {/*	href="https://tailwind-elements.com/"*/}
                {/*>Peer de Bakker</a*/}
                {/*>*/}
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";
const Footer = () => {
  return (
    <footer className="bg-footer_colour text-center lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        &copy; {new Date().getFullYear()} Peer de Bakker
      </div>
    </footer>
  );
};

export default Footer;

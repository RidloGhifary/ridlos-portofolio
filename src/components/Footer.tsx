import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pb-10 text-center">
      <p>copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

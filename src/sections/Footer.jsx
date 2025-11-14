const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/HerbertNtim"
          target="_blank"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/hntim"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.png"
            alt="linkedIn"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://wa.me/233559073518"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/whatsapp.svg"
            alt="whatsapp"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">
        © 2024 Herbert Ntim. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

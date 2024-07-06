const Footer = () => {
  const currentData = new Date();
  return (
    <footer className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 bottom-0 text-white h-14 flex justify-center items-center mt-10 md:mt-20">
      <p className="font-semibold text-sm">
        All Rights Reserved {currentData.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-5">
      <p className="text-md">
        Made by{" "}
        <span
          className="hover:text-black transition duration-300 ease-in-out"
          
        >
          Bhumi Padhiyar
        </span>
      </p>
      <span className="text-gray-400 text-md hidden md:block">|</span>
      <p className="text-md">
        <a
          className="hover:text-black hover:underline transition duration-300 ease-in-out"
          href="https://github.com/Bhumiba01/persona"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

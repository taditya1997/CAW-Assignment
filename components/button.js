

export default function Button({ children, onClick, disabled, variant, size }) {
  const buttonSize = size === "large" ? "py-4 px-8" : "py-2 px-4";
  const buttonVariant =
    variant === "primary"
      ? "bg-green-900 text-white hover:bg-green-950 hover:text-white"
      : "bg-white text-green-900 border border-green-900 hover:border-green-950";
  return (
    <button
      className={`${buttonSize} ${buttonVariant} text-sm rounded-full font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed disabled:`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

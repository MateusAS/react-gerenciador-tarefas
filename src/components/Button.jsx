function Button(props) {
  return (
    <button
      {...props}
      className="cursor-pointer bg-slate-400 p-2 rounded-md text-white"
    >
      {props.children}
    </button>
  );
}

export default Button;

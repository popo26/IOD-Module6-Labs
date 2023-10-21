//Create a Greeting component, in its own file, which renders the text “Hello World”.
export default function Greeting({ name = "World", children }) {
  return (
    <div className="Greeting">
      {/* If the name prop exists, make sure the Greeting component replaces ‘World’ with that name value, i.e. “Hello John”. */}
      Hello {name}
      {/* Include support for a greeting message via children. */}
      {children}
    </div>
  );
}

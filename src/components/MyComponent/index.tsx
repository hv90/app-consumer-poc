const MyComponent: React.FC = () => {
  return (
    <my-component
      background="red"
      first={{
        color: "yellow",
        fontSize: "24px",
        fontWeight: "bold",
        value: "World",
      }}
      middle={{
        color: "yellow",
        fontSize: "24px",
        fontWeight: "bold",
        value: "World",
      }}
    >
      <p>Hello?</p>
    </my-component>
  );
};

export default MyComponent;

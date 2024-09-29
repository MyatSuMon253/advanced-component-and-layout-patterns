import { useEffect, useState } from "react";

const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (name.length < 3) {
      setError("name cannot be empty");
    } else {
      setError("");
    }
  }, [name]);

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlledForm;

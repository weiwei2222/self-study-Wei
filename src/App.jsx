import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import products from "./data";

function App() {
  const [productList, setProductList] = useState(products);
  // const [value, setValue] = useState("");
  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
  });
  const [isHiring, setIsHiring] = useState(true);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do what you want with the form data
    console.log("form in submit");
    console.log(form);
    const newProduct = form;
    setProductList([newProduct, ...productList]);
    setForm({
      itemName: "",
      price: 0,
      description: "Describe this item",
    });
  };
  const toggleHiring = () => {
    setIsHiring(!isHiring);
  };

  return (
    <div>
      <h1 onClick={toggleHiring}> Big Time Shopping </h1>{" "}
      {isHiring ? (
        <h2>Yes, we are hiring </h2>
      ) : (
        <h2>Sorry, try again tomorrow</h2>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.itemName}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
        />
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
        <input type="submit" value="Submit Form" />
      </form>
      <ul>
        <div>
          <h2>Preview our new item</h2> <h3>{form.itemName}</h3>
          <h4>{form.price}</h4>
          <h5>{form.description}</h5>
        </div>
      </ul>
    </div>
  );
}

export default App;

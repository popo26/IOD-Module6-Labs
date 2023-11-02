// • Create a new AddCatForm component that renders a form
// with controlled components to capture name, latinName
// and image details for a new Big Cat (extending Exercises
// 2 and 4)
export default function Form({ catData, catList, setCatData, setCatList }) {
  const handleNameChange = (e) => {
    setCatData({ ...catData, name: e.target.value });
  };

  const handleLatinNameChange = (e) => {
    setCatData({ ...catData, latinName: e.target.value });
  };

  const handleImageChange = (e) => {
    setCatData({ ...catData, image: `${e.target.value}` });
  };

  // • Submitting the form should update the parent BigCats
  // component and re-render the list
  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...catList];
    let newData = { ...catData, id: newList.length + 1 };
    setCatList([...newList, newData]);
    setCatData({ id: "", name: "", latinName: "", image: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={catData.name}
        />
        <br />
        <label htmlFor="latinName">Latin Name: </label>
        <input
          type="text"
          name="latinName"
          onChange={handleLatinNameChange}
          value={catData.latinName}
        />
        <br />
        <label htmlFor="image">URL: </label>
        <input
          type="url"
          name="image"
          onChange={handleImageChange}
          value={catData.image}
        />
        <br />
        <button className="add-btn">Add Cat</button>
      </form>
    </div>
  );
}

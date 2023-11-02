export default function SingleCat({ name, latinName, image, id, onDelete }) {
  // • Add a Delete link next to each cat allowing it to be removed
  // from the list.
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <>
      <div id={id} className="SingleCat">
        <img src={image} alt={name} />
        <h4>
          {name} : {latinName}
        </h4>
        <a>
          <button onClick={handleDelete}>X</button>
        </a>
      </div>
    </>
  );
}

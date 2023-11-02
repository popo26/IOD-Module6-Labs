export default function SingleCat({ name, latinName, image }) {
  return (
    <>
      <div id={name} className="SingleCat">
        <img src={image} alt={name} />
        <h4>
          {name} : {latinName}
        </h4>
      </div>
    </>
  );
}

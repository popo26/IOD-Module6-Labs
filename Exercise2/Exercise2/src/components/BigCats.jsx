import imgOne from "../assets/images/one.jpg";
import imgTwo from "../assets/images/two.jpg";
import imgThree from "../assets/images/three.jpg";
import imgFour from "../assets/images/four.jpg";
import imgFive from "../assets/images/five.jpg";
import imgSix from "../assets/images/six.jpg";
import imgSeven from "../assets/images/seven.jpg";
import SingleCat from "./SingleCat";

export default function BigCats() {
  const cats = [
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: imgOne,
    },
    {
      name: "Cougar",
      latinName: "Puma concolor",
      image: imgTwo,
    },
    {
      name: "Jaguar",
      latinName: "Panthera onca",
      image: imgThree,
    },
    {
      name: "Leopard",
      latinName: "Panthera pardus",
      image: imgFour,
    },
    {
      name: "Lion",
      latinName: "Panthera leo",
      image: imgFive,
    },
    {
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: imgSix,
    },
    {
      name: "Tiger",
      latinName: "Panthera tigris",
      image: imgSeven,
    },
  ];

  //   1. Create a BigCats component, in its own file, which uses the cats array (below) to display a styled list of cats.
  //   2. Include a unique id and fix the warning about keys
  // Ver1 for Q1 and Q2
  //   const renderdListOfCats = cats.map((cat) => (
  //     <h4 key={cat.name} className="BigCats">
  //       {" "}
  //       `${cat.name} : ${cat.latinName}`
  //     </h4>
  //   ));

  // 3. Create a SingleCat component for rendering each individual cat, and add an image property for each one.
  const renderdListOfCats = cats.map((cat) => (
    <SingleCat
      key={cat.name}
      image={cat.image}
      name={cat.name}
      latinName={cat.latinName}
      id={cat.name}
    />
  ));

  return (
    <div>
      {/* Ver1 for Q1 and Q2 */}
      {/* {renderdListOfCats} */}

      {/* Ver2 for Q1 and Q2*/}
      {/* {cats.map((cat) => (
        <h4 key={cat.name} className="BigCats">
          {cat.name} : {cat.latinName}
        </h4>
      ))} */}

      {/* // Q3 */}
      {renderdListOfCats}
    </div>
  );
}

import { useState } from "react";
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

  const renderdListOfCats = cats.map((cat) => (
    <SingleCat
      key={cat.name}
      image={cat.image}
      name={cat.name}
      latinName={cat.latinName}
      id={cat.name}
    />
  ));

  const [catList, setCatList] = useState(cats);

  // 1. Extend your BigCats component from Exercise 2 to include buttons for alphabetically sorting and reversing the list
  const handleAtoZ = () => {
    console.log(catList);
    // const newList = cats.sort((a, b) => {
    //   const nameA = a.name.toUpperCase();
    //   const nameB = b.name.toUpperCase();
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // setCatList([...cats, newList]);

    let newList = [...catList];
    newList.sort();
    setCatList(newList);
    console.log(newList);
  };

  return (
    <div>
      <div>
        <button onClick={handleAtoZ} className="a-to-z-btn">
          A to Z
        </button>
        <button className="z-to-a-btn">Z to A</button>
      </div>
      {renderdListOfCats}
    </div>
  );
}

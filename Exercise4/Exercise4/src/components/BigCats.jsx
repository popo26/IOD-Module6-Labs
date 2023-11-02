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
      name: "Tiger",
      latinName: "Panthera tigris",
      image: imgSeven,
    },
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
  ];

  const [catList, setCatList] = useState(cats);

  const renderdListOfCats = catList.map((cat) => (
    <SingleCat
      key={cat.name}
      image={cat.image}
      name={cat.name}
      latinName={cat.latinName}
      id={cat.name}
    />
  ));

  // 1. Extend your BigCats component from Exercise 2 to include buttons
  // for alphabetically sorting and reversing the list
  // A to Z
  const handleAtoZ = () => {
    let newList = [...catList];

    // Ver1 - To ignore weird cases like ß, etc.
    // newList.sort((a, b) => a.name.localeCompare(b.name))

    // Ver2
    newList.sort(function (a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1; //sort string ascending
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    setCatList(newList);
  };

  // 1. Extend your BigCats component from Exercise 2 to include buttons
  // for alphabetically sorting and reversing the list
  // Z to A
  const handleZtoA = () => {
    let newList = [...catList];
    newList.sort((a, b) => {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    newList.reverse();
    setCatList(newList);
  };

  // 2.Add another button to filter the list and display only the
  // cats in the ‘Panthera’ family, and one to reset and show
  // the full list.
  // Panthera family
  const handlePanthera = () => {
    const newList = catList.filter((cat) =>
      cat.latinName.toLowerCase().includes("panthera")
    );
    setCatList(newList);
  };

  // 2.Add another button to filter the list and display only the
  // cats in the ‘Panthera’ family, and one to reset and show
  // the full list.
  // Full list
  const handleFullList = () => {
    let newList = cats;
    setCatList(newList);
  };

  return (
    <div>
      <div>
        <button onClick={handleAtoZ} className="a-to-z-btn">
          A to Z
        </button>
        <button onClick={handleZtoA} className="z-to-a-btn">
          Z to A
        </button>
        <br />
        <button onClick={handlePanthera} className="panthera">
          Panthera
        </button>
        <button onClick={handleFullList} className="full-list">
          Full List
        </button>
      </div>
      {renderdListOfCats}
    </div>
  );
}

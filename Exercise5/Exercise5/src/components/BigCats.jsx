import { useState } from "react";
import SingleCat from "./SingleCat";
import Form from "./Form";

export default function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Tiger",
      latinName: "Panthera tigris",
      image:
        "https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Cougar",
      latinName: "Puma concolor",
      image:
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Jaguar",
      latinName: "Panthera onca",
      image:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:
        "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const [catList, setCatList] = useState(cats);
  const [catData, setCatData] = useState({
    id: "",
    name: "",
    latinName: "",
    image: "",
  });

  const handleDelete = (id) => {
    let newList = catList.filter((cat) => cat.id != id);
    setCatList(newList);
  };

  const renderdListOfCats = catList.map((cat) => (
    <SingleCat
      key={cat.name}
      image={cat.image}
      name={cat.name}
      latinName={cat.latinName}
      id={cat.id}
      onDelete={handleDelete}
    />
  ));

  const handleAtoZ = () => {
    let newList = [...catList];

    newList.sort(function (a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setCatList(newList);
  };

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

  const handlePanthera = () => {
    const newList = catList.filter((cat) =>
      cat.latinName.toLowerCase().includes("panthera")
    );
    setCatList(newList);
  };

  const handleFullList = () => {
    let newList = cats;
    console.log("catList", catList);
    console.log("newList", newList);
    setCatList(newList);
  };

  return (
    <div>
      <Form
        catData={catData}
        catList={catList}
        setCatData={setCatData}
        setCatList={setCatList}
      />
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

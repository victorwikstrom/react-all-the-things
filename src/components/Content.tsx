import React from "react";
import SectionItem from "./SectionItem";

const sections: { id: number; title: string; imgPath: string }[] = [
  {
    id: 1,
    title: "Forest",
    imgPath: "assets/forest.jpg",
  },
  {
    id: 2,
    title: "Desert",
    imgPath: "assets/desert.jpg",
  },
  {
    id: 3,
    title: "City",
    imgPath: "assets/city.jpg",
  },
];

function Content() {
  return (
    <>
      {sections.map((section) => (
        <SectionItem
          id={section.id}
          title={section.title}
          imgPath={section.imgPath}
        />
      ))}
    </>
  );
}

export default Content;

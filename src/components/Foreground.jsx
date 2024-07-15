import React, { useRef, useState } from "react";
import Card from "./Card";
import ResetPositionBtn from "./ResetPositionBtn";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
        <ResetPositionBtn />
      </div>
    </>
  );
}

export default Foreground;

import React from "react";

const CharacterGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-3 gap-1 justify-start mt-5 ">
      {children}
    </div>
  );
};

export default CharacterGrid;

import React from "react";

interface TheadProps {
    handleSelectAll:(checked:boolean)=>void;
    children:React.ReactNode;
    selectedCount?:number;
}

const Thead = (
    {
        children,
        selectedCount,
        handleSelectAll,
    }:TheadProps
) => {
  return (
      <thead>
      {children}
      </thead>
  )
}

export default Thead;
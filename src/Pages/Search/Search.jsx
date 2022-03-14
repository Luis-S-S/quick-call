import React from "react";
import { Link } from "react-router-dom";
import { ProCard } from "../../Components/Procard/ProCard";
import { MenuLateral } from "../../Components/Menulateral/Menulateral";

export const Search = () => {
  return (
    <div>

      <Link to="/"> Ir a Home</Link>
      <ProCard/>
      <MenuLateral/>
    </div>

  );
}

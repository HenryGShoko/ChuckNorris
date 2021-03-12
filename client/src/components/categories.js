import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../graphql/queries";
import "../App.css";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const history = useHistory();

  return (
    <div>
      <h1>Categories</h1>
      {loading && <h1>Loading...</h1>}
      <div className="grid">
        {data?.getCategories?.map((category, i) => (
          <div
            className="card"
            key={i}
            onClick={() => history.push(`/category/${category}`)}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_JOKE } from "../graphql/queries";
import "../App.css";
import { useParams } from "react-router-dom";

// it is a joke component

const Joke = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(GET_JOKE, {
    variables: { category: name },
  });

  return (
    <div>
      <h1>Joke of {name} category</h1>
      <div className="grid">
        <div className="card">
          <p>{loading ? "Loading..." : data?.getJoke}</p>
        </div>
      </div>
    </div>
  );
};

export default Joke;

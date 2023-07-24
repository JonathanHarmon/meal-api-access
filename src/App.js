import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardGroup, ListGroupItem, PageItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const fetchDataHandler = () => {
    return axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.data.meals);
  };

  const { isError, isLoading, data, error, refetch } = useQuery(
    "meal",
    fetchDataHandler
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  console.log("data is", data);

  let ingredients = [
    {
      ingredientName: data[0].strIngredient1,
      ingredientMeasure: data[0].strMeasure1,
    },
    {
      ingredientName: data[0].strIngredient2,
      ingredientMeasure: data[0].strMeasure2,
    },
    {
      ingredientName: data[0].strIngredient3,
      ingredientMeasure: data[0].strMeasure3,
    },
    {
      ingredientName: data[0].strIngredient4,
      ingredientMeasure: data[0].strMeasure4,
    },
    {
      ingredientName: data[0].strIngredient5,
      ingredientMeasure: data[0].strMeasure5,
    },
    {
      ingredientName: data[0].strIngredient6,
      ingredientMeasure: data[0].strMeasure6,
    },
    {
      ingredientName: data[0].strIngredient7,
      ingredientMeasure: data[0].strMeasure7,
    },
    {
      ingredientName: data[0].strIngredient8,
      ingredientMeasure: data[0].strMeasure8,
    },
    {
      ingredientName: data[0].strIngredient9,
      ingredientMeasure: data[0].strMeasure9,
    },
    {
      ingredientName: data[0].strIngredient10,
      ingredientMeasure: data[0].strMeasure10,
    },
    {
      ingredientName: data[0].strIngredient11,
      ingredientMeasure: data[0].strMeasure11,
    },
    {
      ingredientName: data[0].strIngredient12,
      ingredientMeasure: data[0].strMeasure12,
    },
    {
      ingredientName: data[0].strIngredient13,
      ingredientMeasure: data[0].strMeasure13,
    },
    {
      ingredientName: data[0].strIngredient14,
      ingredientMeasure: data[0].strMeasure14,
    },
    {
      ingredientName: data[0].strIngredient15,
      ingredientMeasure: data[0].strMeasure15,
    },
    {
      ingredientName: data[0].strIngredient16,
      ingredientMeasure: data[0].strMeasure16,
    },
    {
      ingredientName: data[0].strIngredient17,
      ingredientMeasure: data[0].strMeasure17,
    },
    {
      ingredientName: data[0].strIngredient18,
      ingredientMeasure: data[0].strMeasure18,
    },
    {
      ingredientName: data[0].strIngredient19,
      ingredientMeasure: data[0].strMeasure19,
    },
    {
      ingredientName: data[0].strIngredient20,
      ingredientMeasure: data[0].strMeasure20,
    },
  ];

  return (
    <>
      <CardGroup>
        <Card style={{ width: "2rem" }}>
          <Card.Img variant="top" src={data[0].strMealThumb} />
        </Card>
        <Card style={{ width: "2rem" }}>
          <ListGroup className="list-group-flush">
            {ingredients.map((p, index) => {
              if (p.ingredientName !== "" && p.ingredientName !== null) {
                return (
                  <ListGroupItem key={index}>
                    {p.ingredientMeasure}&nbsp;{p.ingredientName}
                  </ListGroupItem>
                );
              }
            })}
          </ListGroup>
          <Card.Body>
            <Card.Title>{data[0].strMeal}</Card.Title>
            {/* <Card.Text>{data[0].strIngredient1}</Card.Text> */}
            <Card.Text>{data[0].strInstructions}</Card.Text>
            <Button variant="primary" onClick={refetch}>
              Get Another Meal
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default App;

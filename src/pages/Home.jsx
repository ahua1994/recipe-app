import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Input, Label, FormGroup, Button, Col } from "reactstrap";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(null);
    const [meal, setMeal] = useState("Breakfast");
    const [count, setCount] = useState(0);
    const APP_ID = "948013d6";
    const APP_KEY = "327735e720c575131160a591bfd7af53";
    useEffect(() => {
        axios
            .get(
                `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
            )
            .catch(() => {
                return;
            })
            .then(x => {
                setRecipes(x["data"]["hits"]);
            });
    }, [count]);
    function handleSubmit(e) {
        e.preventDefault();
        setCount(count + 1);
    }
    return (
        <div className="Home">
            <h1 className="logo">Andy Hua Recipes</h1>
            <Form className="search">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="recipe">Recipe</Label>
                    <Input
                        onChange={e => setSearch(e.target.value)}
                        name="recipe"
                        id="recipe"
                        placeholder="Enter A Keyword"
                    />
                </FormGroup>
                <FormGroup row>
                    <Label for="select">Select</Label>
                    <Col lg={16}>
                        <Input
                            onChange={e => setMeal(e.target.value)}
                            type="select"
                            name="select"
                            id="select"
                        >
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snack</option>
                            <option>Teatime</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button onClick={handleSubmit} color="success">
                    Submit
                </Button>
            </Form>
            <div className="row">
                {recipes.length ? (
                    recipes.map(({ recipe }, i) => {
                        return (
                            <div className="col-3" key={i}>
                                <p>{recipe.label}</p>
                                <img src={recipe.image}></img>
                            </div>
                        );
                    })
                ) : (
                    <h1>Open Your World To New Flavours!</h1>
                )}
            </div>
        </div>
    );
};

export default Home;

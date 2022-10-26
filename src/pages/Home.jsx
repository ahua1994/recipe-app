import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Form,
    Input,
    Label,
    FormGroup,
    Button,
    Col,
    Card,
    CardTitle,
    CardImg,
    Alert,
} from "reactstrap";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [first, setFirst] = useState(true);
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
        setFirst(false);
    }

    function handleSort(arg) {
        let newRecipes = [...recipes];
        newRecipes =
            arg === "A to Z ⬇️"
                ? newRecipes.sort((a, b) => a.recipe.label.localeCompare(b.recipe.label))
                : arg === "Z to A ⬇️"
                ? newRecipes.sort((a, b) => b.recipe.label.localeCompare(a.recipe.label))
                : arg === "Cal (ascending)"
                ? newRecipes.sort((a, b) => a.recipe.calories - b.recipe.calories)
                : arg === "Cal (descending)"
                ? newRecipes.sort((a, b) => b.recipe.calories - a.recipe.calories)
                : newRecipes;
        setRecipes(newRecipes);
    }

    return (
        <div className="Home">
            <h1 className="logo">Andy Hua Recipes</h1>
            <Form onSubmit={e => e.preventDefault()} className="search">
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
                <FormGroup row>
                    <Label for="sort">Sort By: </Label>
                    <Col md={12}>
                        <Input
                            onChange={e => handleSort(e.target.value)}
                            type="select"
                            name="sort"
                            id="sort"
                        >
                            <option> -- </option>
                            <option> A to Z ⬇️ </option>
                            <option> Z to A ⬇️ </option>
                            <option> Cal (ascending) </option>
                            <option> Cal (descending) </option>
                        </Input>
                    </Col>
                </FormGroup>
            </Form>
            <div className="row">
                {recipes.length ? (
                    recipes.map(({ recipe }, i) => {
                        return (
                            <Card
                                color="dark"
                                style={{ width: "315px" }}
                                className="col-12 col-md-6 col-lg-4 my-3"
                                key={i}
                            >
                                <Link to="/details" state={recipe}>
                                    <CardTitle className="recipe-name" tag="h3">
                                        {recipe.label}
                                    </CardTitle>
                                    <CardImg src={recipe.image}></CardImg>
                                </Link>
                            </Card>
                        );
                    })
                ) : (
                    <>
                        <h1>Open Your World To New Flavours!</h1>
                        {!first && <Alert color="danger">No Search Results</Alert>}
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;

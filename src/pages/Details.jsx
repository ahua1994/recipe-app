import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Alert, Button, Spinner } from "reactstrap";

const Details = () => {
    const [details, setDetails] = useState({});
    const location = useLocation();
    console.log(location.state);
    useEffect(() => {
        setDetails(location.state || {});
    }, [location.state]);
    console.log(details);
    const { image, calories, cuisineType, dishType, ingredientLines, label } = details;
    return Object.keys(details).length ? (
        <div className="Details">
            <h1 className="logo">Andy Hua Recipes</h1>
            <h1>{`${label}`}</h1>
            <h3 className="type">
                {cuisineType} {dishType}
            </h3>
            <h3>{`(Yields: ${details.yield}) ${Math.trunc(calories)} cal`}</h3>
            <div className="d-flex">
                <img src={image} alt={label} />
                <ul>
                    {ingredientLines?.map((x, i) => (
                        <li key={i}>{x}</li>
                    ))}
                </ul>
            </div>
            {details.cautions?.length !== 0 && (
                <Alert color="danger">This recipe contains {details.cautions?.join(", ")}</Alert>
            )}
            <Link to="/">
                <Button className="my-3" color="success">
                    Return To Home
                </Button>
            </Link>
        </div>
    ) : (
        <div className="d-flex flex-column align-items-center">
            <h1 className="mt-5">Please Select A Recipe From The Home Page</h1>
            <Spinner className="mt-5"></Spinner>
            <Link to="/">
                <Button className="mt-5" color="success">
                    Return To Home
                </Button>
            </Link>
        </div>
    );
};

export default Details;

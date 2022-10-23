import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Alert, Button } from "reactstrap";

const Details = () => {
    const [details, setDetails] = useState({});
    const location = useLocation();
    console.log(location.state);
    useEffect(() => {
        setDetails(location.state);
    }, [details]);
    console.log(details);
    const { image, calories, cuisineType, ingredientLines, ingredients, label, totalTime } =
        details;

    return (
        <div className="Details">
            <h1 className="logo">Andy Hua Recipes</h1>
            <h1>{`${label}`}</h1>
            <h3>{`(Yields: ${details.yield}) ${Math.trunc(calories)} cal`}</h3>
            <img src={image} alt={label} />
            <ul>
                {ingredientLines?.map((x, i) => (
                    <li key={i}>{x}</li>
                ))}
            </ul>
            {details.cautions?.length !== 0 && (
                <Alert color="danger">This recipe contains {details.cautions?.join(" ")}</Alert>
            )}
            <Link to="/">
                <Button color="success">Return To Home</Button>
            </Link>
        </div>
    );
};

export default Details;

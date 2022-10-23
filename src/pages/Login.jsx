import { Link } from "react-router-dom";
import { Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const Login = () => {
    return (
        <div className="form">
            <h1>Login</h1>
            <Form className="Form">
                <FormGroup row>
                    <Label size="lg" for="username" sm={2}>
                        Username
                    </Label>
                    <Col sm={10}>
                        <Input
                            bsSize="lg"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label size="lg" for="password" sm={2}>
                        Password
                    </Label>
                    <Col sm={10}>
                        <Input
                            bsSize="lg"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                        />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col
                        sm={{
                            offset: 2,
                            size: 10,
                        }}
                    >
                        <Link to="/">
                            <Button size="lg" className="btn" color="success">
                                Sign In
                            </Button>
                        </Link>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Login;

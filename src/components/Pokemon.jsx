import React from "react";
import { Card, Container } from "react-bootstrap";

function Pokemon(props) {

    let name = props.name;

    return(
        <Container style={{ width: '18rem' }}>
            <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
                <Card.Img variant="top" src={props.photoUrl} />
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Body>
                    <p>Id: {props.id}</p>
                    <p>Types: </p>
                    {
                        props.types.map((type) => {
                            return <ul key={type.type.name}>{type.type.name}</ul>
                        })
                    }
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Pokemon;
import React from "react";
import { Card, Container, Stack, Badge } from "react-bootstrap";

function Pokemon(props) {

    const capitalize = (toCaps) => {
        return toCaps.charAt(0).toUpperCase() + toCaps.slice(1);
    };

    return(
        <Container style={{ width: '18rem' }}>
            <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
                <Card.Img variant="top" src={props.photoUrl} />
                <Card.Title>
                    {capitalize(props.name)}
                </Card.Title>
                <Card.Body>
                    <p>Id: {props.id}</p>
                    <p>Types: </p>
                    <Stack>
                    {
                        props.types.map((type) => {
                            return <>
                                <Badge key={type.type.name}>{capitalize(type.type.name)}</Badge>
                                <br/>
                            </>
                        })
                    }
                    </Stack>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Pokemon;
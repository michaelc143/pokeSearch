import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Pokemon from "./Pokemon";

function SearchPokemon(props) {

    const [pokeName, setPokeName] = useState("");
    const [pokeData, setPokeData] = useState();
    const [alertMsg, setAlertMsg] = useState("");

    const getPokemon = () => {

        setAlertMsg("");
        if(!pokeName) {
            setAlertMsg("No name provided");
            return;
        }
        const lowerCasePokeName = pokeName.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCasePokeName}`)
        .then(response => response.json())
        .then(data => {
            setPokeData(data);
        })
        .catch();
    }

    return (
        <>
        <h1>Search Pokemon</h1>
        <hr/>
        {alertMsg && <Alert variant="danger">{alertMsg}</Alert>}
        <Container style={{ width: '18rem' }}>
            <Form>
                <Form.Group>
                    <Form.Label>Pokemon Name/ID</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter pokemon name"
                        value={pokeName}
                        onChange={(e) => setPokeName(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Button variant="primary" onClick={getPokemon}>Submit</Button>
            </Form>
        </Container>
        <br/>
        {
            pokeData ? 
            (
                <Pokemon name={pokeData.name} id={pokeData.id} types={pokeData.types} photoUrl={pokeData.sprites.front_default}/>
            ) 
            : 
            (
                <></>
            )
        }
        </>
    )
}

export default SearchPokemon;
import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';


const Character = (props) => {


    // Find & set name of Species
    const [speciesState, setSpeciesState] = useState("");

    useEffect (() => {
        axios
          .get(`${props.species}`)
          .then(res => {
            setSpeciesState(res.data.name);
          })
          .catch(err =>
            console.log(err));
    }, []);

    // Find & set name of Homeworld
    const [homeworldState, setHomeworldState] = useState("");

    useEffect ( async () => {
        axios
          .get(`${props.homeworld}`)
          .then(res => {
            setHomeworldState(res.data.name);
          })
          .catch(err =>
            console.log(err));
    }, []);

    // Create card
    return(
        <Card style={{width: '30vw', margin: '2% auto'}}>
            <CardBody style={{backgroundColor: '#c8341e', borderRadius:'5px'}}>
                <CardTitle style={{backgroundColor: '#c8341e', color: 'white', fontSize: '1.4rem'}}>
                    {props.name}
                </CardTitle>
                <CardText>
                    <ListGroup style={{backgroundColor: '#f1f1f1', textAlign: 'justify', textJustify: 'left'}}>
                        <ListGroupItem>Species: {speciesState}</ListGroupItem>
                        <ListGroupItem>Gender: {props.gender}</ListGroupItem>
                        <ListGroupItem>Height: {props.height} cm</ListGroupItem>
                        <ListGroupItem>Mass: {props.mass} kg</ListGroupItem>
                        <ListGroupItem>Hair Color: {props.hairColor}</ListGroupItem>
                        <ListGroupItem>Eye Color: {props.eyeColor}</ListGroupItem>
                        <ListGroupItem>Homeworld: {homeworldState}</ListGroupItem>
                    </ListGroup>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Character;
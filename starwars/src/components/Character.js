import React from 'react';
import { Card, CardTitle, Button, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';


const Character = (props) => {
    console.log(props)
    return(
        <Card style={{maxWidth: '30vw', margin: '2% auto'}}>
            <CardBody>
                <CardTitle>
                    {props.name}
                </CardTitle>
                <CardText>
                    <ListGroup style={{textAlign: 'justify', textJustify: 'left'}}>
                        <ListGroupItem>Species: <br />{props.species}</ListGroupItem>
                        <ListGroupItem>Gender: {props.gender}</ListGroupItem>
                        <ListGroupItem>Height: {props.height}</ListGroupItem>
                        <ListGroupItem>Mass: {props.mass}</ListGroupItem>
                        <ListGroupItem>Hair Color: {props.hairColor}</ListGroupItem>
                        <ListGroupItem>Eye Color: {props.eyeColor}</ListGroupItem>
                        <ListGroupItem>Homeworld: <br />{props.homeworld}</ListGroupItem>
                    </ListGroup>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Character;
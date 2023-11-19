import React from 'react'
import {CardGroup, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card_recipes.css"
import asian from '../../assets/images/cuisine/asian.jpg'
import spanish from '../../assets/images/cuisine/spanish.jpg'
import european from '../../assets/images/cuisine/european.jpg'
import italian from '../../assets/images/cuisine/italian.jpg'
import japanese from '../../assets/images/cuisine/japanese.jpg'
import korean from '../../assets/images/cuisine/korean.jpg'

const Card_recipes = () => {
  return (
    <>
    <CardGroup className='recipes_group'>
  <Card className='recipe_card'>
    <CardImg
      alt="Card image cap"
      src={asian}
      top
      className='cardImg'
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia azjatycka
      </CardTitle>
      
      <CardText className='card_text'>
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='recipe_card'>
    <CardImg
      alt="Card image cap"
      src={italian}
      top
      className='cardImg'
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia włoska
      </CardTitle>
      
      <CardText className='card_text'>
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='recipe_card'>
    <CardImg
      alt="Card image cap"
      src={japanese}
      top
      className='cardImg'
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia japońska
      </CardTitle>
     
      <CardText className='card_text'>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  </CardGroup>
  <CardGroup className='recipes_group'>
  <Card className='recipe_card'>
    <CardImg
      alt="Card image cap"
      src={korean}
      top
      className='cardImg'
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia koreańska
      </CardTitle>
      
      <CardText className='card_text'>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='recipe_card'>
    <CardImg
      alt="Card image cap"
      src={spanish}
      top
      className='cardImg'
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia hiszpańska
      </CardTitle>
      
      <CardText className='card_text'>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='recipe_card'>
    <CardImg
      alt="Card image cap"
      src={european}
      top
      className='cardImg'
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia europejska
      </CardTitle>
      
      <CardText className='card_text'>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
</CardGroup>
<div className='card_div'></div>
</>
  )
}

export default Card_recipes
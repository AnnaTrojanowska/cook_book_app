import React from 'react'
import {CardGroup, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card_receipes.css"
import asian from '../../assets/images/cuisine/asian.jpg'
import eastern_european from '../../assets/images/cuisine/eastern_european.jpg'
import european from '../../assets/images/cuisine/european.jpg'
import italian from '../../assets/images/cuisine/italian.jpg'
import japanese from '../../assets/images/cuisine/japanese.jpg'
import korean from '../../assets/images/cuisine/korean.jpg'

const Card_receipes = () => {
  return (
    <>
    <CardGroup className='receipe_group'>
  <Card className='receipes_card'>
    <CardImg
      alt="Card image cap"
      src={asian}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia azjatycka
      </CardTitle>
      
      <CardText>
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='receipes_card'>
    <CardImg
      alt="Card image cap"
      src={italian}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia włoska
      </CardTitle>
      
      <CardText>
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='receipes_card'>
    <CardImg
      alt="Card image cap"
      src={japanese}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia japońska
      </CardTitle>
     
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  </CardGroup>
  <CardGroup className='receipe_group'>
  <Card className='receipes_card'>
    <CardImg
      alt="Card image cap"
      src={korean}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia koreańska
      </CardTitle>
      
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='receipes_card'>
    <CardImg
      alt="Card image cap"
      src={eastern_european}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia wschodnio-europejska
      </CardTitle>
      
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <a href="#" class="button card_button">Zobacz</a>
    </CardBody>
  </Card>
  <Card className='receipes_card'>
    <CardImg
      alt="Card image cap"
      src={european}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className='card_title'>
        Kuchnia europejska
      </CardTitle>
      
      <CardText>
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

export default Card_receipes
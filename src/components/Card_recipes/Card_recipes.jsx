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
import { Link } from 'react-router-dom';

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
      Kuchnia azjatycka jest niezwykle zróżnicowana, łącząc smaki i techniki kulinarne z różnych regionów Azji. Jest znana z bogatego użycia ryżu, świeżych warzyw, ryb i przypraw, z dużym naciskiem na równowagę smaków i tekstur.
      </CardText>
      <Link to='/asian'><a href="#" class="button card_button">Zobacz</a></Link>
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
      Kuchnia włoska jest znana z bogatego wykorzystania świeżych składników, takich jak pomidory, oliwa z oliwek, czosnek i zioła. Jest to kuchnia, która celebruje prostotę i smak, ze szczególnym naciskiem na pasty, pizze, risotto i sycące sosy.
      </CardText>
      <Link to='/italian'><a href="#" class="button card_button">Zobacz</a></Link>
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
      Charakterystyczna dla kuchni japońskiej jest subtelność i harmonia smaków oraz estetyczne podanie potraw. Sushi, sashimi, ramen i tempura to tylko niektóre z popularnych dań. Kładzie się duży nacisk na świeżość i jakość składników, zwłaszcza ryb i owoców morza.
      </CardText>
      <Link to='/japanese'><a href="#" class="button card_button">Zobacz</a></Link>
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
      Kuchnia koreańska słynie z intensywności smaków i różnorodności potraw. Kimchi, pikantne zupy, bulgogi i bibimbap to jej znaki rozpoznawcze. Charakteryzuje ją użycie fermentowanych składników i bogactwo przypraw, w tym gochujang (pikantna pasta chili).
      </CardText>
      <Link to='/korean'><a href="#" class="button card_button">Zobacz</a></Link>
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
      Kuchnia hiszpańska jest znana z bogatych i różnorodnych smaków, wykorzystując składniki takie jak oliwki, czosnek, i pomidory. Tapas, paella i gazpacho to klasyczne hiszpańskie potrawy, które podkreślają społeczny aspekt jedzenia i wspólne celebrowanie posiłków.
      </CardText>
      <Link to='/spanish'><a href="#" class="button card_button">Zobacz</a></Link>
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
      Kuchnia europejska jest różnorodna i obejmuje szeroką gamę stylów kulinarnych, od delikatnych francuskich sosów po serowe dania szwajcarskie. Charakteryzuje się użyciem lokalnych, sezonowych składników i tradycyjnych technik gotowania.
      </CardText>
      <Link to='/european'><a href="#" class="button card_button">Zobacz</a></Link>
    </CardBody>
  </Card>
</CardGroup>
<div className='card_div'></div>
</>
  )
}

export default Card_recipes
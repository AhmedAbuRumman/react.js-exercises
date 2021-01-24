import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Trainee from './Trainee/Trainee';
import img from './img.jpg';
import { Container, Row,Col } from 'react-bootstrap';



class App extends Component {
  state = {
    trainees: [
      { img:'https://media-exp1.licdn.com/dms/image/C4E03AQEvbFgiderE2Q/profile-displayphoto-shrink_400_400/0/1601123605811?e=1616630400&v=beta&t=lFFb6fmojZ4x3VQ4nX0RA3YwBtHEGUkdNq72oqvQNYM', name: "Dania Abu-tair",linkedin:"https://www.linkedin.com/in/daniaabutair/",twitter:"https://twitter.com/DTraiq",facebook:"https://www.facebook.com/dania.abutair",github:"https://github.com/Dania-Abutair" },
      { img: 'https://media-exp1.licdn.com/dms/image/C5603AQFiy2IvKh99Hw/profile-displayphoto-shrink_800_800/0/1601186847723?e=1617235200&v=beta&t=uc-HWT4zIvKp-02JOr12L-3lXNk5vxCsIt5XmnAjL5s', name: "Lana Mustafa",linkedin:"https://www.linkedin.com/in/lanamustafa/",twitter:"https://twitter.com/lanamustafa",facebook:"https://www.facebook.com/lanamustafa",github:"https://github.com/lanamustafa" },
      { img: 'https://media-exp1.licdn.com/dms/image/C4D35AQHpbscvdvPOuw/profile-framedphoto-shrink_800_800/0/1611233927851?e=1611536400&v=beta&t=820TLdbagqelNQU0kKVPhDgHmFyYPPEw3DXqu_o3H9M', name: "Ayah Khawaldeh",linkedin:"https://www.linkedin.com/in/AyahKhawaldeh/",twitter:"#",facebook:"https://www.facebook.com/AyahKhawaldeh",github:"https://github.com/AyahKhawaldeh" },
      { img: 'https://media-exp1.licdn.com/dms/image/C4D03AQHdbVjKN24aOA/profile-displayphoto-shrink_400_400/0/1600866731777?e=1616630400&v=beta&t=9inP1q3YMUfv3_X_eRh4n067UVsS2-8c7icc9vv3hDI', name: "Hamza Obeidat",linkedin:"https://www.linkedin.com/in/hamzeh-obeidat/",twitter:"https://twitter.com/HamzehO29276356",facebook:"#",github:"https://github.com/Hamzehobeidat" },
      { img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEyPa3yC6QVcA/profile-displayphoto-shrink_800_800/0/1601025921459?e=1617235200&v=beta&t=IOv9gGq8okkMnDhCrxTFm3eU1URZdi3IQfdcRJViyCg', name: "kawther Aljibali",linkedin:"https://www.linkedin.com/in/kawtherAljibali/",twitter:"https://twitter.com/kawtherAljibali",facebook:"#",github:"https://github.com/kawtherAljibali" }
      
    ]
  }


  render() {



    return (
      <Container className="mt-5">
        <Row>
       
          

            {this.state.trainees.map((trainee) =>
             <Col xs={6} md={4}>
              <Trainee img={trainee.img} name={trainee.name} linkedin={trainee.linkedin} twitter={trainee.twitter} facebook={trainee.facebook} github={trainee.github}/>
              </Col>
            )}


         
        

        </Row>
      </Container>
    );
  }
}

export default App;

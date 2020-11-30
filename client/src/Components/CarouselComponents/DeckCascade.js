import React, { Component } from "react";
import Card from "../CardComponents/CardCascade";
import "./DeckCascade.css";
//react arrows
import { AiOutlineArrowLeft } from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import NavBar from "../NavBarComponent/NavBar";


//Images from ImageArray-Tim Snow
import { imagepaths } from "./ImageArray";
import ModalApp from "../Modal/ModalApp.js";

export default class DeckCascade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
    //makes it so the user cant spam the buttons, one transition at a time
    this.animation_in_progress = false;
  }

  //on Mount- start a for loop, create cards, save the cards and put cards on the screen
  componentDidMount() {
    //card/image array
    let new_cards = [];
    //determining exact center of center card
    let center = {
      x: parseFloat(this.deck.style.width) / 2,
      y: parseFloat(this.deck.style.height) / 2,
    };
    //total cards is 9, we change this depending on our amount of data we want to show
    let total_number_of_cards = 22;
    //determines middle card position, math floor rounds this to a whole number
    let middle_card_by_index = Math.floor(total_number_of_cards / 2);
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    let new_scale = 1;

    //for loop pushing images and other properties into new cards
    //9 is total number of cards, as long as less than total create a card
    for (let i = 0; i < 22; i++) {
      //here  we are telling the computer which side of the center image/card we are on
      if (i < middle_card_by_index) {
        //left side of the deck
        //order the cards, depending on center x/y position
        new_x = center.x - 300 * (middle_card_by_index - i);
        new_y = center.y;
        //cascade the cards, on the left side, and were moving the cards to the right, so its newx plus
        new_x = new_x + 0.5 * 300 * (middle_card_by_index - i);
        //zIndex the cards, the cards on the left have the lowest zed index, so each sequential cards has a higher zed index by one each time
        new_zIndex = i;
        //scale the cards
        new_scale = Math.pow(0.9, middle_card_by_index - i);
      } else {
        //right side of the deck- center viewport
        //order the cards
        new_x = center.x + 300 * (i - middle_card_by_index);
        new_y = center.y;
        //cascade the cards, the cards are one third over from eachother, overlapping
        new_x = new_x - 0.50 * 300 * (i - middle_card_by_index);
        //zIndex the cards, we need to mutiply by negative one here so the cards closer to the middle have a higher zed index, so they are in the forefront
        new_zIndex = i * -1.0;
        //scale the cards
        new_scale = Math.pow(0.9, i - middle_card_by_index);
      }
      //push to array
      new_cards.push(
        <Card

          x={new_x}
          y={new_y}
          //puts middle card at highest zed index, if not middle card just equates to the zed index
          z_index={i === middle_card_by_index ? 100 : new_zIndex}
          scale={new_scale}
          //image prop
          images={imagepaths[i]}
        />
      );
    }
    //set the cards to the newcards, then we use the newcards in the render
    this.setState({ cards: new_cards });
  }

  //to have the cards change places, we need to pass the style, zed index, and scale properties, to each respective card changing position
  handle_next = () => {
    //if there's no animation in progress, you can do all of this, if there is you cant. This makes it so you cant spaz out the next button
    if (!this.animation_in_progress) {
      this.animation_in_progress = true;
      //we need to account for the far left transitioning to the right side of the deck, creating the illusion of popping behind
      //so we create the last card variable, saving the last card of the array's properties
      //we save these properties so the transitioning card takes them over
      let last_cards_left = this.deck.children[this.deck.children.length - 1]
        .style.left;
      let last_cards_zIndex = this.deck.children[this.deck.children.length - 1]
        .style.zIndex;
      let last_cards_transform = this.deck.children[
        this.deck.children.length - 1
      ].style.transform;

      for (let i = this.deck.children.length - 1; i > 0; i--) {
        //whatever card we are on, we're transitioning one over, so the properties must equal the properties of the card minus 1, take on the properties of the card previous
        this.deck.children[i].style.transitionDuration = "1s"; //transition duration so there is a slight delay
        this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
        this.deck.children[i].style.zIndex = this.deck.children[
          i - 1
        ].style.zIndex;
        this.deck.children[i].style.transform = this.deck.children[
          i - 1
        ].style.transform;
      }

      //special case, looping from the far left, behind the cards, to pop out on the right side
      this.deck.children[0].style.transitionDuration = "0.2s";
      //scale of 0 so the card shrinks out while transitioning, cleaner look
      this.deck.children[0].style.transform = `translate(-50%, -50%) scale(0)`;
      //this timeout is of the correct timing of popping the card from the left to right side, when the left side cards have shifted over, about one second (700)
      setTimeout(() => {
        //instantly take on the last card properties, so we don't see a slide to the right
        this.deck.children[0].style.transitionDuration = "0.0s";
        this.deck.children[0].style.left = last_cards_left;
        this.deck.children[0].style.zIndex = last_cards_zIndex;
        this.deck.appendChild(this.deck.children[0]);
        setTimeout(() => {
          //timeout of one second
          //this transition is for shrinking back in, much like the transition to shrink out from before
          this.deck.children[
            this.deck.children.length - 1
          ].style.transitionDuration = "0.2s";
          this.deck.children[
            this.deck.children.length - 1
          ].style.transform = last_cards_transform;
          //once the animation/transition is done set back to false so it can repeat
          this.animation_in_progress = false;
        }, 100);
      }, 700);
    } else {
      return;
    }
  };

  handle_previous = () => {
    //if there's no animation in progress, you can do all of this
    if (!this.animation_in_progress) {
      this.animation_in_progress = true;
      let first_cards_left = this.deck.children[0].style.left;
      let first_cards_zIndex = this.deck.children[0].style.zIndex;
      let first_cards_transform = this.deck.children[0].style.transform;

      for (let i = 0; i < this.deck.children.length - 1; i++) {
        //whatever card we are on, we're transitioning one over, so the properties must equal the properties of the card plus 1, take on the properties of the next card in the array
        this.deck.children[i].style.transitionDuration = ".5s";
        this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
        this.deck.children[i].style.zIndex = this.deck.children[
          i + 1
        ].style.zIndex;
        this.deck.children[i].style.transform = this.deck.children[
          i + 1
        ].style.transform;
      }

      //special case
      this.deck.children[
        this.deck.children.length - 1
      ].style.transitionDuration = "0.5s";
      this.deck.children[
        this.deck.children.length - 1
      ].style.transform = `translate(-50%, -50%) scale(0)`;

      setTimeout(() => {
        //instantly take on the last card properties, so we don't see a slide to the right
        this.deck.children[
          this.deck.children.length - 1
        ].style.transitionDuration = "0.0s";
        this.deck.children[
          this.deck.children.length - 1
        ].style.left = first_cards_left;
        this.deck.children[
          this.deck.children.length - 1
        ].style.zIndex = first_cards_zIndex;
        this.deck.insertBefore(
          this.deck.children[this.deck.children.length - 1],
          this.deck.children[0]
        );
        //timeout of one second
        //this transition is for shrinking back in, much like the transition to shrink out from before
        setTimeout(() => {
          this.deck.children[0].style.transitionDuration = "0.2s";
          this.deck.children[0].style.transform = first_cards_transform;
          //once the animation/transition is done set back to false so it can repeat
          this.animation_in_progress = false;
        }, 100);
      }, 700);
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <NavBar/>
      <div className="WholePage">
        <div>
          <h1>Photographs of The ‘Final’ 242 Main Concert, 2016 by Tim Snow</h1>
        </div>
        {/*Modal Display */}
        <ModalApp />
        
        <div className="ImageSlider">
          <div className= "Deck"ref={(ref_id) => (this.deck = ref_id)} style={styles.deck}>
            {/* using the newcards */}
            {this.state.cards}
          </div>
          </div>
          {/* Arrows in Container */}
          <div style = {styles.ButtonContainer}>
          <button><AiOutlineArrowLeft id="previous"onClick={this.handle_previous}></AiOutlineArrowLeft></button>
          <button><AiOutlineArrowRight id="next" onClick={this.handle_next}></AiOutlineArrowRight></button>
          </div>
      </div>
      </div>
    );
  }
}

const styles = {

  //image deck styling, the deck holds the cards or images
  //transform puts it truly in the center of the page
  deck: {
    transform: "translate(85%, 50%)",
    height: "55vh",
    width: "50vw",
  },

  //container for previous and next buttons
  ButtonContainer: {
    display: "flex",
    width: "100%",
    marginTop:"1vh",
    justifyContent: "space-evenly",
  },
};



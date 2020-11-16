import React, { Component } from "react";
import SecondCard from "../CardComponents/SecondCard.js";
import "./HorizontalCarousel.css";

export default class SecondCarousel extends Component {
  constructor(props) {
    super(props);
    //state of current card is at index 1
    this.state = {
      current_card: 1,
    };
  }

  //   clone the first and last cards
  //   this creates the illusion of a carousel
  componentDidMount() {
    //clone of first card
    let first_card_clone = this.card_container.children[0].cloneNode(true);
    //clone of lst card
    let last_card_clone = this.card_container.children[
      this.card_container.children.length - 1
    ].cloneNode(true);

    this.card_container.insertBefore(
      last_card_clone,
      this.card_container.children[0]
    );
    this.card_container.append(first_card_clone);

    //instant transtition to card index 1
    this.card_container.style.transitionDuration = "0.0s";
    this.card_container.style.transform = `translate(-${500}px)`;
  }

  //next function onclick handler
  handle_next = () => {
    if (this.state.current_card < this.card_container.children.length - 1) {
      //next  card sets to card after index 0
      let new_current_card = this.state.current_card + 1;

      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${
          500 * this.state.current_card
        }px)`;
        //if at the last card then transition back to the first card
        if (
          this.state.current_Card ===
          this.card_container.children.length - 1
        ) {
          setTimeout(() => {
            //animation for card movement
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${500}px)`;
            //need to set state here to 1 to reset
            this.setState({ current_card: 1 });
          }, 502);
        }
      });
      //prevents being able to scroll past the viewport
    } else {
      return;
    }
  };

  handle_previous = () => {
    //if greater than the previous card
    if (this.state.current_card > 0) {
      //transitions card back 1
      let new_current_card = this.state.current_card - 1;

      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${
          500 * this.state.current_card
        }px)`;

        if (this.state.current_Card === 0) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${
              500 * (this.card_container.children.length - 2)
            }px)`;
            //need to set state here to 1 to reset
            this.setState({
              current_card: this.card_container.children.length - 2,
            });
          }, 502);
        }
      });
      //prevents being able to scroll past the viewport
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <div className="buttonBox">
          {/* Previous Button handles previous on click*/}
          <button
            className="previousButton"
            style={styles.button}
            onClick={this.handle_previous}
          >
            Previous
          </button>
          {/* Next Button handles next function on click*/}
          <button className="nextButton" onClick={this.handle_next}>
            {" "}
            Next{" "}
          </button>
        </div>
        {/*Div with viewport takes style from styles.view port*/}
        <div className="view-port" style={styles.view_port}>
          <div
            ref={(ref_id) => (this.card_container = ref_id)}
            className="card-container"
            style={styles.card_container}
          >
            {/*Card Image Components, can fill these how we like */}
            <SecondCard card_number="https://omeka.bigheavyworld.com/files/original/ab677b4452224e18d40221c2ebb32651.jpg" />
            <SecondCard card_number="https://picsum.photos/500/300" />
            <SecondCard card_number="https://picsum.photos/250/300" />
            <SecondCard card_number="https://picsum.photos/300/300" />
            <SecondCard card_number="https://picsum.photos/400/300" />
            <SecondCard card_number="https://picsum.photos/210/300" />
            <SecondCard card_number="https://picsum.photos/250/300" />
            <SecondCard card_number="https://picsum.photos/100/300" />
            <SecondCard card_number="https://picsum.photos/220/300" />
            <SecondCard card_number="https://picsum.photos/290/300" />
            <SecondCard card_number="https://picsum.photos/240/300" />
            <SecondCard card_number="https://picsum.photos/210/400" />
            <SecondCard card_number="https://picsum.photos/240/500" />
          </div>
        </div>
      </div>
    );
  }
} //style object
const styles = {
  //viewport object- holds pictures in the center
  view_port: {
    //center viewport
    //holds the slider position
    position: "absolute",
    top: "50%",
    left: "45%",
    //so it's center
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "500px",
    overflow: "hidden",
  },
  //flex container for carousel
  card_container: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
  },
  Previous_Button: {
    display: "flex",
    width: "40px",
    paddingRight: "10px",
  },
};

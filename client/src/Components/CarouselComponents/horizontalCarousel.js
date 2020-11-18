import React, { Component } from "react";
import Card from "../CardComponents/Card.js";
import "./HorizontalCarousel.css";

export default class HorizontalCarousel extends Component {
  constructor(props) {
    super(props);
    //state of current card is at index 1
    this.state = {
      current_card: 0,
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
    this.card_container.style.transform = `translate(-${0}px)`;
  }

  //next function onclick handler
  handle_next = () => {
    if (this.state.current_card < this.card_container.children.length - 1) {
      //next  card sets to card after index 0
      let new_current_card = this.state.current_card + 1;

      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${
          30.5 * this.state.current_card
        }vw)`;
        //if at the last card then transition back to the first card
        if (
          this.state.current_Card ===
          this.card_container.children.length - 1
        ) {
          setTimeout(() => {
            //animation for card movement
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${30.5}vw)`;
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
          30.5 * this.state.current_card
        }vw)`;

        if (this.state.current_Card === 0) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${
              30.5 * (this.card_container.children.length - 2)
            }vw`;
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
            Next
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
            {/* <Card card_number=" https://omeka.bigheavyworld.com/files/original/98c5dd94467b09101342b858a275e26b.jpg" /> */}
            <Card card_number="https://omeka.bigheavyworld.com/files/original/ab677b4452224e18d40221c2ebb32651.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/1b9cf23df2d30086913a8e82c1adad8c.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/fbd2849c3eb1dfb403e7ba6f8f53ebbc.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/31372a662168cddf3bcd04d22bce7196.jpg" />
            <Card card_number=" https://omeka.bigheavyworld.com/files/original/98c5dd94467b09101342b858a275e26b.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/ab677b4452224e18d40221c2ebb32651.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/1b9cf23df2d30086913a8e82c1adad8c.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/fbd2849c3eb1dfb403e7ba6f8f53ebbc.jpg" />
            <Card card_number="https://omeka.bigheavyworld.com/files/original/31372a662168cddf3bcd04d22bce7196.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
//style object
const styles = {
  //viewport object- holds pictures in the center
  view_port: {
    //center viewport
    //holds the slider position
    position: "absolute",
    top: "50%",
    left: "50%",
    //so it's center
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "60vw",
    paddingLeft: "50px",
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

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
            Previous Posters
          </button>
          {/* Next Button handles next function on click*/}
          <button className="nextButton" onClick={this.handle_next}>
            Next Posters
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
            
            <Card card_number="https://omeka.bigheavyworld.com/files/original/c7b54519fcbc85ee03d08300a845bb89.jpg "text = "Molotov Solution & Man Overboard at 242"alt = "poster"> </Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/d19c4c649535ca080b5999a1b3ce3e34.jpg" text = "Slush at 242"alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/7883743d66a4a6772cba732c967806eb.jpg"text = "Screaming Broccoli at 242"alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/899169f28ab7c602aab953b192ded851.png" text = "Sparrows at 242"alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/082e001e3dc2a3519a6f3ca4c5d270bb.jpg"text = "New Years Punk/Hardcore Fest '98 at 242"alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/5f6663f0ceaace6368a99b04f07ae3fe.png" text = "Warzone at 242"alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/7eafb5ffb841eb9f97ffa93d510d5dbe.png" text = "Envy at 242"  alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/da425bc903aec5a3f0d15fbfd73d91a9.png" text = "Save Ends at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/5faf2db1a217b16174e22dccff69d755.png" text = "Reverser at 242"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/2de85b50e013392b3c94d483e839c2e7.png" text = "Radiator Hospital at 242"></Card>
             <Card card_number="https://omeka.bigheavyworld.com/files/original/e7a22db55caced638eb874f19ff9c3ec.png" text = "Brass Tactics at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/ae2cae6fcd736cfdc1534dfcd7640670.png" text = "Joyce Manor at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/26682a2c76a895acd2a8db77c07a7438.png" text = "Outlast at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/c87078b2b6b677bc5befc7567e1af649.png" text = "Madball at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/8461fa4c4f09534e34ab87f111a41e82.png" text = "Shift at 242" alt = "poster"></Card>
             <Card card_number="https://omeka.bigheavyworld.com/files/original/917f91498326107edec28cd0b0392a37.png" text = "Grit at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/bb8c74aafd2ef0f75db6ab131b2dd188.png" text = "The Queers at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/25df5bb6d08ffab9c14f5772ad134a5f.png" text = "Sub Zero at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/1555130a590603cce342abd953331524.png" text = "Texas Is the Reason at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/e50ec8ac745071694599074fd3abc4ef.png" text = "Bene-Fest" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/0f4e26577611887a4c2287514940b919.png" text = "Dub Narcotic Sound System at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/99b8bcc843380089ef9d31a2c875ab51.png" text = "Sheer Terror at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/cb3c2f5860c1db84759982522fce62ea.png" text = "Execute at 242" alt = "poster"></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/original/7f68d2a1ac1b33f26c9d95ff1d34c682.png" text = "Warzone & 7 Seconds at 242" alt = "poster"></Card>
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
    transform: "translate(-50%, -40%)",
    height: "80vh",
    width: "60vw",
    paddingLeft: "5%",
    overflow: "hidden",
  },
  //flex container for carousel
  card_container: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
  },

};

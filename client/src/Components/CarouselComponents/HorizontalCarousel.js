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

            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/c7b54519fcbc85ee03d08300a845bb89.jpg "
              text="Molotov Solution & Man Overboard"
              alt="poster"
            >
              {" "}
            </Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/d19c4c649535ca080b5999a1b3ce3e34.jpg"
              text="Slush"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/7883743d66a4a6772cba732c967806eb.jpg"
              text="Screaming Broccoli"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/899169f28ab7c602aab953b192ded851.png"
              text="Sparrows"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/082e001e3dc2a3519a6f3ca4c5d270bb.jpg"
              text="New Years Punk/Hardcore Fest '98 "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/5f6663f0ceaace6368a99b04f07ae3fe.png"
              text="Warzone"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/7eafb5ffb841eb9f97ffa93d510d5dbe.png"
              text="Envy "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/da425bc903aec5a3f0d15fbfd73d91a9.png"
              text="Save Ends"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/5faf2db1a217b16174e22dccff69d755.png"
              text="Reverser "
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/2de85b50e013392b3c94d483e839c2e7.png"
              text="Radiator Hospital "
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/e7a22db55caced638eb874f19ff9c3ec.png"
              text="Brass Tactics"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/ae2cae6fcd736cfdc1534dfcd7640670.png"
              text="Joyce Manor "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/26682a2c76a895acd2a8db77c07a7438.png"
              text="Outlast"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/c87078b2b6b677bc5befc7567e1af649.png"
              text="Madball "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/8461fa4c4f09534e34ab87f111a41e82.png"
              text="Shift "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/917f91498326107edec28cd0b0392a37.png"
              text="Grit "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/bb8c74aafd2ef0f75db6ab131b2dd188.png"
              text="The Queers "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/25df5bb6d08ffab9c14f5772ad134a5f.png"
              text="Sub Zero "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/1555130a590603cce342abd953331524.png"
              text="Texas Is the Reason"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/e50ec8ac745071694599074fd3abc4ef.png"
              text="Bene-Fest"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/0f4e26577611887a4c2287514940b919.png"
              text="Dub Narcotic Sound System "
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/99b8bcc843380089ef9d31a2c875ab51.png"
              text="Sheer Terror"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/cb3c2f5860c1db84759982522fce62ea.png"
              text="Execute"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/7f68d2a1ac1b33f26c9d95ff1d34c682.png"
              text="Warzone & 7 Seconds"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/4d15346ef52f1128395628e1e6d7c195.png"
              text="No Submission"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/c5269b77df5026f0484ebfe685794fa4.png"
              text="Exosus"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/fff60fdf9ebe5baed67c339cc40174fc.png"
              text="Mikey X's Birthday Extravaganza"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/d5a8637fd5b6b49b45ebefb8a137536c.png"
              text="Kid With a Man Head"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/5848f85f4ed1c3768f3f635a338cb2ac.png"
              text="LVL UP"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/d6e08e3be5c064e3202bfc0b48c0adfe.png"
              text="Kississippi"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/62000cd8c2d60d42f0c3577bf77578a2.png"
              text="June"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/005aad77db7dda5644815d3650eb82fa.png"
              text="12 x Over"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/c05e365946c88070a6af4270421d4ca7.png"
              text="Jesus Nut"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/a0356f35cad7682b11d933e19a62b2af.png"
              text="Madball"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/c6b887ad0b6a77218b1c5cbbbfd956fb.png"
              text="Earth Crisis"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/a318fc33eae7c18e5bad9c7a6eb782b8.png"
              text="Joyce Manor"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/d0a9393a028b4dc8da4f94fc08ae944f.png"
              text="Black Hairy Tongue"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/740e1d148319f55f4d36053a3519e062.png"
              text="Black Hairy Tongue"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/397aaf3332df9fcd4a8ed3dc4fc36c2a.png"
              text="Black Hairy Tongue"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/f976b051ff83de96e324be9cb21dc425.png"
              text="Burlingtonitus"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/a3671dc8fe7c039775c0103232a28d7d.png"
              text="Burlingtonitus"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/b561d12313c194515b597a9e70eab09c.png"
              text="Annual Halloween Show"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/74728d72a3055058441e381de1a29254.png"
              text="Gypsy"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/ddf246ba42f3aa1f0da4d3615ab4d33c.png"
              text="Ground Zero"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/65eca5dd50647a1122aba3605a1c8626.png"
              text="The FU's"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/eee46e1c4afe7f7cb6c6a8997cf96be4.png"
              text="The Helm"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/a6fbd6bf2669effba6f148815b7dd596.png"
              text="Ceremony"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/7bbf6c0646040803072d227f8ecf3fca.png"
              text="The Final Show"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/cf59bb1d9e67a2c20175d079b0a9233e.png"
              text="Doc Hopper"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/baefd33b35cf9521ba08e246e57d96b0.png"
              text="Doc Hopper"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/303f373d6b6546b0351de752a88ed66e.png"
              text="Jesus Nut"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/4a5704983bcfb59e32a52bc0a0b5f910.png"
              text="Execute"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/b66516211e22d5957857460c88b14168.png"
              text="Soup Sandwhich"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/9bbca8fe44ec57dda4920470a83a3bb4.png"
              text="Eat a Sandwich"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/6936a2c34dcd60e5b9bffe1ba8e3e16e.png"
              text="Crucial Times"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/93b4b94ac68c31f70a720346343cb398.png"
              text="Doom Service"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/f6868229cd9383e48f5ae39fd9d1f2ab.png"
              text="Last Ones Standing"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/177ee248af9a32a3ad12393c86b0db6d.png"
              text="The Hemlock Verdict"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/9c524a94ad48ede686d3d374f5a953c7.png"
              text="My Revenge"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/6d751f602c7ef1b8822d95baf8fbc1ef.png"
              text="Fight Back"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/0555d32854e22f0eb826fa3ae1e1d54e.png"
              text="Grey Area"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/69df70deaa9afcd025b1199aa009dfaa.png"
              text="H2O"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/b0074fd3a8b7f9336342059b1319d37c.png"
              text="My Revenge"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/318e8c97ac573c7944d3ca39103e2f6b.png"
              text="Men Who Could Fight"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/eb15dd4d73e442da85d29fbc3e5e8278.png"
              text="Horror"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/060efe1ecdd0caeb97f018598b041f5b.png"
              text="Drive The Hour"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/cc7e5d48f75931ab1c7cdaa560b50862.png"
              text="6th Annual Halloween Show"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/a57609a1d85dd6a8d209bea04851ffe2.png"
              text="Monsterfest"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/172b77e703cd093beb6a58edd7526ca7.png"
              text="Drowningman"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/dc73cf0a60dd7e8a589464c9a8aeceb3.png"
              text="Drowningman"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/fb76c467d752bf81300a52068ed12921.png"
              text="Anti-Racist Action Meetings"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/eba3f9fd6f2a773c08116b629dc0c110.png"
              text="Halloween Show"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/04c89141140e0b6f6ca23c6164fceb3e.png"
              text="2nd Annual Halloween Show"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/f2729cd99df64926267d4389c7f69dd2.png"
              text="Shutdown"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/6e41909d2c6deaf4632666af9711b50d.png"
              text="How We Are"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/86232ac3b721b69affcbc65b4fcd8adb.png"
              text="Tired of Trying"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/230bfd3d32511bfbee98909b67771d0e.png"
              text="September"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/c034d58d1fc8986a04a58d16d861003c.png"
              text="Piebald"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/3593d3c11cbef23c06bec3e988e43cda.png"
              text="Cave-In"
              alt="poster"
            ></Card>
            <Card
              card_number="https://omeka.bigheavyworld.com/files/original/a498d7aca70695ad6eded98937565b16.png"
              text="In Reach"
              alt="poster"
            ></Card>
            <Card card_number="https://omeka.bigheavyworld.com/files/fullsize/51923f516d0b38cd3aa51bcc1b91971c.jpg" text="Never Again" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/f7c367b260ee629ed083e9e40acb3d2a.jpg" text="Never Again" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/25b7747f7b02ef7336a51760102b2d6c.jpg" text="Give Up The Ghost" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/77febe20f1d46c541ef448e5b69db5a4.jpg" text="Fight Back" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b643086122e0d76bcaf2239f263a7401.jpg" text="Dysfunkshun" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/a5120f4505ad33745c41196460bcb6e7.jpg" text="Spies In America" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/84aa88a33eb5ee253fea0b03036b27e9.jpg" text="In The Red" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/2c6aeb091f7a2090d028fc368988e645.jpg" text="Cruel Hand" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/766508cc023c6e28de9e9d98e294bae8.jpg" text="Blind Society" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/48aceb47c068322bdefd3ab8a809ae3c.jpg" text="Fight Back" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b662e90feaef565926f09fa49e7e6de0.jpg" text="River City Rebels" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/25e2eda135b822ffb925dd89958c3ce9.jpg" text="Team Effort" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/4e2ead5b563041da8a8dbd8d6eba5d30.jpg" text="Far From Breaking" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/906cb8c53770cba55d123c1eeedfd86f.jpg" text="Halloween Show" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/ba1fcfaad5288b1c9729bebbe2369b84.jpg" text="Nationwide Panic" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/20a0f30713393ae119463c46f81f6bb0.jpg" text="Wards" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b7f1adea1c15c6c377c08c3aac0268eb.jpg" text="Agnostic Front" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/818acdae4cebbc9a9168a77984cb8e69.jpg" text="Judge" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/a8447ee21da331d2478158703f573f1a.jpg" text="Verse" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/36ccc927f8d1880209c1c693652c298d.jpg" text="AFI" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/359860f917de937a5ac46d33910e3ed6.jpg" text="Misfits" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/6c8a7e845cdf345a618491bc0cc03608.jpg" text="Trial" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/15ee42c2e9e18b2365cd4eba3152a09e.jpg" text="Murphy's Law" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/dde2d2e11c84c706b252c7a7593945cb.jpg" text="River City Rebels" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/65f121acb1bab56361554a4f67a87e42.jpg" text="Revolution Rock '03" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/78c64c8ef8715d4d0117a72d658056b9.jpg" text="Monster Fest Second Stage" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/34d2921d3660405d17ea38c72be25759.jpg" text="River City Rebels" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/cf30b4ba19ee1a16955b34ea88a3ef44.jpg" text="The Business" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/fb814e2bf0ddbd91da24ca2ffad8fdf0.jpg" text="Avail" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b0a43814bab146cbc7e8bcb993177f20.jpg" text="Fastbreak" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/fef21bca69d89339920a60af227078f7.jpg" text="The A-Team" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/f31c8c369901ea6ad9d076bfd60137d1.jpg" text="The Virus" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/38fd0e02fc286437c52a47fc3aac54ab.jpg" text="What Feeds The Fire" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/37d40fed8c326e093a3cbe76c414baa8.jpg" text="Agnostic Front" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/946ddddcc97da01a9062579aecc35e90.jpg" text="Agnostic Front" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/7f1f3db8a5e865af69f0bc99a6f1c391.jpg" text="Iron Lung" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/6d84092cf7c9f67d3f44fcfc4dca958a.jpg" text="Kill Your Idols" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/182c6dc37105a048541c9f952351e102.jpg" text="Hands Tied" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b6dd145b3563be8c3b6202505b9cd639.jpg" text="American Nightmare" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/21912f524cff864e122899d4381edfb5.jpg" text="End Of Summer Show" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/62c3d2dedfdaf08215f3aa498298cb76.jpg" text="My Revenge" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/0490d0f899ea608b3e4e221589628de4.jpg" text="12xOver" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/42b612f9f886dbc20c112e32b7483087.jpg" text="Rocketsled" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/ba016b10f2658af2c4c5d08eccfca26e.jpg" text="Chin Ho!" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/9a4937ff39b6ce13468a516f5286c894.jpg" text="Slush" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/f8d6e38aee4484badd6753fb127f36ca.jpg" text="Kid With Man Head" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/6391a80e3f56a2141aae416dc2979211.jpg" text="Dead Hearts" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/d2bb3fe7088dd43344ed0bf5f4bf669e.jpg" text="Ceremony" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/9900bbf7954851e1058caffb215765f1.jpg" text="30th Anniversary" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/9810d44874b21544ecb9569858bce278.jpg" text="Naked Agression" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/0f052b9842c08923bb891416a8f09350.jpg" text="Big Mistake" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/1fead63a3e8fa73c82693ab96ca53e04.jpg" text="April" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/f6fb207d06ecf70ae99dce4beeddb63b.jpg" text="12xOver" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/6f291c277d54efcccb9f120af51e1860.jpg" text="Omaha" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/63f2a716a3237a2c6dbde86a6475b2d7.jpg" text="The Wards" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/af3156a3cbe2ed0d2132dfc7726df220.jpg" text="Death Cows & 50 Hot Lester" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/dbcaa9dee1c57ab0b45a224e6965efb5.jpg" text="Death Cows" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/23374cbf598e26706f14a33d2c6b9800.jpg" text="30th Anniversary" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/d6593bfce6f131df2a9c999330bd545b.jpg" text="Self Defense Fam" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/5c6e07733d2c21c39cf134f0b6f76649.jpg" text="My Revenge" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/f8708f733d10ff3cda5177b5a6f0ae45.jpg" text="RVIVR" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/d43694cd71c5e46201c7c9664dbc3fb3.jpg" text="Chainsaws & Children" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/ceb105568040b4deca559edae62452c3.jpg" text="Crocodile Shop" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/bf39ddfa378a59bd02237d6cb9eb5b9e.jpg" text="Meridian & Coldfront" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/8a2efe96f9fd2c742fb9addd67d2ac4b.jpg" text="Benefit Halloween Show" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/ce9b471d4cd29dd53e4d15def8375dc7.jpg" text="Casting Curses" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b121a43470befcf374151ca9864c1418.jpg" text="Non Combos" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/c7a15ee7bf687ab8b92a365568f9eea0.jpg" text="The Dillinger Escape Plan" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/ea730da1772b735ca30dea4254176238.jpg" text="Burlingtonitus" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/06fe6ec2c3b224ea69328e3c5604103a.jpg" text="Color Blind" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/49538e514470b2c1dcc8a8fc38197520.jpg" text="Gala Opening" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/7ff6d272f675300db47459ff07542c7e.jpg" text="The Freaks" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/80d70793c0262b13d385b65f81c5cd4a.jpg" text="Youth Of Today" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/15b67581ed4b2e1c5f824af81831c81e.jpg" text="Museum Of Corruption" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/d41d1cca714429b5010e60f134ca327d.jpg" text="Common Ground" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/2cae504ca65256202be7db5fc4ed7c80.jpg" text="No Submission" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/9311acae0d0c9f1c84a862d3e14f4865.jpg" text="Joyce Manor" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/bd2d03b5459939b55de525b65ab0376b.jpg" text="Draize" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/61f3ae972366dc436a7042dc43cc9510.jpg" text="Reservoir" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/6bd011483874c61b44c13a20c9e7acbc.jpg" text="Crucial Times" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/45a1ed51d66107511bac4c1660d2b196.jpg" text="Suffix" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/bf103dd859d0171a61ca607cf38f5ed9.jpg" text="Johnny Booth" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/7576f5dadf128759201858f5a6a6fac1.jpg" text="Off!" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/2ded990e420ea7ab2bdbf8776deae774.jpg" text="Truth Inside" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/a2c334b4a2671ef4a9f58b648cc6526f.jpg" text="Such Gold & The First Annual" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/08459aeb7f6369d8bd5a82f787832cbb.jpg" text="Crucial Times" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/659dd71e0e6be2856909dd41f47fdf35.jpg" text="Raindance" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/324d703530cb46bcc448a61f3d28bac2.jpg" text="Run, Forever" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/1b04e95500ec9adef46686a1a5b11a17.jpg" text="Brass Tactics" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/397049fa8c68a6fbdf21fc2d4cd42584.jpg" text="Pastime" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/e5b6e4d6911f6ebba941f236320a588c.jpg" text="Slingshot" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/ff0527edc05d712398cbd91e5def7ce9.jpg" text="Greys" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/dbfbbebee3a29f007cda6a14e49bbeb8.jpg" text="25th Anniversary" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/9fbac9ac1e92126e6f3ce683cea4c480.jpg" text="Spencer Crispe" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/6844d3c114971b0ce01fe1af6ab435cc.jpg" text="Edhochuli" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/7d6c1682fca795c8fca44299d780d1b2.jpg" text="Belly Up" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/465f210bf5c2193fe6203f8a900ceadb.jpg" text="Hawthorne Heights" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/5927834e7d75d19449aa0951bc7b769f.jpg" text="Dead Words" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/8f6564e8f9c84b1ecfca089d6605f7ed.jpg" text="Klozapin" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/c09cfeb92e3db543701bfe9bf492e936.jpg" text="Acid Roach" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b72bbda7d4efe71f070a2a6c976ae64b.jpg" text="Doom Service" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/0ac541407b2b9e2575e7ecc2301abb1e.jpg" text="The Amphibious Man" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/38bcf8d6ef1f17178950150346a4d68f.jpg" text="Remnants" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/729eb40c86a64a00754776f877df666d.jpg" text="Get A Grip" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/89c65d81b7cfe97ee6565e67a99605e3.jpg" text="Solids" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/7860e674695f015e38cbc1a86968cad7.jpg" text="Warm Needles" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/71ce3a4c186c27db2696ed4fe3e66a4c.jpg" text="Jovian's Witness" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/b18b3ec648ed76fc7ce82b511696f41d.jpg" text="Violent Sons" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/64ecd02f2152e8fb189ee8c8bd7410fc.jpg" text="Derive" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/aaac8656b7d2183878623f0b7f65b1e6.jpg" text="Rubrics" alt="poster"> </Card>,
<Card card_number="https://omeka.bigheavyworld.com/files/fullsize/f3a2d9d9dbb46c010ea823afa432f49f.jpg" text="My Revenge" alt="poster"> </Card>

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

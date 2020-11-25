import React from "react";

function Card(props) {
  return (
    <div
      //destructuring the object, passing in the card color
      style={{
        ...styles.card,
        left: `${props.x}.px`,
        top: `${props.y}.px`,
        zIndex: props.z_index,
        //need to bring in translate to hold the center position
        transform: `translate(-50%, -50%) scale(${props.scale})`,
      }}
    >
      <img style={styles.image} src={props.images} alt='react slider'></img>
    
    </div>
  );
}

const styles = {
  //styling of the inidividual cards
  //most of the styling comes from the deck
  //border so we can easily tell the card position
  card: {
    position: "absolute",
    top: "50%",
    height: "85%",
    width: "65%",
    border: "5px solid white",
    boxSizing: "border-box",
    z_index:"10"
  },
  //photographs
  image: {
    width: '100%',
    height: '100%',
    boxShadow: '10px 10px 8px black'
  }
};

export default Card;

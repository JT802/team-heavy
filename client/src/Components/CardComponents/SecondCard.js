import React from "react";

function SecondCard(props) {
  return (
    //card style
    <div style={styles.card}>
      {/*takes card component based on card number because props*/}
      <img style={styles.image} src={props.card_number} alt="image" />
    </div>
  );
}
//card styles
const styles = {
  card: {
    width: "40vw",
    height: "40vh",
    backgroundColor: "white",
    // border: '1px solid black',
    boxSizing: "border-box",
    fontSize: "2.5em",
    color: "white",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
};
//enables react to not render elements that do not need to be rerendered
export default React.memo(SecondCard);

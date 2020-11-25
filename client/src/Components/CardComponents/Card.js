import React from 'react'

function Card(props) {
    return (
        //card style
        <div style={styles.card}>
           { /*takes card component based on card number because props*/}
           <img style={styles.image} src ={props.card_number} alt="image"/>
            <h4 style = {styles.text}>{props.text}</h4>
            <p style={styles.date}>{props.date}</p>
        </div>
    )
}
//card styles
const styles = {
    card: {
        display: 'flex',
        flexDirection:'column',
        width: '35vw',
        height: '55vh',
        backgroundColor: 'black',
        boxSizing: 'border-box',
        fontSize: '2.5em',
        border:"2px solid gold"
    },
    image: {
        width:'60%',
        height: '75%',
        boxShadow: '10px 10px 8px black',
        marginLeft:'20%',
        marginTop:"3%"

    },
    //under poster 
    text: {
        fontSize:"90%",
        color: "gold",
        fontWeight: '1000',
        textShadow: '5px',
        textAlign: 'center',
      
    
    },

}
//enables react to not render elements that do not need to be rerendered
export default React.memo(Card)
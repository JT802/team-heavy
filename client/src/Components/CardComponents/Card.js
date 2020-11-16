import React from 'react'

function Card(props) {
    return (
        //card style
        <div style={styles.card}>
           { /*takes card component based on card number because props*/}
           <img style={styles.image} src ={props.card_number} alt="image"/>
        </div>
    )
}
//card styles
const styles = {
    card: {
        width: '35vw',
        height: '45vh',
        backgroundColor: 'white',
        // border: '1px solid black',
        boxSizing: 'border-box',
        fontSize: '2.5em',
        border:"2px solid white"
 
        // paddingLeft:'30px',
        // paddingRight:'30px'
    },
    image: {
        width:'98%',
        height: '100%',
        boxShadow: '10px 10px 8px black',
        marginLeft:'30px'

    }
}
//enables react to not render elements that do not need to be rerendered
export default React.memo(Card)
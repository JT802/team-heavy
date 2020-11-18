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
        height: '55vh',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        fontSize: '2.5em',
        border:"2px solid white"
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
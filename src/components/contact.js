import React  from 'react'

const Contact = (props) => {
    //redireting the 
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
console.log(props);
 return (
     <div className="container">
     <h2 className="center">Contact</h2>
    <p>It’s a normal phenomenon to talk about sex with your partner! Descriptive paragraphs may be sent to a guy to turn him on or say to him that you want to change something. Are you too shy to talk about sex, sexual desires or ideas with your boyfriend? Copy and paste the most suitable for you sexting paragraphs and send him!</p>
    </div>
 )
}

export default Contact
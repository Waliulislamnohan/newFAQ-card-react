import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [visible, setVisible] = useState(false);
    const toggle = () =>{
        setVisible((oldvisible)=> !visible)}
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button onClick={toggle} className="btn">{visible ? '-' : '+'}</button>
			</header>
			{visible ? <p>{info}</p> : null}
			
		</article>
	);
}

export default Question

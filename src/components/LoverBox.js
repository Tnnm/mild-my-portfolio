import React from 'react'

const LoverBox = ({
	name,
	note,
	wrapperBoxClassname,
	noteClassName,
	nicknameClassname
}) => {
	return (
	<div className={`lover-box ${wrapperBoxClassname}`}>
		<h1>Name :
			<span className={nicknameClassname} > {name} </span>
		</h1>
		<p className={noteClassName} >Note: {note}</p>
	</div>
	)
}


export default LoverBox
import React from 'react';
import classNames from 'classnames';
import styles from "./CthulhuSkill.module.css";
import dieImg from  "../../img/d10.png";

interface SkillProps {
	name: String;
}

function CthulhuSkill({ name } : SkillProps) {
	const value = 23;
	const halfValue = Math.floor(value / 2);
	const oneFifthValue = Math.floor(value / 5);

	return (
		<div className={styles.container}>
			<div className={styles.die}>
				<img className={styles.dieImg} src={dieImg} alt="d100" />
			</div>
			<div className={styles.containerLabel}>
				<span>{name}</span>
			</div>
			<div className={styles.containerMain}>
				<input
					type="text"
					value={value}
					className={classNames([styles.input, styles.inputMain])} />
			</div>
			<div className={styles.containerDerived}>
				<input
					type="text"
					disabled
					value={halfValue}
					className={classNames([styles.input, styles.inputDerived, styles.inputTop])} />
				<input
					type="text"
					disabled
					value={oneFifthValue}
					className={classNames([styles.input, styles.inputDerived])} />
			</div>
		</div>
	);
}

export default CthulhuSkill;

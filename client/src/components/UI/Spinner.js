import classes from './Spinner.module.css'; // https://tobiasahlin.com/spinkit/

const Spinner = () => {
	return (
		<div className={classes.spinner}>
			<div className={classes.doubleBounce1}></div>
			<div className={classes.doubleBounce2}></div>
		</div>
	);
}

export default Spinner;


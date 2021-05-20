import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading({ size }) {
	return (
		<div className="progress-loading">
			<CircularProgress size={size} />
		</div>
	)
}

Loading.propTypes = {
	size: PropTypes.string,
}
Loading.defaultProps = {
	size: "2rem",
}

export default Loading


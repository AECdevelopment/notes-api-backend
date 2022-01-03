module.exports = (request, response) => {
	response.status(404).json({
		error: 'Content not found'
	})
}
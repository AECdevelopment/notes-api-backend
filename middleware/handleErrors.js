module.exports = (error, request, response, next) => {
	if (error.name == 'CastError') {
		return response.status(400).send({error: 'id used is malformed'})
	} else {
		return response.status(500).end()
	}
}
module.exports = function getUsers(req, res, next) {
	if(req.params.id) {
		return res.json({ message: `Hello ${req.params.id}`, success: true})
	}
	res.json({ message: "Successfully done", success: true })
}
module.exports = {
	createUser(db, args) {
		return new Promise((resolve, reject) => {
			db.query({
				sql: `
					INSERT INTO users (username, email, password)
					VALUES (?,?,?)
				`,
				values: [args.user.username, args.user.email, args.user.password]
			}, (err, results, fields) => {
				if (!err) {
					db.query({
						sql: `SELECT * FROM users WHERE id=?`,
						values: [results.insertId]
					}, (err2, results2, fields2) => {
						resolve(results2[0])
					})
				} else {

				}
			})
		})
	}
}
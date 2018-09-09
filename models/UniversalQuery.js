module.exports = function (db, query, values, onlyOne) {
	return new Promise((resolve, reject) => {
		db.query({
			sql: query,
			values: values
		}, (err, results, fields) => {
			if (onlyOne) resolve(results[0])
			else resolve(results)
		})
	})
}
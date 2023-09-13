module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,pdf,txt,css,js,jpg,png}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
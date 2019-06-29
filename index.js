const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const MarkdownParser = require('./lib/Parser');

function compile(req, res) {
	let parser = new MarkdownParser(req.query.document_json);
	parser.parse();
	res.send(parser.tree.root);
}

express()
  .use(express.static('./'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/compile', compile)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

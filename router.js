const express = require("express");
const fs = require('fs');
const { resolve } = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const router = express.Router();

const renderer = createRenderer();

router.get('*', (req, res) => {
  debugger;
  const context = { url: req.url };
  // renderer
  //   .renderToStream(context)
  //   .pipe(res);
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).end(err.message);
    }
    return res.end(html)
  });
});

function createRenderer() {
  debugger;
  const bundle = resolve(__dirname, './dist/server.bundle.js')
  // const bundle = require('./dist/vue-ssr-bundle.json');
  const template = fs.readFileSync('./index.html', 'utf-8');
  return createBundleRenderer(bundle, { template });
}

module.exports = router;
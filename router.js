const express = require("express");
const fs = require('fs');
const { resolve } = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const router = express.Router();

const renderer = createRenderer();

router.get('*', (req, res) => {
  const context = { url: req.url };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).end(err.message);
    }
    return res.end(html)
  });
});

function createRenderer() {
  const bundlePath = resolve(__dirname, './dist/server.bundle.js');
  const template = fs.readFileSync('./index.html', 'utf-8');
  return createBundleRenderer(bundlePath, { template }); // https://ssr.vuejs.org/api/#createbundlerenderer
}

module.exports = router;
const util = require('hexo-util');
const metascraper = require('metascraper')([
  require('metascraper-image')(),
  require('metascraper-url')()
]);
const got = require('got');

async function getUrl(glink, attr){
  const targetUrl = glink;
  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  var imgpath = metadata.image.split("=")[0];
  // Google seems to return proper file regardless of extension type
  // providing an image extension is needed for fancybox to work.
  imgpath = imgpath + "=d?-.jpg"
  attr["src"] = imgpath;
  var res = util.htmlTag("img", attr)
  return await res;
};

hexo.extend.tag.register('gphoto', args => {
  var glink = args[0];
  var attr = args[1] || "{}";
  attr = JSON.parse(attr);
  return getUrl(glink ,attr)
},{async:true}
);

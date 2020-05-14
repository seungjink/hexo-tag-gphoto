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
  if (("width" in attr) && ("height" in attr)){
    var suffix = "=w" + attr.width + "-" + "h" + attr.height+ "-p-k" 
    imgpath = imgpath + suffix;
  }
  else if("width" in attr){
    var suffix = "=w" + attr.width
    imgpath = imgpath + suffix;
  } 
  else if("height" in attr){
    var suffix = "=h" + attr.height
    imgpath = imgpath + suffix;
  } 
  else{
    imgpath = imgpath + "=w10000"
  }

  attr["alt"] = " "
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

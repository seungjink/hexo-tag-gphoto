# hexo-tag-gphoto

This is a tag plugin for [hexo](https://hexo.io/).
It allows you to embed images on your Google Photos account using sharable link.

## Installation

```
cd <path-to-your-hexo-directory>
npm install seungjink/hexo-tag-gphoto
```

## Usage

1. Upload your photo on Google Photos.
2. Click the share button and generate the link starting with photos.app.google.com/...

![example](/example.png)

3. Paste the link on your markdown file as follows.

```
{% gphoto imageURL '{JSONImageAttibutes}' %}
```

## Example

```
{% gphoto https://photos.app.goo.gl/wXN1WtXqpSu4EWpdA %}

{% gphoto https://photos.app.goo.gl/wXN1WtXqpSu4EWpdA '{"width":500,"height":400}' %}
```

will be converted into:

```
<img src="https://lh3.googleusercontent.com/pw/ACtC-3e8E_qpAKPL6kEwe4oCiO0IfSApZpt55-kH9jPDqctZf0qFK5N71LORbVyn85fMS49VQs639Cwe9VMDURMIoJVkSt_a9UMlBpIIrVFMfFqNitdj_OwR8JiIXkja-XpHNXGexur-mMv_fvz2Sbq3neg=d?-.jpg">

<img width=500 height=400 src="https://lh3.googleusercontent.com/pw/ACtC-3e8E_qpAKPL6kEwe4oCiO0IfSApZpt55-kH9jPDqctZf0qFK5N71LORbVyn85fMS49VQs639Cwe9VMDURMIoJVkSt_a9UMlBpIIrVFMfFqNitdj_OwR8JiIXkja-XpHNXGexur-mMv_fvz2Sbq3neg=d?-.jpg">
```

## IMPORTANT

JSONImageAttribute must be enclosed with single quotes.
Each key is enclosed by double quotes.

## Known Issues

Fancybox and lightgallery is compatibe with this plugin.


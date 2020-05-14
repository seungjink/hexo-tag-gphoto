# hexo-tag-gphoto

This is a tag plugin for [hexo](https://hexo.io/).
It allows you to embed images on your Google Photos account using sharable link.

## Installation

```
cd <path-to-your-hexo-directory>
npm install seungjink/hexo-tag-gphoto --save
```

## Usage

1. Upload your photo on Google Photos.
2. Copy the link starting with photos.app.google.com/...

![example](/example.png)

3. Write following tag on your markdown file.

```
{% gphoto imageURL '{JSONImageAttibutes}' %}
```

## Example

```
{% gphoto https://photos.app.goo.gl/z4J8xmkFAqxssc2BA %}

{% gphoto https://photos.app.goo.gl/z4J8xmkFAqxssc2BA '{"width":500,"height":400}' %}
```

will be converted into:

```
<img src="https://lh3.googleusercontent.com/JBVnNcGX5ZpSWnX6OlBOcQUrvZKECSewKH-dMnf3ajpaYDHxWVOQYTy5rbyjwOyyvXB3xYV7IKNJfjH3yGupI0crVpd2CHnWlzCPVkQVbqPpBku40IWImksJ3XvaOaCM8zNH-nUb=w10000">

<img src="https://lh3.googleusercontent.com/JBVnNcGX5ZpSWnX6OlBOcQUrvZKECSewKH-dMnf3ajpaYDHxWVOQYTy5rbyjwOyyvXB3xYV7IKNJfjH3yGupI0crVpd2CHnWlzCPVkQVbqPpBku40IWImksJ3XvaOaCM8zNH-nUb=w500-h400-p-k">
```

## IMPORTANT

JSONImageAttribute must be enclosed with single quotes.
Each key is enclosed by double quotes.

## Known Issues

* Fancybox seems not working.
* lightgallery is compatible with this version.


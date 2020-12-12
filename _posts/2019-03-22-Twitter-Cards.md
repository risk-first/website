---
title: Twitter Cards
description: How to create Twitter/LinkedIn cards for Posts.
url: https://riskfirst.org/2019/03/22/Twitter-Cards

author: rob
date: 22-03-2019
categories:
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/twitter.svg">Twitter</image-artifact>'
---

# Twitter Cards

I'm not the best at Social Media... like a lot of people I'm giving Facebook the swerve completely these days.  However, I set up a Twitter account [@risk_first](https://twitter.com/risk_first) to post articles, and I've also been posting on LinkedIn and Hacker News.  

Turns out, there's quite a lot you can do to improve the presentation of posts on Twitter.  Now, when you post a Risk-First article on there, it'll use the Twitter Card to display a summary of the post, which looks like this:

<img width="585" alt="Screenshot 2019-03-22 at 10 11 38" src="https://user-images.githubusercontent.com/568673/54815950-00da9180-4c8b-11e9-8743-e0514482f5cc.png">

This was pretty hard to get right.  You have to have a 2:1 aspect ratio in the images, which can be a pain - if you don't, Twitter crops the image in usually a not-helpful way.  I used Kite9 (my diagramming software) to produce an image for each post. 

The [Risk-First Website](https://riskfirst.org) uses GitHub's built-in [Jekyll](https://jekyllrb.com) static-site generator, so I was able to generate the Twitter Cards using the Jekyll metadata on each article.    

Then, I use [Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/) to set the header information on the HTML page:

```html
<html>
  <head>
    ... 
    <meta name="description" content="Risk-First is about applying risk theory and practice to Software Development, building a pattern language of useful risk terms.">
    <meta property="og:description" content="Risk-First is about applying risk theory and practice to Software Development, building a pattern language of useful risk terms.">
    <link rel="canonical" href="https://riskfirst.org/">
    <meta property="og:url" content="https://riskfirst.org/">
    <meta property="og:site_name" content="Risk-First">
    <meta property="og:image" content="https://riskfirst.org/images/generated/titles/index.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@risk_first">
    <meta name="twitter:creator" content="@risk_first">
...
  </head>
....
```

Twitter (and LinkedIn) pick this stuff up and display the appropriate image.   I've also generated images for quotes in the articles:

<img width="591" alt="Screenshot 2019-03-22 at 10 20 10" src="https://user-images.githubusercontent.com/568673/54816437-1e5c2b00-4c8c-11e9-8981-6c6a64b404c2.png">

It's doubtful whether any of this will make a blind bit of difference - Twitter seems like it's basically an outrage-machine these days, but it was an interesting piece of work to get done.

Hope someone finds this useful!
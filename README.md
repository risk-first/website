[Wiki](https://github.com/risk-first/website/wiki)

[Diagrams](kite9)





## Installation

### 1. Install pandoc:

```
brew install pandoc
```


### 2.  Install Latex

http://www.tug.org/mactex/morepackages.html


### 3.  Setup The Template

https://github.com/Wandmalfarbe/pandoc-latex-template

### 4.  Preprocess The Markdown File

(Run the Java TextPreprocessor to generate the book output in website.wiki main directory)

Going to try and do it with something like this:

https://github.com/steindani/pandoc-include


### 5.  Do The Conversion

```
pandoc example.md -o example.pdf --from markdown --template eisvogel --listings
```
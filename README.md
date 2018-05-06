[Wiki](https://github.com/risk-first/website/wiki)

[Diagrams](kite9)





## Installation

### 1. Install pandoc:

```
brew install pandoc
```

### 2.  Install MacTex

http://www.tug.org/mactex/morepackages.html

##  Preprocess The Markdown File + Convert

(Run the Java TextPreprocessor to generate the book output in website.wiki main directory)

This is done with the `./convert.sh` script.

## Left To Do

- Write the front matter
- Update captions
- Figure out how to reference 3rd party sites correctly.    DONE
- Generate high-quality versions of the diagrams.
- Figure out diagram sizing.        DONE
- Bold for any internal references  DONE
- Better fixedWidth font            DONE

## Images:  

 - we need to be able to set minimum width and height in kite9 for text, images etc.  padding doesn't really
cut it.  
- Then, we can sort out the Communication Risk icon. 
- Also, we need to sort out text centering.  It should work.
- PNGs should be sizable based on the contents of the diagram element.
- It's annoying to keep having to define the risks over and over.  Ideally, we should improve the templating in Kite9.

## Links

- We need a link checker, that makes sure all the uses of certain phrases are links.  This needs to happen in the source document





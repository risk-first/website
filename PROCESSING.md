## The Content

Everything you really want to read is here:

[Wiki](https://github.com/risk-first/website/wiki)

The rest of this README is concerned with building the diagrams and PDF images.

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

- Write the front matter DONE
- Figure out how to reference 3rd party sites correctly.    DONE
- Generate high-quality versions of the diagrams.
- Figure out diagram sizing.        DONE
- Bold for any internal references  DONE
- Better fixedWidth font            DONE
- Update captions 
- 



## Images:  

- Then, we can sort out the Communication Risk icon.   DONE
- Also, we need to sort out text centering.  It should work.  DONE
- Namespaces are painful.  Nounproject keeps using new ones.  Maybe we should just add some code to remove them?  DONE

## Templating

- It's annoying to keep having to define the risks over and over.  Ideally, we should improve the templating in Kite9.
- I'm not entirely sure how much easier we can make it.  
- But yeah, this would be good, and it's related to editing.   Ideally, you should only be allowed to edit the top-level kite9 structure.
- Therefore, an _instance_ of a risk might be:

```xml
<template id="bob">
  <risk code="Bo" image="blah">
    Bob's Risk
  </risk>
</template>
```

## Kite9 Sizing

- One option is that we set SVG height and width using the diagram element.  That should definitely be an option.  DONE
- What about viewport, then?   DONE
- Also, what if you want to centre the diagram within a sea of whitespace?  This was an option before.  DONE
- We need to allow width and height as options in Kite9, so they should be allowed to apply to diagram elements.  DONE
- Then, you should "promote" them to the SVG document if it hasn't got any set already.   DONE

## Links

- We need a link checker, that makes sure all the uses of certain phrases are links.  This needs to happen in the source document



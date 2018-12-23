export CLASSPATH=../website/target/classes

java org.riskfirst.website.preprocessor.TextPreprocessor r1.md > r1-compiled.md

pandoc -o r1.epub r1-compiled.md --epub-metadata=book1/epub-metadata.yml --highlight-style tango

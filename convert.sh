

java -classpath ../website/target/classes preprocessor.TextPreprocessor Book.md > Full-Book.md

pandoc -o Book.pdf Full-Book.md --pdf-engine=xelatex
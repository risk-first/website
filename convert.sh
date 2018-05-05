

java -classpath ../website/target/classes preprocessor.TextPreprocessor r1.md > r1-compiled.md

pandoc -o r1.pdf r1-compiled.md --pdf-engine=xelatex
# pandoc -t json r1-compiled.md | pandoc -f json -o r1.pdf --pdf-engine=xelatex
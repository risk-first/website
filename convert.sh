export CLASSPATH=target/classes

java org.riskfirst.website.preprocessor.TextPreprocessor r1.md > r1-compiled.md

cd ../website.wiki

pandoc -o r1.latex r1-compiled.md --pdf-engine=xelatex --template ../r1books/risk-first-template.tex  --highlight-style tango
pandoc -o r1.pdf r1-compiled.md --pdf-engine=xelatex --template ../r1books/risk-first-template.tex  --highlight-style tango
#pandoc -t json r1-compiled.md | pandoc -f json -o r1.pdf --pdf-engine=xelatex --dpi=400

cd ../r1books
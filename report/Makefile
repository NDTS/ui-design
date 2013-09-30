TEX = pdflatex -interactive=nonstopmode

.PHONY: report.pdf

all: report.pdf

# CUSTOM BUILD RULES
%.tex: %.raw
	./raw2tex $< > $@

%.tex: %.dat
	./dat2tex $< > $@

# MAIN LATEX RULE

report.pdf: report.tex
	latexmk -pdf -pdflatex="$(TEX)" -use-make report.tex

clean:
	latexmk -CA

PDFLATEX = pdflatex -interactive=nonstopmode
PDF = report progress-i progress-ii
BST = report
TARGETS = $(patsubst %, %.bst, $(BST)) $(patsubst %, %.pdf, $(PDF))

.PHONY: all

all: $(TARGETS)

# CUSTOM BUILD RULES
%.tex: %.raw
	./raw2tex $< > $@

%.tex: %.dat
	./dat2tex $< > $@

# MAIN LATEX RULE
%.pdf: %.tex
	latexmk -pdf -pdflatex="$(PDFLATEX)" -use-make $<

%.bst: %.dbj
	latex $<

clean:
	latexmk -CA
	rm -f *.bbl
	rm -f *.bst

touch main.pdf
rm main.pdf

git clean -fX

pdflatex main.tex
pdflatex main.tex
biber main
pdflatex main.tex

clear

cp main.pdf ~/Desktop/$(date +'%Y-%m-%d')-SW508E19.pdf

echo 'Tadaa!'

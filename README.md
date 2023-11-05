# Unique Cover Letter Generator

This is a cover letter generator using reactpdf. Select text & design templates and it will generate cover letters in bulk. It will generate both the pdf cover letter & a txt since some companies require you to submit the cover letter in a form.

Good luck everyone!

PS: Currently there is one basic design (twoColBasic) & I am working one a more stylized version. if you would like to contribute your own design or example cover letter text feel free to open a PR

## Usage

1. Set up Enviroment

```bash
# install required dependencies
pnpm i
# Copy env
cp .env.example .env
# copy applications.tsv
cp applications.example.tsv applications.tsv
```

2. Create 1 or more cover letter templates (see ./src/content/example.txt)

3. Fill information
   For .env & applications.tsv

4. Generate PDFs

```bash
pnpm start
```

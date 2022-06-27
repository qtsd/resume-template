# Resume template

This is a template of my resume, made with html and sass.  
The resume can be exported as a PDF using puppeteer and chromium.

## Installation
```bash
git clone git@github.com:qtsd/resume-template.git
cd resume-template
npm install
```

## Usage

Launch the webpack dev server to see your resume :
```
npm run dev
```

## Customization

- Replace all the text wrapped double curly braces `{{text}}` with your informations.  
- Replace `assets/img/photo.jpg` by your photo.

## Export as PDF
When you are satisfied, you can export your resume as a PDF by running :

```
npm run print
```

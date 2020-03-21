---
title: 'How to remove all links in JavaScript'
abstract: 'Remove all links occurrencies concatenating two replace functions.'
quote: 'Whenever you give up something, you must replace it with something.'
quoteAuthor: 'Lou Holtz'
img: 'https://source.unsplash.com/KPaSCpklCZw'
imgAuthorName: 'Giulia Chiola'
modifiers: ['bottom-text']
date: 2020-03-21
tags:
  - js
  - regex
mainTag: js
---

If you need to remove all links occurrencies in a webpage:

- get the page content

```javascript
const mystring = `<a href="#">CR7</a> regala alla Juve il pari a sei minuti dal novantesimo, recuperando la rete segnata da Lukic nel primo tempo su errore di Pjanic. Il Toro manca l'aggancio al quarto posto <a href='#'>Champions</a>, e rimane sesta a -1 dalla Roma e a -2 dall'Atalanta. Per Ronaldo gol numero 601 in carriera coi club`
```

- replace all start anchor tags using RegEx

```javascript
.replace(/<a href="#">/gi, '')
```

- replace all end anchor tags using RegEx

```javascript
.replace(/<\/a>/gi, '')
```

- concatenate the two replace functions

```javascript
mystring.replace(/<a href="#">/gi, '').replace(/<\/a>/gi, ''));
```

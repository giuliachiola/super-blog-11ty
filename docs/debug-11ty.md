# Debug 11ty

Print all collections (= output in Nunjucks `{%- for pages in collections.all %}` )

```js
eleventyConfig.addCollection("debugMyContent", function(collectionApi) {
  const cleaned = collectionApi.getAll().map(coll => ({
    // edit here to print just some values
    path: coll.template.inputPath,
    title: coll.data.title,
  }))
  console.log('cleaned *** ', cleaned)
  return collectionApi.getAll()
});
```

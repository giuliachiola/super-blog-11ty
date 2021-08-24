# Images

## Shadow image using markdown-it

```
![alt text](image.jpg){.u-shadow}
```

## Set image max-width

- `s-img--medium-d` (max-width: 70% in desktop)
- `s-img--small-d` (max-width: 50% in desktop)
same as gifs.

## Responsive images

```html
<img srcset="photo-720w.jpg 720w,
             photo-976w.jpg 976w,
             photo-1024w.jpg 1024w,
             photo-2048w.jpg 2048w"
     sizes="(max-width: 767px) 720px, (max-width: 1023px) 976px,
            1024px"
     src="photo-1024w.jpg"
     alt="">
```

Example at 720w:
```
https://res.cloudinary.com/giuliachiola/image/upload/v1586637232/f_auto,w_720/super-blog/T8-issue-and-pr-templates/til-14-bug-report-01_fcauoy.jpg
```

IMPORTANT: do *not* indent HTML tag, because 11ty build breaking lines as `<br>`

❌ bad
```
<img src="/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices">
```

✅ good
```
<img src="/media/cc0-images/grapefruit-slice-332-332.jpg" alt="Grapefruit slice atop a pile of other slices">
```

Using `width`, `height`, `lazy`

```html
<img loading="lazy" src="" alt="" width="" height="">
```

Add classes

```html
![issue template 01](https://res.cloudinary.com/giuliachiola/image/upload/v1586637232/super-blog/T8-issue-and-pr-templates/til-14-bug-report-01_fcauoy.jpg){.c-article-section__img--shadow}
```

# Gifs

```html
<div class="s-giphy s-giphy--medium-d">
...
</div>
```

Use tag `<video>` to improve performance:

```html
<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/5gXYzsVBmjIsw/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/cat-cool-5gXYzsVBmjIsw">via GIPHY</a></p>
</div>
```

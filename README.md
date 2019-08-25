# Import-HTML

Import HTML is a small JS library that let's you easily import html files directly into your html codes. _it's not that complicated!_ 😩

### Usage

#### Step 0
 
Download this project as zip file from the top right of your screen. 

##### Step 1

Use the custom html tag ```<import-html></import-html>``` as shown below to import `html` using the `data-src` attr. 

### Exmaple

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Import HTML</title>
</head>
<body>
    <import-html data-src="header.html"></import-html>
    <import-html data-src="body.html"></import-html>
    <import-html data-src="./layout/sidebar.html"></import-html>
    <script src="js/import-html.js"></script>
</body>
</html>
```

That simple. 🙌🙌

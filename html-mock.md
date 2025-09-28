# 📚 Complete HTML Interview Guide

**Master HTML concepts from basics to advanced with interview-focused explanations, examples, and practice questions.**

---

## 📋 Table of Contents
1. [Structure and Basics](#1-structure-and-basics)
2. [DOCTYPE, Head vs Body](#2-doctype-head-vs-body)
3. [Semantic Tags](#3-semantic-tags)
4. [HTML Elements vs Tags](#4-html-elements-vs-tags)
5. [Block vs Inline Elements](#5-block-vs-inline-elements)
6. [HTML Forms and Input Types](#6-html-forms-and-input-types)
7. [Media Tags](#7-media-tags)
8. [HTML Lists](#8-html-lists)
9. [HTML Tables](#9-html-tables)
10. [Meta Tags](#10-meta-tags)
11. [iFrames and Embedded Content](#11-iframes-and-embedded-content)
12. [ARIA Accessibility](#12-aria-accessibility)
13. [HTML Optimization](#13-html-optimization)
14. [Interview Questions](#14-interview-questions)

---

## 1. Structure and Basics

### What is HTML?
**HTML (HyperText Markup Language)** is the standard markup language for creating web pages. It describes the structure of web content using elements.

### Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <h1>Main Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Key Components:
- **Document Type Declaration** (`<!DOCTYPE html>`)
- **Root Element** (`<html>`)
- **Document Head** (`<head>`)
- **Document Body** (`<body>`)

**Interview Tip:** Always explain that HTML provides structure, not styling (that's CSS's job).

---

## 2. DOCTYPE, Head vs Body

### DOCTYPE Declaration

**What:** Tells the browser which version of HTML to use.  
**Why:** Ensures proper rendering and prevents quirks mode.  
**Modern:** `<!DOCTYPE html>` for HTML5

```html
<!DOCTYPE html> <!-- HTML5 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"> <!-- HTML 4.01 -->
```

**Interview Question:** *"What happens if you don't include DOCTYPE?"*  
**Answer:** Browser enters "quirks mode" - inconsistent rendering across browsers.

### Head vs Body

| **HEAD** | **BODY** |
|----------|----------|
| Contains metadata | Contains visible content |
| Not displayed to user | Displayed to user |
| `<title>`, `<meta>`, `<link>`, `<script>` | `<h1>`, `<p>`, `<div>`, etc. |
| SEO and browser instructions | User interface elements |

```html
<head>
    <!-- Metadata - not visible -->
    <title>Page Title</title>
    <meta name="description" content="Page description">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Visible content -->
    <h1>Welcome to My Website</h1>
    <p>This content is visible to users.</p>
</body>
```

---

## 3. Semantic Tags

### What are Semantic Tags?
Tags that clearly describe their meaning to both browser and developer.

### HTML5 Semantic Elements

```html
<!DOCTYPE html>
<html>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h1>Article Title</h1>
                <time datetime="2024-01-15">January 15, 2024</time>
            </header>
            <section>
                <h2>Section Heading</h2>
                <p>Article content...</p>
            </section>
        </article>
        
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Company Name</p>
    </footer>
</body>
</html>
```

### Key Semantic Tags:

| Tag | Purpose | Example Use |
|-----|---------|-------------|
| `<header>` | Page/section header | Logo, navigation |
| `<nav>` | Navigation links | Menu, breadcrumbs |
| `<main>` | Main content area | Primary content |
| `<article>` | Independent content | Blog post, news article |
| `<section>` | Thematic grouping | Chapters, tabs |
| `<aside>` | Sidebar content | Related links, ads |
| `<footer>` | Page/section footer | Copyright, contact info |
| `<figure>` | Self-contained content | Images with captions |
| `<figcaption>` | Caption for figure | Image description |
| `<time>` | Date/time | `<time datetime="2024-01-15">Jan 15</time>` |

### Benefits:
1. **SEO** - Search engines understand content better
2. **Accessibility** - Screen readers navigate easier
3. **Maintainability** - Code is more readable
4. **Future-proof** - Better browser support

---

## 4. HTML Elements vs Tags

### Understanding the Difference

**Tag:** The markup itself (opening/closing brackets)  
**Element:** The complete structure (opening tag + content + closing tag)  
**Attribute:** Additional information about elements

```html
<!-- TAG: <p> and </p> -->
<!-- ELEMENT: Everything from <p> to </p> -->
<!-- ATTRIBUTE: class="intro" -->
<p class="intro">This is a paragraph element</p>
```

### Types of Elements:

#### Container Elements (Most Common)
```html
<div>Content goes here</div>
<p>Paragraph content</p>
<h1>Heading content</h1>
```

#### Empty/Void Elements (Self-closing)
```html
<img src="image.jpg" alt="Description">
<br>
<hr>
<input type="text">
<meta charset="UTF-8">
```

### Element Anatomy:
```html
<tagname attribute="value">Content</tagname>
```

**Interview Tip:** Emphasize that elements can be nested but must be properly closed in reverse order.

---

## 5. Block vs Inline Elements

### Block-Level Elements

**Characteristics:**
- Take full width available
- Start on new line
- Can contain other block and inline elements
- Respect width/height properties

```html
<!-- Block Elements -->
<div>This is a div block</div>
<p>This is a paragraph block</p>
<h1>This is a heading block</h1>
<section>This is a section block</section>
```

**Common Block Elements:**
`<div>`, `<p>`, `<h1-h6>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`

### Inline Elements

**Characteristics:**
- Take only necessary width
- Don't break line flow
- Cannot contain block elements
- Don't respect width/height (except replaced elements)

```html
<!-- Inline Elements -->
<span>This is inline</span> <a href="#">This is also inline</a>
<strong>Bold text</strong> continues on same line.
```

**Common Inline Elements:**
`<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<button>`, `<code>`, `<small>`, `<sub>`, `<sup>`

### Inline-Block Elements

**Best of both worlds:**
- Flows with text like inline
- Accepts width/height like block

```html
<img src="image.jpg" style="width: 100px; height: 100px;">
<input type="text" style="width: 200px;">
```

### CSS Display Property
```css
/* Convert block to inline */
p { display: inline; }

/* Convert inline to block */
span { display: block; }

/* Make inline-block */
img { display: inline-block; }
```

**Interview Question:** *"Can you put a `<div>` inside a `<span>`?"*  
**Answer:** Not recommended in HTML4/XHTML, but HTML5 allows it with proper CSS display properties.

---

## 6. HTML Forms and Input Types

### Basic Form Structure

```html
<form action="/submit" method="POST" enctype="multipart/form-data">
    <fieldset>
        <legend>Personal Information</legend>
        
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <input type="submit" value="Submit">
    </fieldset>
</form>
```

### Form Attributes

| Attribute | Purpose | Values |
|-----------|---------|---------|
| `action` | Where to send data | URL or file path |
| `method` | How to send data | `GET`, `POST` |
| `enctype` | Encoding type | `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` |
| `target` | Where to display response | `_self`, `_blank`, `_parent`, `_top` |
| `novalidate` | Skip HTML5 validation | Boolean |

### HTTP Methods

#### GET Method
```html
<form action="/search" method="GET">
    <input type="text" name="query">
    <input type="submit" value="Search">
</form>
```
- **Use for:** Searching, filtering, retrieving data
- **Data location:** URL parameters
- **Security:** Less secure (visible in URL)
- **Size limit:** ~2048 characters

#### POST Method
```html
<form action="/login" method="POST">
    <input type="email" name="email">
    <input type="password" name="password">
    <input type="submit" value="Login">
</form>
```
- **Use for:** Sending sensitive data, file uploads
- **Data location:** Request body
- **Security:** More secure (not visible in URL)
- **Size limit:** No limit

### Input Types

#### Text Inputs
```html
<!-- Basic text -->
<input type="text" placeholder="Enter text">

<!-- Password -->
<input type="password" placeholder="Enter password">

<!-- Email (with validation) -->
<input type="email" placeholder="user@example.com">

<!-- URL (with validation) -->
<input type="url" placeholder="https://example.com">

<!-- Phone -->
<input type="tel" placeholder="+1-555-555-5555">

<!-- Search -->
<input type="search" placeholder="Search...">
```

#### Number and Range Inputs
```html
<!-- Number -->
<input type="number" min="1" max="100" step="1" value="50">

<!-- Range slider -->
<input type="range" min="0" max="100" value="25">

<!-- Date -->
<input type="date" value="2024-01-15">

<!-- Time -->
<input type="time" value="14:30">

<!-- DateTime local -->
<input type="datetime-local" value="2024-01-15T14:30">
```

#### Selection Inputs
```html
<!-- Radio buttons (single choice) -->
<input type="radio" id="small" name="size" value="small">
<label for="small">Small</label>

<input type="radio" id="medium" name="size" value="medium">
<label for="medium">Medium</label>

<!-- Checkboxes (multiple choice) -->
<input type="checkbox" id="newsletter" name="preferences" value="newsletter">
<label for="newsletter">Subscribe to newsletter</label>
```

#### File and Hidden Inputs
```html
<!-- File upload -->
<input type="file" accept=".jpg,.png,.pdf" multiple>

<!-- Hidden field -->
<input type="hidden" name="csrf_token" value="abc123">

<!-- Color picker -->
<input type="color" value="#ff0000">
```

### Form Elements

#### Select Dropdown
```html
<select name="country" required>
    <option value="">Choose country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
</select>
```

#### Textarea
```html
<textarea name="message" rows="4" cols="50" placeholder="Enter your message">
</textarea>
```

#### Button Types
```html
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
<button type="button" onclick="doSomething()">Custom Action</button>
```

### Form Validation

#### HTML5 Built-in Validation
```html
<form>
    <input type="text" required minlength="3" maxlength="20">
    <input type="email" required>
    <input type="number" min="18" max="100">
    <input type="url" pattern="https://.*" title="Must start with https://">
    <input type="submit" value="Submit">
</form>
```

#### Custom Validation Messages
```html
<input type="email" 
       required 
       oninvalid="this.setCustomValidity('Please enter valid email')"
       oninput="this.setCustomValidity('')">
```

---

## 7. Media Tags

### Images

#### Basic Image
```html
<img src="image.jpg" 
     alt="Description of image" 
     width="300" 
     height="200"
     loading="lazy">
```

#### Responsive Images
```html
<!-- Different images for different screen sizes -->
<picture>
    <source media="(max-width: 768px)" srcset="mobile.jpg">
    <source media="(max-width: 1200px)" srcset="tablet.jpg">
    <img src="desktop.jpg" alt="Responsive image">
</picture>

<!-- Different resolutions for same image -->
<img src="image-400.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="High-DPI image">
```

### Audio

```html
<audio controls preload="metadata">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.wav" type="audio/wav">
    Your browser does not support the audio element.
</audio>
```

#### Audio Attributes:
- `controls` - Show play/pause controls
- `autoplay` - Start playing automatically (often blocked)
- `loop` - Repeat audio
- `muted` - Start muted
- `preload` - `none`, `metadata`, `auto`

### Video

```html
<video width="640" height="360" controls poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <source src="video.ogg" type="video/ogg">
    <track src="captions.vtt" kind="captions" srclang="en" label="English">
    Your browser does not support the video tag.
</video>
```

#### Video Attributes:
- `poster` - Image shown before video plays
- `preload` - How much to preload
- `autoplay` - Auto-start (needs `muted` for most browsers)
- `loop` - Repeat video
- `muted` - Start without sound

### Canvas and SVG

#### Canvas (Programmatic Graphics)
```html
<canvas id="myCanvas" width="400" height="200">
    Your browser does not support canvas.
</canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
</script>
```

#### SVG (Vector Graphics)
```html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="50" fill="blue" />
    <rect x="50" y="150" width="100" height="30" fill="green" />
</svg>
```

---

## 8. HTML Lists

### Unordered Lists (Bullets)

```html
<ul>
    <li>First item</li>
    <li>Second item
        <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
        </ul>
    </li>
    <li>Third item</li>
</ul>
```

### Ordered Lists (Numbers)

```html
<ol type="1" start="1">
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

#### Order Types:
- `type="1"` - Numbers (1, 2, 3)
- `type="A"` - Uppercase letters (A, B, C)
- `type="a"` - Lowercase letters (a, b, c)
- `type="I"` - Uppercase Roman (I, II, III)
- `type="i"` - Lowercase Roman (i, ii, iii)

### Description Lists

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
    
    <dt>JavaScript</dt>
    <dd>Programming language for web interactivity</dd>
</dl>
```

### List Styling with CSS

```css
ul {
    list-style-type: none; /* Remove bullets */
    list-style-image: url('custom-bullet.png');
    list-style-position: inside; /* or outside */
}

ol {
    counter-reset: custom-counter;
}

ol li {
    counter-increment: custom-counter;
}

ol li::before {
    content: counter(custom-counter) ". ";
    font-weight: bold;
}
```

---

## 9. HTML Tables

### Basic Table Structure

```html
<table>
    <caption>Employee Information</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>Engineering</td>
            <td>$75,000</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>Marketing</td>
            <td>$65,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Total</td>
            <td>$140,000</td>
        </tr>
    </tfoot>
</table>
```

### Table Elements:

| Element | Purpose |
|---------|---------|
| `<table>` | Container for entire table |
| `<caption>` | Table title/description |
| `<thead>` | Table header section |
| `<tbody>` | Table body section |
| `<tfoot>` | Table footer section |
| `<tr>` | Table row |
| `<th>` | Header cell |
| `<td>` | Data cell |

### Advanced Table Features

#### Spanning Cells
```html
<table>
    <tr>
        <th colspan="2">Q1 Results</th>
        <th colspan="2">Q2 Results</th>
    </tr>
    <tr>
        <th>Revenue</th>
        <th>Profit</th>
        <th>Revenue</th>
        <th>Profit</th>
    </tr>
    <tr>
        <td rowspan="2">Product A</td>
        <td>$100k</td>
        <td>$20k</td>
        <td>$110k</td>
    </tr>
</table>
```

#### Accessible Tables
```html
<table>
    <caption>Sales Data by Quarter</caption>
    <thead>
        <tr>
            <th scope="col" id="product">Product</th>
            <th scope="col" id="q1">Q1 Sales</th>
            <th scope="col" id="q2">Q2 Sales</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row" headers="product">Widget A</th>
            <td headers="product q1">$50,000</td>
            <td headers="product q2">$55,000</td>
        </tr>
    </tbody>
</table>
```

### Table Styling Best Practices

```css
table {
    border-collapse: collapse; /* Remove double borders */
    width: 100%;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9; /* Zebra striping */
}
```

**Interview Tip:** Tables should only be used for tabular data, not for layout. CSS Grid/Flexbox handle layout better.

---

## 10. Meta Tags

### Essential Meta Tags

```html
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page description for search engines -->
    <meta name="description" content="Learn HTML fundamentals with examples and best practices">
    
    <!-- Keywords (less important now) -->
    <meta name="keywords" content="HTML, web development, tutorial">
    
    <!-- Author -->
    <meta name="author" content="Your Name">
    
    <!-- Robots instructions -->
    <meta name="robots" content="index, follow">
    
    <!-- Page language -->
    <meta http-equiv="content-language" content="en-US">
</head>
```

### Social Media Meta Tags (Open Graph)

```html
<!-- Facebook Open Graph -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Site Name">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://example.com/image.jpg">
<meta name="twitter:site" content="@username">
```

### HTTP-Equiv Meta Tags

```html
<!-- Refresh page -->
<meta http-equiv="refresh" content="30">

<!-- Redirect after 5 seconds -->
<meta http-equiv="refresh" content="5;url=https://example.com">

<!-- Cache control -->
<meta http-equiv="cache-control" content="no-cache">

<!-- Expires -->
<meta http-equiv="expires" content="Wed, 26 Feb 1997 08:21:57 GMT">

<!-- Content Security Policy -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

### Mobile-Specific Meta Tags

```html
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="App Name">

<!-- Android -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#000000">

<!-- Windows Phone -->
<meta name="msapplication-TileColor" content="#000000">
<meta name="msapplication-TileImage" content="icon-144.png">
```

---

## 11. iFrames and Embedded Content

### Basic iFrame

```html
<iframe src="https://example.com" 
        width="600" 
        height="400"
        title="External Website"
        loading="lazy">
    <p>Your browser does not support iframes.</p>
</iframe>
```

### iFrame Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `src` | URL to embed | `src="https://example.com"` |
| `width/height` | Dimensions | `width="800" height="600"` |
| `title` | Accessibility description | `title="Video player"` |
| `loading` | Load behavior | `loading="lazy"` |
| `sandbox` | Security restrictions | `sandbox="allow-scripts"` |
| `allow` | Feature permissions | `allow="camera; microphone"` |
| `referrerpolicy` | Referrer information | `referrerpolicy="no-referrer"` |

### Security with iFrames

```html
<!-- Restricted sandbox -->
<iframe src="untrusted-content.html"
        sandbox="allow-scripts allow-same-origin"
        title="Sandboxed content">
</iframe>

<!-- Feature policy -->
<iframe src="video-player.html"
        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture"
        title="Video player">
</iframe>
```

### Common Embedded Content

#### YouTube Videos
```html
<iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
</iframe>
```

#### Google Maps
```html
<iframe src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### Object and Embed Elements

#### Object Element (Generic)
```html
<object data="document.pdf" 
        type="application/pdf"
        width="600"
        height="400">
    <p>PDF cannot be displayed. <a href="document.pdf">Download PDF</a></p>
</object>
```

#### Embed Element (Plugins)
```html
<embed src="flash-content.swf"
       type="application/x-shockwave-flash"
       width="400"
       height="300">
```

**Interview Note:** `<object>` is preferred over `<embed>` for standards compliance.

---

## 12. ARIA Accessibility

### What is ARIA?

**ARIA (Accessible Rich Internet Applications)** provides semantic information about elements to assistive technologies like screen readers.

### Core ARIA Concepts

#### 1. Roles
Defines what an element is or does.

```html
<div role="button" tabindex="0">Custom Button</div>
<nav role="navigation">
<main role="main">
<aside role="complementary">
<div role="alert">Error message</div>
```

#### 2. Properties
Describes element properties that don't change.

```html
<input type="text" aria-label="Search products">
<button aria-describedby="help-text">Submit</button>
<p id="help-text">Click to submit the form</p>
```

#### 3. States
Describes current conditions that can change.

```html
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" aria-hidden="true">Menu items...</div>

<input type="checkbox" aria-checked="false">
<div aria-live="polite">Status updates appear here</div>
```

### Essential ARIA Attributes

#### Labels and Descriptions
```html
<!-- Accessible name -->
<button aria-label="Close dialog">×</button>

<!-- Label from another element -->
<h2 id="billing">Billing Address</h2>
<fieldset aria-labelledby="billing">
    <!-- form fields -->
</fieldset>

<!-- Additional description -->
<input type="password" 
       aria-describedby="pwd-help"
       placeholder="Password">
<div id="pwd-help">Must be at least 8 characters</div>
```

#### Interactive Elements
```html
<!-- Expandable content -->
<button aria-expanded="false" 
        aria-controls="details"
        onclick="toggleDetails()">
    Show Details
</button>
<div id="details" aria-hidden="true">
    Additional information...
</div>

<!-- Tab interface -->
<div role="tablist">
    <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
    <button role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
</div>
<div id="panel1" role="tabpanel">Content 1</div>
<div id="panel2" role="tabpanel" aria-hidden="true">Content 2</div>
```

#### Live Regions
```html
<!-- Polite announcements -->
<div aria-live="polite" id="status"></div>

<!-- Urgent announcements -->
<div aria-live="assertive" id="errors"></div>

<!-- Atomic updates -->
<div aria-live="polite" aria-atomic="true">
    <span>Score: </span><span>95</span>
</div>
```

### ARIA Landmarks

```html
<header role="banner">
    <!-- Site header -->
</header>

<nav role="navigation" aria-label="Main navigation">
    <!-- Primary navigation -->
</nav>

<main role="main">
    <!-- Main content -->
</main>

<aside role="complementary">
    <!-- Sidebar -->
</aside>

<footer role="contentinfo">
    <!-- Site footer -->
</footer>

<form role="search">
    <!-- Search form -->
</form>
```

### ARIA Best Practices

#### Do's:
- Use semantic HTML first, ARIA second
- Test with screen readers
- Keep labels concise but descriptive
- Update states dynamically with JavaScript

#### Don'ts:
- Don't override semantic meaning unnecessarily
- Don't use ARIA if HTML provides the functionality
- Don't make everything focusable

```html
<!-- BAD: Unnecessary ARIA -->
<button role="button" aria-label="button">Click me</button>

<!-- GOOD: Semantic HTML -->
<button>Click me</button>

<!-- GOOD: ARIA enhancing semantic HTML -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
```

---

## 13. HTML Optimization

### 1. Lazy Loading

#### Images
```html
<!-- Native lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Intersection Observer API for custom lazy loading -->
<img src="placeholder.jpg" 
     data-src="actual-image.jpg" 
     alt="Description" 
     class="lazy-load">

<script>
const lazyImages = document.querySelectorAll('.lazy-load');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy-load');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
</script>
```

#### iFrames and Videos
```html
<!-- Lazy load iframes -->
<iframe src="about:blank" 
        data-src="https://youtube.com/embed/VIDEO_ID"
        loading="lazy">
</iframe>

<!-- Lazy load videos -->
<video controls preload="none" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
</video>
```

### 2. Resource Preloading

#### Critical Resources
```html
<head>
    <!-- Preload critical CSS -->
    <link rel="preload" href="critical.css" as="style">
    
    <!-- Preload critical fonts -->
    <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
    
    <!-- Preload hero image -->
    <link rel="preload" href="hero-image.jpg" as="image">
    
    <!-- Preload critical JavaScript -->
    <link rel="preload" href="app.js" as="script">
</head>
```

#### Resource Hints
```html
<!-- DNS prefetch for external domains -->
<link rel="dns-prefetch" href="//cdn.example.com">
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- Preconnect for critical third-party origins -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Prefetch resources for likely next page -->
<link rel="prefetch" href="next-page.html">
<link rel="prefetch" href="likely-image.jpg">

<!-- Module preload for ES modules -->
<link rel="modulepreload" href="modules/app.js">
```

### 3. Data Attributes

#### Custom Data Storage
```html
<!-- Product information -->
<div class="product" 
     data-product-id="12345"
     data-category="electronics"
     data-price="299.99"
     data-in-stock="true">
    <h3>Smartphone</h3>
</div>

<!-- Configuration data -->
<div id="map" 
     data-lat="40.7128"
     data-lng="-74.0060"
     data-zoom="10">
</div>

<!-- State management -->
<button data-action="toggle"
        data-target="sidebar"
        data-animation="slide">
    Toggle Sidebar
</button>
```

#### JavaScript Access
```javascript
const product = document.querySelector('.product');

// Reading data attributes
console.log(product.dataset.productId);    // "12345"
console.log(product.dataset.category);     // "electronics"
console.log(product.dataset.inStock);      // "true"

// Setting data attributes
product.dataset.featured = "true";
product.dataset.salePrice = "249.99";

// CSS access
product.style.setProperty('--price', product.dataset.price);
```

#### CSS Integration
```css
/* Style based on data attributes */
.product[data-in-stock="false"] {
    opacity: 0.5;
}

.product[data-category="electronics"]::before {
    content: "🔌 " attr(data-category);
}

/* Use data as CSS custom properties */
.product {
    --product-price: attr(data-price);
}
```

### 4. Semantic HTML Best Practices

#### Proper Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meaningful Page Title</title>
    <meta name="description" content="Concise page description">
</head>
<body>
    <a href="#main" class="skip-link">Skip to main content</a>
    
    <header>
        <nav aria-label="Primary navigation">
            <!-- Main navigation -->
        </nav>
    </header>
    
    <main id="main">
        <h1>Page Title</h1>
        <!-- Main content -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

#### Heading Hierarchy
```html
<!-- GOOD: Proper hierarchy -->
<h1>Main Article Title</h1>
    <h2>Section 1</h2>
        <h3>Subsection 1.1</h3>
        <h3>Subsection 1.2</h3>
    <h2>Section 2</h2>
        <h3>Subsection 2.1</h3>

<!-- BAD: Skipped levels -->
<h1>Title</h1>
<h4>Should be h2</h4>
```

### 5. Performance Optimization

#### Image Optimization
```html
<!-- Responsive images -->
<picture>
    <source media="(max-width: 480px)" 
            srcset="small.webp" type="image/webp">
    <source media="(max-width: 480px)" 
            srcset="small.jpg" type="image/jpeg">
    <source srcset="large.webp" type="image/webp">
    <img src="large.jpg" alt="Optimized image" loading="lazy">
</picture>

<!-- High DPI images -->
<img srcset="image-1x.jpg 1x, image-2x.jpg 2x" 
     src="image-1x.jpg" 
     alt="High DPI image">
```

#### Critical CSS Inlining
```html
<head>
    <style>
        /* Critical above-the-fold CSS inlined */
        body { margin: 0; font-family: Arial, sans-serif; }
        .header { background: #333; color: white; padding: 1rem; }
    </style>
    
    <!-- Non-critical CSS loaded asynchronously -->
    <link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="non-critical.css"></noscript>
</head>
```

#### Script Loading Optimization
```html
<!-- Defer non-critical scripts -->
<script src="analytics.js" defer></script>

<!-- Async for independent scripts -->
<script src="social-widgets.js" async></script>

<!-- Module scripts (modern browsers) -->
<script type="module" src="app.js"></script>
<script nomodule src="app-legacy.js"></script>
```

### 6. Additional Optimization Techniques

#### Minification Example
```html
<!-- Before minification -->
<div class="container">
    <h1>Welcome to Our Site</h1>
    <p>This is a paragraph with some content.</p>
</div>

<!-- After minification -->
<div class=container><h1>Welcome to Our Site</h1><p>This is a paragraph with some content.</p></div>
```

#### Compression Headers
```html
<!-- Enable compression with meta tags -->
<meta http-equiv="Content-Encoding" content="gzip">

<!-- Or configure server-side -->
<!-- 
Server configuration for compression:
- Enable gzip/brotli compression
- Set appropriate cache headers
- Use CDN for static assets
-->
```

#### Service Worker for Caching
```html
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered'))
        .catch(err => console.log('SW registration failed'));
}
</script>
```

---

## 14. Interview Questions

### Basic Level Questions

**Q1: What is the difference between HTML and XHTML?**
**A:** XHTML is stricter version of HTML that follows XML rules:
- All tags must be properly closed
- All tags must be lowercase
- All attributes must have values in quotes
- Documents must be well-formed

**Q2: What does DOCTYPE declaration do?**
**A:** It tells the browser which version of HTML to use for rendering. Without it, browser enters "quirks mode" which can cause inconsistent rendering.

**Q3: What's the difference between `<div>` and `<span>`?**
**A:** 
- `<div>` is block-level (takes full width, starts new line)
- `<span>` is inline (takes only necessary width, flows with text)

**Q4: When would you use `<section>` vs `<article>`?**
**A:**
- `<article>` - Independent, self-contained content (blog post, news article)
- `<section>` - Thematic grouping within a document or article

### Intermediate Level Questions

**Q5: How do you make a website accessible?**
**A:**
- Use semantic HTML elements
- Provide alt text for images
- Ensure proper heading hierarchy
- Use ARIA attributes when needed
- Test with keyboard navigation
- Ensure sufficient color contrast

**Q6: What are data attributes and how do you use them?**
**A:** Custom attributes starting with `data-` that store extra information:
```html
<div data-user-id="123" data-role="admin">User</div>
```
Access via JavaScript: `element.dataset.userId`

**Q7: Explain the difference between GET and POST methods.**
**A:**
- **GET**: Retrieves data, visible in URL, cached, limited size
- **POST**: Sends data, not visible in URL, not cached, no size limit

### Advanced Level Questions

**Q8: How would you optimize a webpage for performance?**
**A:**
- Lazy load images and iframes
- Preload critical resources
- Use responsive images with srcset
- Minify HTML/CSS/JS
- Enable compression
- Use CDN for static assets
- Implement critical CSS inlining

**Q9: What is the purpose of ARIA and when would you use it?**
**A:** ARIA provides semantic information to assistive technologies. Use when:
- HTML doesn't provide enough semantic meaning
- Creating custom widgets
- Describing dynamic content changes
- Providing additional context for screen readers

**Q10: How do you handle browser compatibility issues?**
**A:**
- Use feature detection (Modernizr)
- Provide fallbacks for unsupported features
- Use progressive enhancement
- Test across different browsers
- Use polyfills for missing features
- Validate HTML for standards compliance

### Practical Coding Questions

**Q11: Create a responsive navigation menu using only HTML.**
```html
<nav role="navigation" aria-label="Main menu">
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="menu-icon">
        <span>Menu</span>
    </label>
    <ul class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

**Q12: Create an accessible form with validation.**
```html
<form novalidate>
    <fieldset>
        <legend>Contact Information</legend>
        
        <label for="name">Name (required)</label>
        <input type="text" id="name" name="name" 
               required aria-describedby="name-error">
        <div id="name-error" role="alert" aria-live="polite"></div>
        
        <label for="email">Email (required)</label>
        <input type="email" id="email" name="email" 
               required aria-describedby="email-error">
        <div id="email-error" role="alert" aria-live="polite"></div>
        
        <button type="submit">Submit</button>
    </fieldset>
</form>
```

### Performance and SEO Questions

**Q13: What meta tags are essential for SEO?**
**A:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page description (150-160 chars)">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="image-url">
```

**Q14: How do you implement lazy loading?**
**A:** Multiple approaches:
1. Native: `<img loading="lazy">`
2. Intersection Observer API for custom implementation
3. Libraries like LazyLoad.js

**Q15: What's the difference between `preload`, `prefetch`, and `preconnect`?**
**A:**
- **preload**: Load critical resources immediately
- **prefetch**: Load resources likely needed for next navigation
- **preconnect**: Establish connection to external domains early

---

## 🎯 Additional Topics for Advanced Preparation

### Web Components
```html
<!-- Custom Elements -->
<custom-button type="primary">Click me</custom-button>

<!-- Shadow DOM encapsulation -->
<template id="custom-button-template">
    <style>
        button { background: var(--primary-color); }
    </style>
    <button><slot></slot></button>
</template>
```

### Progressive Web Apps (PWA)
```html
<!-- Web App Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Service Worker registration -->
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
</script>

<!-- iOS specific -->
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" href="/icon-192.png">
```

### Schema Markup (SEO)
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Article Title",
    "author": {
        "@type": "Person",
        "name": "Author Name"
    },
    "datePublished": "2024-01-15"
}
</script>
```

### Critical Rendering Path
```html
<!-- Optimize critical rendering path -->
<style>
    /* Critical CSS inlined */
</style>

<script>
    // Load non-critical CSS asynchronously
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'non-critical.css';
    document.head.appendChild(link);
</script>
```

---

## 📚 Study Checklist

### Before Your Interview:

✅ **Master the Basics**
- [ ] HTML structure and syntax
- [ ] Semantic elements and their purposes
- [ ] Block vs inline elements
- [ ] Form elements and validation

✅ **Understand Advanced Concepts**
- [ ] ARIA accessibility principles
- [ ] Performance optimization techniques
- [ ] SEO best practices
- [ ] Cross-browser compatibility

✅ **Practice Coding**
- [ ] Build forms with validation
- [ ] Create responsive layouts
- [ ] Implement accessibility features
- [ ] Optimize for performance

✅ **Know the Interview Favorites**
- [ ] Semantic HTML benefits
- [ ] Accessibility importance
- [ ] Performance optimization strategies
- [ ] Modern HTML5 features

---

## 🚀 Final Tips

1. **Always start with semantic HTML** - it provides the foundation
2. **Think accessibility first** - it benefits everyone
3. **Performance matters** - optimize from the beginning
4. **Stay updated** - HTML is constantly evolving
5. **Practice regularly** - build real projects to reinforce learning

**Remember:** Great HTML is not just about making things work, but making them work well for everyone, including users with disabilities, slow internet connections, and different devices.

---

**Good luck with your interview! 🎯**
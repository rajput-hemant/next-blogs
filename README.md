<div align=center>

![][views] ![][stars] ![][forks] ![][issues] ![][license] ![][repo-size]

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/images/nextjs-light.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/images/nextjs-dark.svg">
  <img alt="next-blogs">
</picture>

# Next Blogs

## Directory Structure

</div>

<details >
  <summary align=center>

#### Click to Expand

  </Summary>

```
app
|
|-- components
|   |-- contact
|   |   `-- contact-form.tsx
|   |
|   |-- homepage
|   |   |-- featured-posts.tsx
|   |   `-- hero.tsx
|   |
|   |-- layout
|   |   |-- layout.tsx
|   |   |-- logo.tsx
|   |   `-- main-navigation.tsx
|   |-- posts
|   |   |-- all-posts.tsx
|   |   |-- post-content.tsx
|   |   |-- post-header.tsx
|   |   |-- post-item.tsx
|   |   `-- posts-grid.tsx
|   |
|   `-- ui
|       `-- notification.tsx
|-- lib
|   `-- post-utils.ts
|
|-- pages
|   |-- api
|   |   `-- contact.ts
|   |-- posts
|   |   |-- [slug].tsx
|   |   `-- index.tsx
|   |-- _app.tsx
|   |-- _document.tsx
|   |-- contact.tsx
|   `-- index.tsx
|
|-- posts
|   |-- getting-started-with-nextjs.md
|   `-- mastering-javascript.md
|
|-- public
|   |-- images
|   |    |-- posts
|   |    |   |-- getting-started-with-nextjs
|   |    |   |   |-- getting-started-nextjs.png
|   |    |   |   `-- nextjs-file-based-routing.png
|   |    |   |
|   |    |   `-- mastering-javascript
|   |    |       `-- mastering-js-thumb.png
|   |    |
|   |    |-- nextjs-dark.svg
|   |    |-- nextjs-light.svg
|   |    `-- profile.png
|   |
|   `-- favicon.ico
|
`-- styles
    `-- globals.css
```

</details>

<div align = center>

## Building from Source

</div>

- Fetch latest source code from master branch.

```console
rajput-hemant@arch:~$ git clone https://github.com/rajput-hemant/next-blogs
rajput-hemant@arch:~$ cd next-blogs
```

- Install dependencies and run the development server.

```console
rajput-hemant@arch:~/next-blogs$ npm install
rajput-hemant@arch:~/next-blogs$ npm run dev
```

<div align = center>

#### Course: [Next.js & React - The Complete Guide (incl. Two Paths!)][course]

#### Instructor: [Academind][academind] by [Maximilian Schwarzmüller][max]

## Contributors:

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=next-blogs&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/rajput-hemant/next-blogs
[issues]: https://img.shields.io/github/issues-raw/rajput-hemant/next-blogs
[license]: https://img.shields.io/github/license/rajput-hemant/next-blogs
[forks]: https://img.shields.io/github/forks/rajput-hemant/next-blogs?style=flat
[stars]: https://img.shields.io/github/stars/rajput-hemant/next-blogs
[contributors]: https://contrib.rocks/image?repo=rajput-hemant/next-blogs&max=500
[contributors-graph]: https://github.com/rajput-hemant/next-blogs/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=rajput-hemant%2Fnext-blogs

<!-----------------------------------{ Links }---------------------------------->

[course]: https://www.udemy.com/course/nextjs-react-the-complete-guide/
[academind]: https://www.udemy.com/user/academind/
[max]: https://www.udemy.com/user/maximilian-schwarzmuller/

# Terribly-Tiny-Tales
## Project Overview

### Hosted Website Link
https://terribly-tiny-tales-alpha.vercel.app/

### Directory Structure

#### Public Folder

- **index.html:** The main HTML file.
- **All images:** A repository for all images used in the project.

#### SRC Folder

##### Components Folder

- **First.jsx**
- **Follow.jsx**
- **Header.jsx**
- **Img.jsx**
- **Navbar.jsx**
- **Post.jsx**

##### Data Folder

- **profile.jsx:** Centralized data file containing information about profile and the posts.

##### Styles Folder

- **First.module.css**
- **Follow.module.css**
- **Header.module.css**
- **Img.module.css**
- **Navbar.module.css**
- **Post.module.css**

### Style Type
The styling methodology adopted is MODULE based, allowing for the isolation and reusability of styles without interference with other components.

### App.js
The heart of the application, **app.js** seamlessly integrates various modules. It imports data from **profile.js**, configures the header with the profile details, and dynamically renders posts using the <Post> component.

### Navbar.jsx
This component houses the navigation bar, displaying the Terribly Tiny Tales logo and a convenient button for stories.

### Header.jsx
A visually appealing header section that includes a background image, profile picture, name, and other relevant details.

### Post.jsx
Responsible for the layout of posts, **post.jsx** enhances user experience by initially rendering posts in a summarized form with ellipses. Clicking on a post expands it to its original size. The use of raw HTML in data formatting allows for flexible content representation.

### Profile.js
The data powerhouse of the website, **profile.js** encapsulates profile details and an array of posts. The organized structure facilitates easy maintenance and updates.
## My project images for all screen sizes.

![image](https://i.postimg.cc/k4Wm092H/Screenshot-2023-11-21-at-7-36-53-AM.png)
![image](https://i.postimg.cc/7LM9dWxV/Screenshot-2023-11-21-at-7-36-29-AM.png)
![image](https://i.postimg.cc/cHLRj1kx/Screenshot-2023-11-21-at-7-38-06-AM.png)
## THANK YOU

<h1 align="center">Welcome to One Dionys - Client-Side Routing Utilities! 👋 </h1>

<p align="center">A utility to handle client-side routing, allowing navigation between pages without the need to reload the entire page. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-client-side-routing-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-client-side-routing-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-client-side-routing-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-client-side-routing-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-client-side-routing-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-client-side-routing-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-client-side-routing-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```typescript
import { Router } from 'client-side-routing-utils';

const router = new Router();

router.addRoute('/', () => {
    console.log('Home Page');
});

router.addRoute('/about', () => {
    console.log('About Page');
});

router.navigate('/about');
```

#### Explanation

* This package provides utilities for client-side routing in web applications. It allows you to define routes and corresponding handlers, and navigate between routes using hash-based URLs.

#### Return Value

* `Router`: Class for managing client-side routing.
* `RouteHandler`: Function type for handling route changes.
* `RouteParams`: Interface for storing route parameters.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024
* v1.0.2 : 20 March 2024
* v5.0.0 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Client-Side Routing Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Client-Side Routing Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**

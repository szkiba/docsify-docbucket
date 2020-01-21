# docsify-bitbucket

[![NPM](https://img.shields.io/npm/v/docsify-docbucket.svg?style=flat-square)](https://www.npmjs.com/package/docsify-docbucket)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/szkiba/docsify-docbucket/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/szkiba/docsify-docbucket.svg?style=flat-square)](https://github.com/szkiba/docsify-docbucket/issues)

A [Docsify](https://docsify.js.org) plugin that help building documentation site with [Docsify](https://docsify.js.org) and [Pages for Bitbucket Server](https://mohamicorp.atlassian.net/wiki/spaces/DOC/pages/771817567/Pages+for+Bitbucket+Server). The plugin require [docsify-bitbucket](https://github.com/szkiba/docsify-bitbucket) plugin as dependency. This plugin works with Bitbucket Server only, Bitbuctek Cloud not supported.

## Installation

Add following script tag to your `index.html` after docsify.

```html
<script src="//unpkg.com/docsify-docbucket"></script>
```

## Options

### navbar

If `loadNavbar` parameter is missing from Docsify configuration then the plugin will use `_navbar.md` from the `doc` repository in the current Bitbucket Server project. You can disable this feature:

```javascript
window.$docsify = {
  docbucket: {
    noNavbar : true
  }
}
```

### style

By default the plugin will load `style.css` from the `doc` repository in the current Bitbucket Server project. You can disable this feature:

```javascript
window.$docsify = {
  docbucket: {
    noStyle : true
  }
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/szkiba/docsify-docbucket/blob/master/LICENSE) for details.

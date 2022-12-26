# Atom Material Icons Plugin for Web

<h1 align="center">
  <br>
    <img src="https://raw.githubusercontent.com/mallowigi/a-file-icon-idea/master/src/main/resources/META-INF/pluginIcon.svg?sanitize=true" alt="logo" width="200">
  <br><br>
  Atom Material File Icons for Web
  <br>
  <br>
</h1>

The repository maintains builds of [a-file-icon-web](https://github.com/mallowigi/a-file-icon-web) for Firefox.
You can download the artifacts in the [releases section](https://github.com/Nerixyz/a-file-icon-web/releases).

It replaces the icons and folder icons with better suited icons, related to the file type, framework or language.

Works on the following websites:

- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)
- [Gitee](https://gitee.com)
- [Azure](https://dev.azure.com)

## Firefox Extension

Download in the [releases section](https://github.com/Nerixyz/a-file-icon-web/releases).

## Chrome Extension

See <https://github.com/mallowigi/a-file-icon-web>

## Features

- Replaces **file icons** with their relevant logo icons
    - According to their extension (Java, PHP, Ruby...)
    - According to the framework (Android, NPM, RSpec...)
    - According to the program used with (Babel, Docker, CircleCI...)
- Replaces **directories**:
    - With a common pattern: src, main, app, img, docs...
    - With a specific pattern: node_modules, .vscode, .git...
- Settings:
    - Icon size: Change the icon size on the fly
    - Monochrome: Use monochrome icons


<details>
<summary>File Icons</summary>

![File Icons](https://raw.githubusercontent.com/mallowigi/iconGenerator/master/assets/files.png)

</details>

<details>
<summary>Folder Icons</summary>

![Folder Icons](https://raw.githubusercontent.com/mallowigi/iconGenerator/master/assets/folders.png)

</details>

## Building for Firefox

Make sure you cloned the submodule `iconGenerator`.

```
npm install && cd iconGenerator && npm install
npm run build
```

The extension will be in `build/firefox-mv2-prod.zip`.

## Credits

Special credits to:

- [mallowigi](https://github.com/mallowigi) for creating and maintaining [a-file-icon-web](https://github.com/mallowigi/a-file-icon-web).
- The [Material Theme UI plugin](https://www.material-theme.com) for the implementation
- [Atom File Icons](https://github.com/file-icons/atom)
  and [Sublime Text A File Icon](https://github.com/SublimeText/AFileIcon) for the idea
- [Scientifics Study Vectors](https://www.svgrepo.com/svg/121720/atom) for the plugin icon
- [File-Icons](https://github.com/file-icons/source/blob/master/charmap.md)
- [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/cheatsheet/)
- [MFixx](https://github.com/file-icons/MFixx/blob/master/charmap.md)
- [Devicons](https://github.com/file-icons/DevOpicons/blob/master/charmap.md)
- [Octicons](https://octicons.github.com/)
- [Material Design Icons](https://materialdesignicons.com/)

https://jimmylin212.github.io/post/0015_angular_schematics_intro/

# 前置作業
# 在開始之前，先安裝 @angular-devkit/schematics-cli 才可以使用 schematics 指令，建議用 global 安裝，因為這個程式和 Angular 獨立的，我們可以使用 schematics 來產生各種樣板程式碼，減少時間。

# install schematics-cli globally
npm install -g @angular-devkit/schematics-cli

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

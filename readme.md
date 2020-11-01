# react-codegen-tool
Package are replacing all entries of word "Component" from templates and from them names to passed CLI param.
### Installation
```
npm i -g react-codegen-tool
```
### Usage
Create templates folder with a certain template folder.
```
cd ~
mkdir -p codegen-templates/template-name
```

Add templates to template folder, examples in repo.

Set environment variable of templates folder path, e.g. for zsh
```
echo 'export REACT_CODEGEN_TEMPLATES_PATH=~/codegen-templates' >> ~/.zshenv
```

Generate components
```
react-codegen-tool -t template-name
```

Easily add aliases to shell, e.g. for zsh
```
alias rgtc="react-codegen-tool -t template-name"
```




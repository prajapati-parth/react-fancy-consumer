# React-fanct-consumer
This is a demo web app that consumes [react-fancy-component](https://github.com/prajapati-parth/react-fancy-component)

## Steps
- Clone [react-fancy-component](https://github.com/prajapati-parth/react-fancy-component)
```
git clone https://github.com/prajapati-parth/react-fancy-component.git
```
- cd into react-fancy-component and install all dependencies
```
npm install
```
- Build react-fancy-component
```
npm run build
```
- Link the component globally
```
npm link
```
- Clone this repo [react-fancy-consumer](https://github.com/prajapati-parth/react-fancy-consumer)
```
git clone https://github.com/prajapati-parth/react-fancy-consumer.git
```
- cd into react-fancy-consumer and install all dependencies
```
npm install
```
- Link react-fancy-component as dependency
```
npm link react-fancy-component
```
- Compile and run the project
```
npm start
```
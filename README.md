# ReactJS Course - #TheFutureIsWrittenInCode

### Example using react router to perform basic page navigation in an application

<img src="Screen Shot 2019-09-20 at 2.27.24 PM.png" width=600/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a contrieved example to show how you can use the capacitor and capacitor plugins to deploy a react app to a mobile device

## Installing Capacitor

Follow the instructions
- https://capacitor.ionicframework.com/docs/getting-started/

With VueJS the web asset directory is `build` you can set this when initializing the app

```
npx cap init --web-dir=build
```

Otherwise update the web assets directory in the `capacitor.config.json` file
- `"webDir": "build"`

Then add your platform
- Now you can run `npx cap add ios` add ios
- Now you can run `npx cap add android` add android

Then launch the application
- Now you can run `npx cap open ios` to launch Xcode
- Now you can run `npx cap open android` to launch Android Studio

Steps to Fix Header Issues to account for the safe-area/notch on newer iphones
```html
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no , viewport-fit=cover"
    />
```
And change some css in the `App.css` file
```css
    ion-navbar.toolbar.toolbar-ios.statusbar-padding,
    ion-navbar.toolbar-ios ion-title.title-ios,
    ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
    ion-toolbar.toolbar-ios ion-title.title-ios {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    }
```
Push App Updates
- `npm run build; npx cap sync` 

[React-Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start)

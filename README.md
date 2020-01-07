This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using the Help Desk

### Students

Students seeking for help should navigate to the Help Desk Schedule to confirm there is an available mentor. Afterwards, navigate to the _Submit Issue Here_ section and input their username (ex: nknguye5), choose the type of issue in the dropdown list, and choose which class they are seeking assistance for in the dropdown list. After filling each section, press the `Submit` button and they should appear in the queue shown below the form.

### Mentors

Mentors can access the mentor page by logging in, link at the top right, and inputting their credentials set by an admin. Mentors will also be able to see the queue similarly to students. To start a session, mentors will press the `Start Session` button. This will pop the first person in the queue and begin the session clock. After the session is over, mentors will press the `End Session` button. The mentor will need to fill in the submission form including a general assessment of the session and any additional comments before pressing submit.

## Firebase Setup

- Edit firebase details in environments/firebase.config.ts
- You will need the to generate the configurations from the firebase console.
- Goto to https://console.firebase.google.com
- Select your database
- You will see one app presence in the console
- ![Firebase Console](https://firebasestorage.googleapis.com/v0/b/java-help-desk-dev.appspot.com/o/Screenshot%20from%202019-11-27%2013-53-49.png?alt=media&token=c0495502-6b79-4b9d-b8f6-45dca53a71df =300x)
- Now click on the app icon and then click settings
- You will configuration window as the screenshot below.
- ![Settings](https://firebasestorage.googleapis.com/v0/b/java-help-desk-dev.appspot.com/o/Screenshot%20from%202019-11-27%2013-54-18.png?alt=media&token=9f43a8fd-9e05-4b80-bf5e-c701af5fdb0f =300x)
- Now select the Config tab and it will show you the credentials required for the setup. Reference screenshot below
- ![Configurations](https://firebasestorage.googleapis.com/v0/b/java-help-desk-dev.appspot.com/o/configurations-2019-07-02T06_06_56.055Z.png?alt=media&token=0963938f-f7ec-46f4-be40-b1b575e83b5c =300x)
- Now, open the firebase.config.sample.ts and edit the necessary credentials taking the help from the firebase console. Then rename the file to firebase.config.ts

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

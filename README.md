## Page Link : https://karthikeya-profile.web.app

### Deployment steps

1. Install Firebase CLI by running `npm install -g firebase-tools` if not already installed.
2. Run `npm run build` to build your project.
3. Run `firebase login` to login to your Firebase account.
4. Navigate to your project directory.
5. Run `firebase init` to initialize your project for Firebase Hosting.
6. Follow the prompts to set up your project.

- Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
- Use an existing project
- karthikeya-profile (Karthikeya-Profile)
- What do you want to use as your public directory?(public) dist
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
- Set up automatic builds and deploys with GitHub? (y/N) N
-  File dist/index.html already exists. Overwrite? (y/N) N

7. Run `firebase deploy` to deploy your project to Firebase Hosting.

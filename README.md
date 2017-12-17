# Expensify
### Simpel app for tracking expenses powerd by React and Firebase

## Set up

### Clone a repo
```
git clone https://github.com/besirovic/expensify.git
```

### Install dependencies
Run ```npm install``` or ```yarn install```

### Create Firebase development project
* Go to [Firebase](https://firebase.google.com/)
* Create new project and name it ```some_awesome_name-development```
* Go to Database section and inside ```Rules``` tab add following code:
```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
      }
    }
  }
}
```
* After that, inside project root folder create ```.env.development``` file and add following code
``` 
FIREBASE_API_KEY=___YOUR_FIREBASE_API_KEY___
FIREBASE_AUTH_DOMAIN=___YOUR_FIREBASE_AUTH_DOMAIN___
FIREBASE_AUTH_DATABASE_URL=___YOUR_FIREBASE_AUTH_DATABASE_URL___
FIREBASE_PROJECT_ID=___YOUR_FIREBASE_PROJECT_ID___
FIREBASE_STORAGE_BUCKET=___YOUR_FIREBASE_STORAGE_BUCKER___
FIREBASE_MESSAGING_SENDER_ID=___YOUR_FIREBASE_MESSAGING_SENDER_ID___
```

### Create Firebase testing project
* Go to [Firebase](https://firebase.google.com/)
* Create new project and name it ```some_awesome_name-test```
* Go to Database section and inside ```Rules``` tab add following code:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* After that, inside project root folder create ```.env.test``` file and add following code
``` 
FIREBASE_API_KEY=___YOUR_FIREBASE_API_KEY___
FIREBASE_AUTH_DOMAIN=___YOUR_FIREBASE_AUTH_DOMAIN___
FIREBASE_AUTH_DATABASE_URL=___YOUR_FIREBASE_AUTH_DATABASE_URL___
FIREBASE_PROJECT_ID=___YOUR_FIREBASE_PROJECT_ID___
FIREBASE_STORAGE_BUCKET=___YOUR_FIREBASE_STORAGE_BUCKER___
FIREBASE_MESSAGING_SENDER_ID=___YOUR_FIREBASE_MESSAGING_SENDER_ID___
```

### RUN APP
After setting up Firebase project, jump to terminal, navigate to project root folder and ther run ```npm run dev-server``` or
```yarn run dev-server```. After that visit ```http://localhost:8080/dashboard```, and start using app.

### TEST
All test files are stored in src/tests folder. To run test jump to your terminal and run ```npm test``` or ```yarn test```.

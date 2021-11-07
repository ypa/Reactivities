# Reactivities

https://reactivities-ypa.herokuapp.com/

## Local Development

Project Dependencies: .NET 5, Node, React, TypeScript, Postgres

```sh
# Backend
cd API/
dotnet watch run

# Client app
cd client-app/
npm start
```

Access the app on `localhost:3000`

## Deployment

#### Testing locally before deployment

```sh
# Build client app
cd client-app/
npm run build

# Serve client app from API/wwwroot
cd API/
dotnet watch run
```

1. Access the app on `localhost:5000`.
2. Verify that user can login.
3. Open browser console and make sure no content-security policy errors.

#### Deploy to Heroku

```sh
# Add your changes including client-app built files inside API/wwwroot
git aa
# Commit them
git ci
# Push to main
git push origin main  # This will trigger a Heroku deployment automatically from Github
```

https://reactivities-ypa.herokuapp.com/

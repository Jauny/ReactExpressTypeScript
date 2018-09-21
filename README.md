# ReactExpressTypeScript
The dream came true 🍆

## Initial setup
- yarn: `brew install yarn`
- typescript: `yarn global add typescript`
- tslint: `yarn global add tslint`

Install everything
`yarn install`

Then everything should work? I think?
`yarn dev` and visit `localhost:3000`

## Scripts
`yarn server` will transpile the server files (`server/server.ts`), watch for changes and restart the server when needed
`yarn client` will transpile the client files (`client/index.tsx`) and watch for changes
`yarn dev` runs both with `concurrently`

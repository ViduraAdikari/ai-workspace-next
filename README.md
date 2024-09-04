
## Motivation
Workspace message exchange app frontend coded with Nextjs and React for 
you to understand how I build robust applications using these libraries and frameworks.  

`Nextjs` `Reactjs` `Redux` `i18n` `Typescript` `GraphQL` `Mui` `formik` `testing-library`

This is the frontend repo. 

If you were looking for the backend: (https://github.com/ViduraAdikari/ai-workspace-backend-nest)

## How it works?

- Run the app.
- If you would like, change the language from the dropdown in the navbar.
- Enter a name in Nickname input and click next.
- Workspace will be loaded, 3 Channels (#general, #common and #random) will be loaded from remote and displayed on the left drawer.
- Your name and randomly selected avatar will be displayed on drawer below the channels list.
- Click on a channel from the drawer to get started.
- When you select a channel, messages of the channel and text editor of the channel will be displayed.
- Text editor will gain focus automatically on channel selection.
- As you type text in the text editor submit button will get activated.
- Click submit to post the new message to the channel.
- The new message preview will be on the channel as soon as you submit it.
- Text in the editor will be cleared after submitting.
- Selecting a different channel will clear the text in the editor.
- Message list for the selected channel will be refreshed every 5 seconds.

### Simultaneous message posting

- [x] You can chat with multiple users.
- Open another browser tab for [http://localhost:3000](http://localhost:3000)
- Follow the instructions in Functions section from the 2nd step (Enter a name in Nickname input and click next).
- Messages from multiple users will be displayed on the message list.

#### Limitations
- If you refresh the browser last logged in user will be assigned to you from the store.
- User in cookies is only to guard dashboard routes using the middleware.

## Project setup
Working app can be run within just a few minutes with no database setup.

backend data runs on globals so that no db setup required.

- Clone the repo.
- Setup *env* file.
  - crate the a file *.env.development* in the project dir and add these values:
    NEXT_SERVER_API_URL=http://localhost:4400/
    NEXT_PUBLIC_API_URL=http://localhost:4400/
- Install dependencies.
- Run the backend.
- Run the frontend.
- Start messaging.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm insttall

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Roboto Slab, a custom Google Font.

## Code
This is the front end
if you're looking for the backend: [Backend repo](https://github.com/ViduraAdikari/ai-workspace-backend-nest)


### Component hierarchy

**src/components** - Atomic level components are in src/components dir.\
**src/cartons** - Units that work together are kept modular as possible in src/cartons dir.

`elements < cartons`

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [@drawer - Slot](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) - was done with Parallel Routes

## Project resources

You will need a licence if you want to copy the icons in the src/assets folder to your other projects.
Please make sure not to share the icons in assets folder.
You can buy them in [streamline](https://www.streamlinehq.com/) just like I did.

## Share your thoughts

It would be lovely to hear your feedback.
Don't hesitate to reach out. ❤

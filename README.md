# Viafoura Demo Site using Next.js and DatoCMS

This example showcases a Next.js Blog using [DatoCMS](https://www.datocms.com/) as the data source. It fully supports [Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode) with [DatoCMS real-time updates](https://www.datocms.com/docs/next-js/real-time-updates).

The purpose of this repo is to have a quick start reference that can be set up with the "one-click" button below.

## Demo

Have a look at the end result live:

### [https://demo.viafoura.com/](https://demo.viafoura.com/)

## How to use

### Quick start

1. [Create an account on DatoCMS](https://datocms.com).

2. Make sure that you have set up the [Github integration on Vercel](https://vercel.com/docs/git/vercel-for-github).

3. Let DatoCMS set everything up for you clicking this button:

[![Deploy DatoCMS project](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=viafoura/demo-site)

### Local setup

Once the setup of the project and repo is done, clone the repo locally.

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then on `.env.local` update `GRAPHQL_API_TOKEN` with the value provided by DatoCMS.

Your `.env.local` file should look like this:

```bash
GRAPHQL_API_TOKEN=<read-only-api-token-from-datocms>
```

#### Run your project locally

```bash
npm install
npm run dev
```

Your demo site should be up and running on [http://localhost:3000](http://localhost:3000)!

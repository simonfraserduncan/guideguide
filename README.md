# CreateReactApp + Netlify + Astra DB Collections

This is an example React user guide application using a [DataStax Astra](https://dtsx.io/2Yhvqtv) free tier database.

## Quick Start
1) [Create an Astra DB Database](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db) or use an existing one.
2) [Create an Astra DB Keyspace](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace) called `sag_todo_jamstack` in your database.
3) [Generate an Application Token](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token) with the role of `Database Administrator` for the Organization that your Astra DB is in.
4) Once you clone this code locally you need to copy the `.env.example` file to a file named `.env` and fill the required values in from your Application Token and [Astra DB connection settings](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings).
6) Start the example by running `netflify dev` in your local console.

## How this works
Once the Astra DB credentials are provided, the necessary tables are created in the database. The webservice will be available on port 8888 once the application has been deployed.
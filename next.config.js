/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_SRV: 'mongodb+srv://<username>:<password>@ncrud.dykuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  }
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_SRV: 'mongodb+srv://bwgluck:<password>@ncrud.dykuk.mongodb.net/cruddb?retryWrites=true&w=majority',
  }
}

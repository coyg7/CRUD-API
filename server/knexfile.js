// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: 5432,
      host: 'localhost',
      user: 'postgres',
      password: 'postgresql',
      database: 'stickers-db'
    }
  },
};

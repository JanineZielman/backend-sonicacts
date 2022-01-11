module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c98be282542cc1fe677a27611f09c407'),
  },
});

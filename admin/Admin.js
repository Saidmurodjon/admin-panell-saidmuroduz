const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
// const AdminBroMongoose = require('admin-bro-mongoose')

// const mongoose = require('mongoose')
const mongooseAdminBro = require("@admin-bro/mongoose");
// AdminBro.registerAdapter(AdminBroMongoose)

// const adminBro = new AdminBro({
//   databases: [mongoose],
//   rootPath: '/admin',
// })
const {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_PASS,
} = require("../config");

const ADMIN = {
  email: ADMIN_EMAIL,
  password: ADMIN_PASSWORD,
};
// Modelos
const User = require("../models/User");
const Post = require("../models/Post");

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = { resources: [User, Post] };

const adminBro = new AdminBro(AdminBroOptions);
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword:
    process.env.ADMIN_COOKIE_PASS ||
    "supersecret-and-long-password-for-a-cookie-in-the-browser",
  authenticate: async (email, password) => {
    if (ADMIN_EMAIL === email && ADMIN_PASSWORD === password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;

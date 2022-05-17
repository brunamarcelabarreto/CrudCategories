"use strict";
const prisma = require('prisma');
const CategorySchema = new prisma.Schema({
    name: {
        type: String,
        require: true,
    }
});
prisma.model('Category', CategorySchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCRYPT_ROUND = exports.HTTP_UNAUTHORIZED = exports.HTTP_OK = exports.PORT = void 0;
exports.PORT = process.env.PORT || 4000;
exports.HTTP_OK = 200;
exports.HTTP_UNAUTHORIZED = 401;
exports.BCRYPT_ROUND = process.env.BCRYPT_ROUND || 14;


require('./connection/connection')

let BookModel = require('./model/bookModel')

let books = require('./db/books.json')

BookModel.create(books)

require('./server/server')

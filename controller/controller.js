let bookModel = require('../model/bookModel')

let controller = {
  create(request, response) {
    bookModel
      .create(request.body)
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on create()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getById(request, response) {
    bookModel
      .findById(request.params.id)
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getById()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getAll(request, response) {
    bookModel
      .find()
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getAll()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  updateById(request, response) {
    bookModel
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on update()", error)
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  deleteById(request, response) {
    bookModel
      .findByIdAndRemove(request.params.id)
      .then(() => response.json({ success: true }))
      .catch(error => {
        console.error("Error on delete()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },

}

module.exports = controller

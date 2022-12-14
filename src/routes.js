const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByHandler,
  editNotesByHandler,
  deleteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesByHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteByIdHandler,
  },
];

module.exports = routes;

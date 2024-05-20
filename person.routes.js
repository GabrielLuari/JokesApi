const PersonController = require ('./controllers/person.controller');

module.exports = (app) => {
    app.get('/api/jokes', PersonController.index);
    app.post('/api/jokes', PersonController.createPerson); 
    app.get('/api/jokes',   PersonController.getJokes);
    app.patch("/api/jokes/:id" , PersonController.editJoke);
    app.delete("/api/jokes/:id", PersonController.deleteJoke);
    app.get("/api/jokes", PersonController.listAllJokes);
}
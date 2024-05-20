const  Person = require ( '../models/person.model');

module.exports.index = (request, response) => { 
    response.json({   
    });
}


module.exports.createPerson = (request, response) => {
   
    Person.create(request.body) 
        .then(person => response.json(person))
        .catch((err)=> {
          console.log("Error adding joke to Data " + err)
          res.json(err)
      })

}

exports.getJokes = async (req, res) => {
    try {
      const jokes = await Joke.find();
      res.json(jokes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports.editJoke = (req,res) =>{
    Person.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
    .then((editedJoke)=>{
      res.json({message:"Joke edited sucessfully", joke: editedJoke})
    })
    .catch((err)=> {
      console.log(`Error editing joke ${err}`)
      res.json(err)
    })
  };

  module.exports.listAllJokes = (req,res) => {
    Person.find()
    .then((allJokes)=>{
      res.json(allJokes)
    })
    .catch((err)=> {
      console.log(`Error getting all jokes ${err}`)
      res.json(err)
  })
  };


    module.exports.deleteJoke = (req,res) =>{
      Person.deleteOne({_id: req.params.id})
      .then((deletedJoke)=>{
        res.json({message:"Joke deleted sucessfully"})
      })
      .catch((err)=> {
        console.log(`Error deleting joke ${err}`)
        res.json(err)
      })
    }
    
  
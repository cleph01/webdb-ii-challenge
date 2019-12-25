const server = require('./server.js');

const carsRouter = require('./cars/cars-router');

//Using imported userRoutes
server.use('/cars', carsRouter);



//Home Page
server.use('/', (req, res) => {

    res.json({message:`Welcome To C-Money's Knex Schema Page`});

  });


//Error handler
server.use( (err, req, res, next) => {

  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  })
});


const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
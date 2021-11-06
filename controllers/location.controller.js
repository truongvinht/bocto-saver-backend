// location.controller.js
// Location controller for handling operations
// ==================

const DatabaseManager = require('../services/databaseManager');

const Location = DatabaseManager.getInstance().locations();

const LogHelper = require('./../loaders/loghelper');
const logger = LogHelper.getInstance();

// Create and Save a new Location
exports.create = async (req, res) => {
  logger.info('Location#create');
  // Validate request
  if (!req.body.city) {
    res.status(400).send({ message: "City can not be empty!" });
    return;
  }
  try {
    // Create a Location
    const location = new Location({
      street: req.body.street,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country
    });
    let savedLocation = await location.save(location);
    res.send(savedLocation);
  } catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
  }
};

// Retrieve all Location from the database.
exports.findAll = async (req, res) => {
  logger.info('Location#findAll');
  const city = req.query.city;
  const condition = city ? { city: { $regex: new RegExp(city), $options: "i" } } : {};
  try {  
    let data = await Location.find(condition);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving locations."
      });
  }
};

// Find a single Location with an id
exports.findOne = (req, res) => {
  logger.info('Location#findOne');
  const id = req.params.id;

  Location.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Location with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Location with id=" + id });
    });
};

// Update a Location by the id in the request
exports.update = (req, res) => {
  logger.info('Location#update');
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Location.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Location with id=${id}. Maybe Location was not found!`
        });
      } else res.send({ message: "Location was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Location with id=" + id
      });
    });
};

// Delete a Location with the specified id in the request
exports.delete = (req, res) => {
  logger.info('Location#delete');
  const id = req.params.id;

  Location.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Location with id=${id}. Maybe Location was not found!`
        });
      } else {
        res.send({
          message: "Location was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Location with id=" + id
      });
    });
};

// Delete all Locations from the database.
exports.deleteAll = (req, res) => {
  logger.info('Location#deleteAll');
    Location.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Locations were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all locations."
      });
    });
};

exports.drop = (req, res) => {
    
}
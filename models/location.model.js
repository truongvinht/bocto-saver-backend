// location.model.js
// Location model object for storing geographical data
// ==================

module.exports = mongoose => {
    let schema = mongoose.Schema(
      {
        street: String,
        zip: String,
        city: {type: String, required: true},
        country: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    return mongoose.model("location", schema);
  };
  
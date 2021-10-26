// location.model.js
// Location model object for storing geographical data
// ==================

module.exports = mongoose => {
    let schema = mongoose.Schema(
      {
        street: String,
        zip: String,
        city: String,
        country: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", () => {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Location = mongoose.model("location", schema);
    return Location;
  };
  
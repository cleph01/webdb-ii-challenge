
exports.seed = async function(knex) {
  
  await knex("cars").insert([
    { vin: "1FMCU0DG6AKC04330", make: "Ford", model: "Escape", mileage:"1234" },
    { vin: "1J8GS48K98C235571", make: "Jeep", model: "Wrangler", mileage:"1234", transmission_type:"manual", title_status:"clean" }
  ])
};

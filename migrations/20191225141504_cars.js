
exports.up = async function(knex) {
  
    await knex.schema.createTable("cars", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.text("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
        table.text("transmission_type")
        table.text("title_status")

    });

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("cars");
};

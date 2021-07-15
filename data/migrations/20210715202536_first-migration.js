
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 100).notNullable().unique()

    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number')
        table.string('step_instructions', 500)
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 100).notNullable().unique()
    })
    .createTable('steps_instructions', table => {
        table.increments('step_ingredient_id')
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })

};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};

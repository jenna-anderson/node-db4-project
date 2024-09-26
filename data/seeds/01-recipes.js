
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: "cereal"},
        {recipe_name: "milkshake"}
      ]);
};

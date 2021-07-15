
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: "milk"},
    {ingredient_name: "ice cream"},
    {ingredient_name: "cereal"}
  ]);
};

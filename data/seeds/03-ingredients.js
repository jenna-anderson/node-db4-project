
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: "milk"},
    {ingredient_name: "ice cream"},
    {ingredient_name: "cereal"},
    {ingredient_name: "chocolate syrup"},
    {ingredient_name: "vanilla"}
  ]);
};

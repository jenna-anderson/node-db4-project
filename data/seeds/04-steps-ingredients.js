
exports.seed = function(knex) {
  return knex('steps_ingredients').insert([
    {step_id: 1, ingredient_id: 3, ingredient_quantity: "2 cups"},
    {step_id: 2, ingredient_id: 1, ingredient_quantity: "1 cup"},
    {step_id: 3, ingredient_id: 1, ingredient_quantity: "2 cups"},
    {step_id: 4, ingredient_id: 2, ingredient_quantity: "3 scoops"}
  ]);
};

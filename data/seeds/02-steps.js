
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: "1", step_instructions: "pour cereal in bowl", recipe_id: 1},
    {step_number: "2", step_instructions: "pour milk in same bowl", recipe_id: 1},
    {step_number: "1", step_instructions: "add milk and chocolate syrup to blender", recipe_id: 2},
    {step_number: "2", step_instructions: "add ice cream to blender", recipe_id: 2},
    {step_number: "3", step_instructions: "blend for 30 seconds or until smooth", recipe_id: 2},
  ]);
};

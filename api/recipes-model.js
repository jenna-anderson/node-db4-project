const db = require('../data/db-configs')

const getRecipeById = async id => {
    // select 
        // r.*, 
        // s.step_id, 
        // s.step_number, 
        // s.step_instructions, 
        // i.ingredient_id, 
        // i.ingredient_name, 
        // si.ingredient_quantity
    // from recipes as r
    // join steps as s
    // on s.recipe_id = r.recipe_id
    // join steps_ingredients as si
    // on si.step_id = s.step_id
    // left join ingredients as i
    // on i.ingredient_id = si.ingredient_id
    // where r.recipe_id = 2;
 
    const stuff = await db
        .select(
            'r.*', 
            's.step_id', 
            's.step_number', 
            's.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.ingredient_quantity')
        .from('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .join('steps_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .where('r.recipe_id', id)
    console.log(stuff)
        
}

module.exports = {
    getRecipeById
}
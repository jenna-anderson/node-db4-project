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
 
    const unstructuredRecipe = await db
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
        .orderBy('s.step_number')
    console.log(unstructuredRecipe)

    const ingredients = unstructuredRecipe.map(item => {
        
            if(!item["ingredient_id"]){
                return []
        } else {
            return {
                "step_id": item["step_id"],
                "ingredient_id": item["ingredient_id"],
                "ingredient_name": item["ingredient_name"],
                "quantity": item["ingredient_quantity"]
            }
        }
    })
    
    // const stepIngredients = ingredients.filter((ingredient) => {
    //     return ingredient["step_id"] === item["step_id"]
    // })

    // console.log("test filtering", stepIngredients)
    
    const steps = unstructuredRecipe.map(item => {
        const stepId = item["step_id"]
        return {
            "step_id": item["step_id"],
            "step_number": item["step_number"],
            "step_instructions": item["step_instructions"],
            "ingredients": ingredients.filter((ingredient) => {
                return ingredient["step_id"] === stepId
            })
        }
    })
    
    // console.log(steps)
    
    const recipe = {
        "recipe_id": unstructuredRecipe[0]["recipe_id"],
        "recipe_name": unstructuredRecipe[0]["recipe_name"],
        "created_at": unstructuredRecipe[0]["created_at"],
        "steps": steps
    }
    
    console.log("start of recipe:", recipe)

    return recipe

    // const ingredients = unstructuredRecipe.reducer((item, acc) => {
    //     return {

    //     }
    // }, [])
}

module.exports = {
    getRecipeById
}
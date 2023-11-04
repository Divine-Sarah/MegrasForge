import api from "../api";

const BASE = "/recipe";

class Recipe {
    constructor () {}

    async uploadRecipe({
        title,
        ingredients,
        instructions,
        image,
    }:{
        title: string;
        ingredients: string;
        instructions: string;
        image: string;
    }) {
        return await api.post(`${BASE}/recipe`,{
             title,
        ingredients,
        instructions,
        image,
        });
    }

async getSingleRecipe(id: string) {
    return await api.get(`${BASE}/${id}`);
  }
  async getAllRecipe() {
    return await api.get(`${BASE}`);
  }


}

const recipeInstance = new Recipe();

export default recipeInstance;
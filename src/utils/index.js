// const key = "0602f8a0e59884d4d56bdca7e8137eff"
// const id = "87e0b39e"

export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${'87e0b39e'}&app_key=${"0602f8a0e59884d4d56bdca7e8137eff"}&from=0&to=${limit}&`;
  
    // sanjay gupta data 
 
    // https://api.edamam.com/search?q=chicken&app_id=87e0b39e&app_key=0602f8a0e59884d4d56bdca7e8137eff
    //   sanjay gupta
    const response = await fetch(url)

    const data = await response.json();
    console.log(data)

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}
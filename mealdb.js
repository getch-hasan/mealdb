const searchfood = async () => {

    const searchFild = document.getElementById('search-fild')
    const searchFildTExt = searchFild.value;

    searchFild.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFildTExt}
    `;

    const res = await fetch(url)
    const data = await res.json();
    displayResult(data.meals)
    /*   fetch(url)
  
          .then(res => res.json())
          .then(data => displayResult(data.meals)) */

}
const displayResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';//for remove previous all
    if (meals.length == 0) {
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = ''

        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML =
            `
         <div class="col">
          
               
               <p class="card-text">No result Found.....Try egain with defferent word</p>
             
         </div>
         `

        searchResult.appendChild(div)


    }
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML =
            `
         <div class="col">
           <div onclick="loadmealDitail(${meal.idMeal})" class="card h-50">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${meal.strInstructions}</p>
              </div>
           </div>
         </div>
         `

        searchResult.appendChild(div)


    });



}
const loadmealDitail = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDitail(data.meals[0]))


}
const displayDitail = meal => {

    console.log(meal)

    const mealditial = document.getElementById('meal-ditail')
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`
    mealditial.appendChild(div)


}
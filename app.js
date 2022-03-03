const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {

  const selected = document.querySelector(".form-control").value;
  if (!selected) return
  console.log(selected);
  fetchMeal(selected);
});

const fetchMeal = async function (name) {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  console.log(url);
  const meals = await fetch(url);
  console.log(meals);
  const data = await meals.json();
  console.log(data);
  renderMeal(data);
};

function renderMeal(data) {
     let mealsDisplay = document.querySelector(".meals-div");
    mealsDisplay.innerHTML = "";
  data.meals.forEach((item) => {
    const { strMealThumb, strMeal, strInstructions } = item;
    console.log(strMealThumb, strMeal );
   
    
    mealsDisplay.innerHTML += `
    <div class="card bg-success text-center" style="width: 18rem">
        <img src=${strMealThumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${strMeal}</h5>
          
         <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Get the recipe
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">${strMeal}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${strInstructions}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>`;
  });
}

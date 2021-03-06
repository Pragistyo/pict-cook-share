$(document).ready(()=>{
  if(!localStorage.getItem('jwttoken') ){
    window.location.href='signin.html'
  }
})

var $file = $('#filePhoto')
$('form.kirimGambar').submit(function(eventHandler){
  eventHandler.preventDefault()
  console.log($file)
  axios.post('http://localhost:3000/vision', {
    gambar: $file.val()
  })
  .then((result)=>{
    console.log(result.data.description)
    var key = result.data.description
    $('div.content-recipe').empty()
    srch(key)
  })
  .catch(err => {
    console.log(err)
  })
})

var search = $('input[name="search"]')
search.keyup(function() {
  $('div.content-recipe').empty()
  let keyword = $(this).val()
  srch(keyword)
})

function srch(keyword){
  $.ajax({
    url: `https://community-food2fork.p.mashape.com/search?key=3f0eb392931eb697ef53ea1cf86478f8&page=1&q=${keyword}`,
    type: 'GET',
    headers: {
      'X-Mashape-Key': 'ft6JTtlfammshF6NyVGY4XGOwdxnp1VENsbjsnlbs3PxWiJZdd',
      'Accept': 'application/json'
    },
    dataType: 'json',
    success: function(response){
      console.log(response)
      $('h3.count-recipe').empty()
      $('div.content-recipe').empty()
      $('h3.count-recipe').append(`${response.count} from ${keyword}`)
      var result = response.recipes
      for(var i=0; i < result.length; i++){
        $('div.content-recipe').append(`
          <div class="col-sm-6 col-md-4" onclick="recipe(${result[i].recipe_id})">
            <div class="thumbnail">
              <div class="images" style="background-image: url('${result[i].image_url}')">
              </div>
              <div class="caption">
                <h4>${result[i].title}</h4>
                <p>Publisher: <a href="${result[i].publisher_url}">${result[i].publisher}</a></p>
              </div>
            </div>
          </div>
        `)
      }
    },
    fail: function(err) {
      console.log(err)
    }
  })
}

function recipe(id){
  $('h3.count-recipe').empty()
  $('div.content-recipe').empty()
  $.ajax({
    url: `https://community-food2fork.p.mashape.com/get?key=3f0eb392931eb697ef53ea1cf86478f8&rId=${id}`,
    type: 'GET',
    headers: {
     'X-Mashape-Key': 'ft6JTtlfammshF6NyVGY4XGOwdxnp1VENsbjsnlbs3PxWiJZdd',
     'Accept': 'application/json'
    },
    dataType: 'json',
    success: function(data){
      console.log(data.recipe)
      var recipe = data.recipe
      $('div.content-recipe').append(`
      <div class="col-md-4 thumbnail">
        <div class="images" style="background-image: url('${recipe.image_url}')"></div>
        <p class="rating"><span>Rating: ${recipe.social_rank}</span></p>
      </div>
      <div class="col-md-8 detail-item">
        <h3>${recipe.title}</h3>
        <p>Publisher: ${recipe.publisher}</p>
        <ul class="ingredient-wrap">
      `)
      ingredient(id)
    },
    fail: function(err){
      console.log(err);
    }
  })
}

function ingredient(id){
  $.ajax({
    url: `https://community-food2fork.p.mashape.com/get?key=3f0eb392931eb697ef53ea1cf86478f8&rId=${id}`,
    type: 'GET',
    headers: {
      'X-Mashape-Key': 'ft6JTtlfammshF6NyVGY4XGOwdxnp1VENsbjsnlbs3PxWiJZdd',
      'Accept': 'application/json'
    },
    dataType: 'json',
    success: function(data){
      console.log(data.recipe)
      var ingredient = data.recipe.ingredients
      for (var i = 0; i < ingredient.length; i++) {
      $('div.content-recipe').append(`
            <li>
              <span class="glyphicon glyphicon glyphicon-cutlery" aria-hidden="true"></span>
                ${ingredient[i]}
            </li>
          </ul>
        </div>
      `)
      }
    },
    fail: function(err){
      console.log(err)
    }
  })
}

$('#logout').click(()=>{
  localStorage.removeItem('jwttoken')
  window.location.href='signin.html'
})

function uploadData() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "file");
  document.body.appendChild(x);
}

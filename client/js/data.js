$('form#kirimGambar').on('submit', (event) => {
  event.preventDefault()
  var data = new FormData();
  data.append('filePhoto', $('#filePhoto')[0].files[0])

  axios({
    method: 'POST',
    url: 'http://localhost:3000/vision',
    data: $('#filePhoto')[0].files[0],
    processData: false
  })
  .then((data)=>{
    console.log(data)
    //nanti return axios food disini
  })
  .catch(err => {
    console.log(err)
  })
})

var search = $('input[name="search"]')
search.keyup(function() {
  let keyword = $(this).val()
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
})

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
      $('div.content-recipe').append(`
      <div class="col-md-4 thumbnail">
        <div class="images"></div>
        <p class="rating"><span>Rating</span></p>
      </div>
      <div class="col-md-8 detail-item">
        <h3>Judul resep masakannya</h3>
        <p>Publisher</p>
        <ul class="ingredient-wrap">
          <li>
            <span class="glyphicon glyphicon glyphicon-cutlery" aria-hidden="true"></span>
            Ingredient
          </li>
        </ul>
      </div>
      `)
    },
    fail: function(err){
      console.log(err);
    }
  })
}
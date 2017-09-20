$(document).ready(function() {
  console.log('Document is Ready')

  $.ajax({
    type: 'GET',
    url: `localhost:3000/vision`,
    dataType: 'json',
    success: function(data) {
      console.log(data)
    },
    error: function(error) {
      console.log(error)
    }
  })

  $.ajax({
    type: 'GET',
    url: `https://community-food2fork.p.mashape.com/search?key=3f0eb392931eb697ef53ea1cf86478f8&q=shredded+chicken`,
    dataType: 'json',
    success: function(data) {
      console.log(data)
    },
    error: function(error) {
      console.log(error)
    }
  })


})


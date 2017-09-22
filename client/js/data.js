$(document).ready(function() {
  console.log('Document is Ready')
})

  var $kirimGambar = $('#kirimGambar')
  $('form.kirimGambar').submit(function(eventHandler){
    eventHandler.preventDefault();
    axios.post('http://localhost:3000/vision', {
      gambar : $kirimGambar.val()
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  })

  var search = $('input[name="search"]')
  seacrh.keyup(function() {
    let keyword = $(this).val()
    $.ajax({
      url: `https://community-food2fork.p.mashape.com/search?key=3f0eb392931eb697ef53ea1cf86478f8&q=${keyword}`,
      type: 'GET',
      dataType: 'json',
      success: function(response){
        console.log(response)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  })

  // $.ajax({
  //   type: 'GET',
  //   url: `localhost:3000/vision`,
  //   dataType: 'json',
  //   success: function(data) {
  //     console.log(data)
  //   },
  //   error: function(error) {
  //     console.log(error)
  //   }
  // })

  // $.ajax({
  //   type: 'GET',
  //   url: `https://community-food2fork.p.mashape.com/search?key=3f0eb392931eb697ef53ea1cf86478f8&q=shredded+chicken`,
  //   dataType: 'json',
  //   success: function(data) {
  //     console.log(data)
  //   },
  //   error: function(error) {
  //     console.log(error)
  //   }
  // })

  // $.ajax({
  //   type: 'GET',
  //   url: `https://community-food2fork.p.mashape.com/get?key=3f0eb392931eb697ef53ea1cf86478f8&rId=37859`,
  //   dataType: 'json',
  //   success: function(data) {
  //     console.log(data)
  //   },
  //   error: function(error) {
  //     console.log(error)
  //   }
  // })



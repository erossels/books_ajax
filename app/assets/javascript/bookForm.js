$(document).on('turbolinks:load',function(){
  
  $('#btn_form').on('click',function(){
    var x = $('#form-info').find('option:selected').attr('value')
    $.ajax({
      url: '/'+x,
      type: 'GET',
      success: function(){
        $('#reservas').empty()
        $('#reservas').append("<h5>Se ha agregado "+$('#form-info').find('option:selected').text()+" a tus reservas</h5>")
      }
    })
  })
})

  

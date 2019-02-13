$(document).ready(function(){
  $('#cmd').click(function () {
      doc.fromHTML($('#content').html(), 15, 15, {
          'width': 170,
              'elementHandlers': specialElementHandlers
      });
      doc.save('sample-file.pdf');
  });

  $('#clean').click(function () {
    $('#clean').hide();
    $('.form-control').remove();
    $('.btn-group').remove();
    $('#disclaimer').removeClass('hidden');
    $('#cmd').removeClass('hidden');
    $('#export').removeClass('hidden');
    $('#back').removeClass('hidden');
  });
});
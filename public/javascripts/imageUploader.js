  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
          // Render title input
          var input = $('<input />');
          input.attr({'type': 'text', 'id': 'image-' + i, 'placeholder': 'input a title'});
          input.prependTo(span);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);

$('#upload-image').click(function(){
  var files = $('#files')[0].files;

  // Uploading - for Firefox, Google Chrome and Safari
  xhr = new XMLHttpRequest();
  xhr.open("post", "/image/upload", true);

  // Set appropriate headers
  xhr.setRequestHeader("Content-Type", "multipart/form-data");
  xhr.setRequestHeader("X-File-Name", files[0].name);
  xhr.setRequestHeader("X-File-Size", files[0].size);
  xhr.setRequestHeader("X-File-Type", files[0].type);

  // Send the file (doh)
  xhr.send(files);
});

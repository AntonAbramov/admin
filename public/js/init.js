window.onload = function () {

  var form = document.getElementById('comment-form');

  form.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    var form = document.getElementById('comment-form');
    var x = {
      data : serializeForm(form),
      type : 'post',
      callback: function (data) {
        console.log('response=' + data);
      }
    };

    ajax('/commentslist', x);
  }



  function serializeForm(form) {
    if (form) {
      var i = 0,
          l = form.length,
          result = '';

      for (i; i < l; i++) {

        var item =  form[i],
          name = item.getAttribute('name');
        if (item.type === 'radio' || item.type === 'checkbox') {
          if (item.checked && name) {
            result += name + ':' + item.value + ',';
          }
        } else if (name) {
          result += name + ':' + item.value.toString() + ',';
        }

      }

      var res = result.substr(0, result.length-1);

      console.log();
      return JSON.stringify(res);

    }
  };

  function ajax(url, options) {
    var xhttp = new XMLHttpRequest(),
        type = options.type ? options.type.toUpperCase() : 'GET',
        isAsync = options.async ? options.async : true,
        data = options.data || '';

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
          options.callback(xhttp.responseText);
        } else {
          options.callback(xhttp.status)
        }

      }
    };
    xhttp.open(type, url, isAsync);

    if (type === 'POST') {
      xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }

    // Prevent IE caching GET requests...
    xhttp.setRequestHeader('If-Modified-Since', new Date((new Date()).setHours(-1)));
    xhttp.send(data);

  };

};


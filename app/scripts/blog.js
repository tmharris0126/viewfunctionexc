// import Store from './app.js'

export default function Blog(){
  // function Test() {
  //     var newE = document.createElement('div');
  //     newE.appendChild(document.createTextNode('Test'));
  //     document.getElementById('#form').appendChild(newE);
  // }
  console.log('Welcome');

  function Construct() {


      var blogInput = {
          type: 'POST',
          url: 'http://tiny-za-server.herokuapp.com/collections/viewfuncterrell',
          contentType: 'application/json',
          data: JSON.stringify(data),
      }

      $.ajax(blogInput).then((data, status, xhr) => {
          callback(data, status, xhr);
      });
      let getInput = {
          type: 'GET',
          url: 'http://tiny-za-server.herokuapp.com/collections/blog',
          contentType: 'application/json',
      };

      $.ajax(blogInput).then((data, status, xhr) => {
          callback(data, status, xhr);
      });
      $('#form').on('submit', function(e) {
          e.preventDefault();

          // add content that will appear in form when input

      })
  }

  }

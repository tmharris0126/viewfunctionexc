import Store from './store.js'

export default function app() {
// a) Create a form that saves a blog post to tiny-za-server. The post should have a title and a body.
// It does not need to display blog posts, just save them. The HTML should exist in a view function.


    let giveMesomething = '<form>Say Something</form>';

    var server = {
        type: 'POST',
        url: 'http://tiny-za-server.herokuapp.com/collections/viewfuncterrell',
        contentType: 'application/json',
        data: JSON.stringify({
            'First Name': '',
            'Last Name': '',
            'Address': '',
            'Phone Number': ''
        }),
        success: function(result) {
            // $('#app').html(result);
        }
    };
    $.ajax(server);

    $('#form').on('submit', function(e) {
      e.preventDefault();

// add content that will appear in form when input
    })

}



// //Example of the most minimal view possible.
//  let defaultView = `<h1>Hello World!</h1>`
//
//  //The default state of this app is nothing, just an empty object.
//  //  Don't worry about adding state until you need to keep track of it across views.
//  let initialState = {
//  };
//
//  const store = new Store(initialState);
//
//  const update = function (state, event, data) {
//    console.log(`Update was called because the '${event}' event was fired.`);
//    if (state === undefined || event === undefined) {
//      console.debug("Error: Something is undefined")
//      console.debug(`State: ${state} | Event: '${event}'`);
//      return;
//    } else {
//      // Your update code goes below here
//
//      if (event === "hello_world") {
//        console.log("hello world!");
//        //Always return the state;
//        return state;
//      }
//
//      // Your update code goes above here
//      console.debug(`Unhandled Event: '${event}'`);
//      return;
//    }
//  };
//
//  const render = function (state, event, data) {
//    // You will want to update this render function to render
//    $('#app').html(html);
//  };
//
//  // Every time an event is fired the update function will run
//  //  and *then* the render function will run after that.
//  store.add(update);
//  store.add(render);
//  store.fire("hello_world"); // Feel free to delete. This is just an example.
// }

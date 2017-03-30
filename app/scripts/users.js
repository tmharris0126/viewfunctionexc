export default function app() {
// a) Create a form that saves a blog post to tiny-za-server. The post should have a title and a body.
// It does not need to display blog posts, just save them. The HTML should exist in a view function.


    let giveMesomething = '<form>Say Something</form>';

    var userInput = {
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
    $.ajax(userInput);

    $('#form').on('submit', function(e) {
      e.preventDefault();

// add content that will appear in form when input
    })

}

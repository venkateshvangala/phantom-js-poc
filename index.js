var server = require('webserver').create();
var webpage = require('webpage');
var _ = require("underscore");

var service = server.listen(9003, function(request, response) {
  var serviceUrl = request.url;
  var page = webpage.create();
  page.viewportSize = { width: 1024, height: 768 };
  page.clipRect = { top: 10, left: 10, bottom: 10, right: 10, width: 1024, height: 768 };

  switch(serviceUrl){
    case '/pdf-with-url':
      var url = 'http://www.google.com/';
      console.log("im inside pdf-with-url route");
      page.open(url, function() {
        page.render("./src/output/clara-test.pdf");
        phantom.exit();
      });
      break;
    case '/pdf-with-content':
      console.log("im inside pdf-with-content route");
      var html = '<html lang="en"> <body> <%=  title %> </body></html>';
      var template = _.template(html.toString())({title: "Hello Clara Team.."});
      // Your template string goes in template.
      page.content =  template;
      page.setContent(page.content, page);
      page.open(template, function() {
        page.render("./src/output/clara-content-test.pdf");
        phantom.exit();
      });
      break;
  }
})

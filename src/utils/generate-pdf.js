

let page = webpage.create();

const generatePDFWithURL = async (url) => {
  page.viewportSize = { width: 1024, height: 768 };
  page.clipRect = { top: 10, left: 10, bottom: 10, right: 10, width: 1024, height: 768 };
  page.open(url, function() {
    page.render("../output/clara-test.pdf");
    phantom.exit();
  });
}

export { generatePDFWithURL };

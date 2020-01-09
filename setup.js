// setup.js
module.exports = function (Handlebars) {
  Handlebars.registerHelper('custom', function (context, options) {
    return 'custom helpers!'
  })
}

// custom-template.hbs
// Now you can use {{custom}}
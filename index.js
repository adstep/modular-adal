// Expose the AuthenticationContext import on the window object.
// This makes it available for iframes calling window.parent.AuthenticationContext.
window.AuthenticationContext = require('adal-angular/lib/adal.js');

module.exports = window.AuthenticationContext;
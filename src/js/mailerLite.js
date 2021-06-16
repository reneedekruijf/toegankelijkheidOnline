(function (m, a, i, l, e, r) {
  m['MailerLiteObject'] = e; function f() {
    var c = { a: arguments, q: [] }; var r = this.push(c); return "number" != typeof r ? r : f.bind(c.q);
  }
  f.q = f.q || []; m[e] = m[e] || f.bind(f.q); m[e].q = m[e].q || f.q; r = a.createElement(i);
  var _ = a.getElementsByTagName(i)[0]; r.async = 1; r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
  _.parentNode.insertBefore(r, _);
})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

var ml_account = ml('accounts', '3023458', 'e8q5w0m6i5', 'load');

//TODO: onderstaande moet ik plakken in de uiteindelijke js build
// function ml_webform_success_3847912() { try { window.top.location.href = "https://www.toegankelijkheidonline.nl/pages/gratispdf-verzonden.html" } catch (n) { window.location.href = "https://www.toegankelijkheidonline.nl/pages/gratispdf-verzonden.html" } }
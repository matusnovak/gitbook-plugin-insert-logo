require(['gitbook', 'jQuery'], function (gitbook, $) {
  var insertLogo = function (url) {
      $('#book-search-input').before('<div class="book-logo"><img src=\"' + url + '"</div>')
  }
  gitbook.events.bind('start', function (e, config) {
    insertLogo(config['insert-logo']['url'])
  })
})

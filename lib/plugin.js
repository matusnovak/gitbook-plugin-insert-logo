require(['gitbook', 'jQuery'], function (gitbook, $) {
  var insertLogo = function () {
      $('#book-search-input').before('<div class="book-logo"><img src=\"/logo.png\"</div>')
  }
  gitbook.events.bind('start', function (e, config) {})

  gitbook.events.bind('page.change', function (e) {
    insertLogo()
  })
})

'use strict';

if ('serviceWorker' in navigator) {
  // Delay registration until after the page has loaded, to ensure that our
  // precaching requests don't degrade the first visit experience.
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    // Your service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
    // See https://github.com/slightlyoff/ServiceWorker/issues/468
    navigator.serviceWorker.register('service-worker.js').then(function(reg) {
      // updatefound is fired if service-worker.js changes.
      reg.onupdatefound = function() {
        // The updatefound event implies that reg.installing is set; see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        var installingWorker = reg.installing;

        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.
                // It's the perfect time to display a "New content is available; please refresh."
                // message in the page's interface.
                console.log('New or updated content is available.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a "Content is cached for offline use." message.
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });
}

(function() {

  'use strict';

  /**
   * Selectors
   */
  var body = document.body;
  var header = document.querySelector('[data-header]');

  // Settings
  var offsetDefault = header.offsetHeight;
  var easingDefault = Power4.easeInOut;
  var timingDefault = '.6';

  // Classes
  var scrolledClass = 'is-scrolled';

  // Flags
  var isTransitioningPage = false;
  var isPopstate = false;

  // Values
  var yScrollPosition;

  // Get HTML from another URL with XMLHttpRequest()
  var getURL = function (url, success, error) {

    // Feature detection
    if ( !window.XMLHttpRequest ) return;

    // Create new request
    var request = new XMLHttpRequest();

    // Setup callbacks
    request.onreadystatechange = function () {

      // If the request is complete
      if (request.readyState === 4) {

        // If the request failed
        if (request.status !== 200) {
          if (error && typeof error === 'function') {
            error( request.responseText, request );
          }
          return;
        }

        // If the request succeeded
        if (success && typeof success === 'function') {
          success( request.responseText, request );
        }
      }
    };

    // Get the HTML
    request.open( 'GET', url );
    request.send();
  };


  var converter = new showdown.Converter({ tables: true });

  // Change page content
  var loadContent = function(url) {
    getURL(url,function (data) {
      var i = 0;
      // Create element for data
      var wrapper = document.createElement('div');
      wrapper.innerHTML = '<div data-transition-content>' +
        '<section class="section markdown__body">' + converter.makeHtml(data) + '</section>' +
      '</div>';

      var newContent = wrapper.querySelector('[data-transition-content]');

      // Append new page content
      document.querySelector('main').appendChild(newContent);

      var codeBlocks = Array.prototype.slice.call(document.querySelectorAll('pre code.js'));

      for (i = 0; i < codeBlocks.length; i++) {
        hljs.highlightBlock(codeBlocks[i]);
      }
    });
  };

  // Update items according to scroll position
  var updateOnScroll = function(scrollPos) {
    if (scrollPos >= offsetDefault) {
      header.classList.add(scrolledClass);
    } else {
      header.classList.remove(scrolledClass);
    }
  };


  // Handle scroll events
  var scrollEventLoop = function(e) {

    // Get scroll values
    yScrollPosition = window.scrollY;

    // Update header according to window scroll val
    updateOnScroll(yScrollPosition);

    // RAF scrollLoop
    requestAnimationFrame(scrollEventLoop);
  };


  // Animate svg graphic
  var animGraphic = function() {
    var graphicParent = document.querySelector('[data-graphic]');
    var graphicElem = graphicParent.querySelector('svg');
    var graphicChildren = graphicElem.querySelectorAll('circle, rect, path');

    var animGraphicTween = TweenMax.staggerFrom(graphicChildren, timingDefault*2, {
      ease: easingDefault,
      opacity: '0',
      scale: '0.8',
      transformOrigin: 'center center'
    }, 0.05);
  };

  // Animate intro graphic
  if (document.querySelector('[data-graphic]')) {
    animGraphic();
  }

  // Listen for DOMContentLoaded event to init scrollLoop
  window.addEventListener('DOMContentLoaded', scrollEventLoop, false);

  loadContent('https://raw.githubusercontent.com/w-y/ecma262-jison/master/README.md');
})();

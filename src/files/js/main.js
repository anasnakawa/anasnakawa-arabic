/*!
 * ------------------------------
 * anasnakawa.com site's main js
 * http://anasnakawa.com
 * license: MIT license (http://opensource.org/licenses/MIT)
 * ------------------------------
 */

// ------------------------------
// table of content
// ------------------------------
// stretching background
// bootstrap tooltip
// equal height columns
// format dates
// ------------------------------

(function( $ ) {
  
  // es5 strict mode
  'use strict';
  
  // stretching background
  // ---------------------
  if( $(window).width() > 767 ) {
    // $.backstretch('/img/dawn-bg.jpg');    
  }
  
  // equal height columns
  // --------------------
  $(window).load(function() {

  	var $article = $('#appArticle')
  	, $sidebar = $('#appSidebar')
  	, articleHeight = $article.height()
  	, sidebarHeight = $sidebar.height();

  	if( articleHeight < sidebarHeight ) {
  		$article.height( sidebarHeight + 10 );
  	}

  });
  
  // ready
  // -----
  $(function() {
    
    // format dates
    // ------------
    $('.js-format-date').formatDate();
    
    // bootstrap tooltip
    // -----------------
    $('.js-tooltip').tooltip();
  
  });

  
  
})( jQuery );
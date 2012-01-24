/* set up the SNAC.related namespace object if it does not exist yet 
 */

var SNAC = (typeof SNAC !== 'undefined') ? SNAC : {} ;
SNAC.related = (typeof SNAC.related !== 'undefined') ? SNAC.related : {};

/* the action happens from the bottom up in source order */

/* format the result with a {{moustashe}} template */
SNAC.related.stash = (typeof SNAC.related.stash !== 'undefined') ? SNAC.related.stash : function(results){
  // set up SNAC frame
  template = '<div><div><a href="http://socialarchive.iath.virginia.edu/xtf/view?docId={{filename}}">{{identity}}</a></div>';
  template += '{{#dbpedia}}{{dbpedia}}\n{{/dbpedia}}';
  template += '{{#viaf}}{{viaf}}\n{{/viaf}}</div>';
  var snac = $.mustache(template, results);
  snac = $(snac);
  snac.dialog({ 
    autoOpen: false, 
    title: 'related',
    position: ['right', 'bottom']
  }); 
  // click handler
  nd.click(function(){
    if (!snac.dialog('isOpen')) { 
      snac.dialog('open');
    } else {
      snac.dialog('close');
    }
  });
};


/* we have results! add a div to hold the button */
SNAC.related.addDiv = (typeof SNAC.related.addDiv !== 'undefined') ? SNAC.related.addDiv : function(results){
  document.body.style.width = screen.availWidth;
  nd = $('<button id="logo-0fc2" title="related collections">&#x0FC2;</button>');
  nd.css({
    position: "fixed", 
    bottom: 0, 
    'font-size': '150%', 
    right: 0 /* , 
    border: '1px solid',
    width: '1em', 
    'text-align': 'center'  */
  });
  $('body').append(nd);
  nd.button();

  // nd.button({icons: {primary: 'ui-icon-circle-triangle-w'}});
  // jQuery and jQueryUI are set up here
  if (typeof jQuery.mustache == 'undefined') {
    jQuery.getScript('https://raw.github.com/tingletech/snac-related-widget/master/jquery.mustache.js',function(){
      SNAC.related.stash(results);
    });
  } else {
      SNAC.related.stash(results);
  }
};

SNAC.related.grabURL = (typeof SNAC.related.grabURL !== 'undefined') ? SNAC.related.grabURL : function(){
  var hostname = window.location.hostname 
  // library of congress
  // <meta name="DC.identifier" content="http://hdl.loc.gov/loc.music/eadmus.mu010023"
  if (hostname.substr(hostname.length-7)==='loc.gov') {
    return $('meta[name="DC.identifier"]')[0].content;
  }
  // NWDA
  // http://nwda-db.wsulibs.wsu.edu/nwda-search/fstyle.aspx?doc=MTLrs197.xml&t=k&q=fred
  if (hostname.substr(hostname.length-7)==='wsu.edu') {
    return window.location;
  }
  // TODO: Virginia Heritage
  // otherwise OAC
  // this just works for OAC
  return $('div.permlink a')[0].href;
};

SNAC.related.checkSNAC = (typeof SNAC.related.checkSNAC !== 'undefined') ? SNAC.related.checkSNAC : function(){
  // URL of this page
  // url = "http://www.oac.cdlib.org/findaid/ark:/13030/kt0f59q1h4"
  url = SNAC.related.grabURL();  
  // URL of the SNAC query
  url = "http://archive1.village.virginia.edu:8012/rex/snac/indices/sourceEADurlIndex?key=creatorOf&value=" + url
  // 
  url = url + "&callback=?"

  // check if there is a result in SNAC
  $.getJSON(url, function(data) {
    if (data.value.items[0].results) {
      SNAC.related.addDiv(data.value.items[0].results);
    }
  });
};

SNAC.related.setstuff = (typeof SNAC.related.setstuff !== 'undefined') ? SNAC.related.setstuff : function(){
  $('head').append('<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/base/jquery-ui.css" type="text/css" media="all" />');
  if (typeof jQuery.ui == 'undefined') {
    jQuery.getScript('http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js',function(){
      SNAC.related.checkSNAC();
    });
  } else {
    SNAC.related.checkSNAC();
  }
};

(function() {
  if (typeof jQuery == 'undefined') {
    // more or less stolen form jquery core and adapted by paul irish
    function getScript(url,success){
      var script=document.createElement('script');
      script.src=url;
      var head=document.getElementsByTagName('head')[0],
          done=false;
      // Attach handlers for all browsers
      script.onload=script.onreadystatechange = function(){
        if ( !done && (!this.readyState
             || this.readyState == 'loaded'
             || this.readyState == 'complete') ) {
          done=true;
          success();
          script.onload = script.onreadystatechange = null;
          head.removeChild(script);
        }
      };
      head.appendChild(script);
    }
    getScript('https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js', function() {
      if (typeof jQuery=='undefined') { 
      } else {
        SNAC.related.setstuff();
      }
    });
  } else { 
    SNAC.related.setstuff();
  }
})();

/**
* exports for commonJS modules (node.js)
*/
if ( typeof exports != "undefined" ) {
    exports.SNAC.related = SNAC.related;
}

/**
Copyright (c) 2012, Regents of the University of California
All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, 
  this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, 
  this list of conditions and the following disclaimer in the documentation 
  and/or other materials provided with the distribution.
- Neither the name of the University of California nor the names of its
  contributors may be used to endorse or promote products derived from this 
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE. 
*/

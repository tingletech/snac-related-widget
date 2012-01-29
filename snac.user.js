// ==UserScript==
// @name snac-related-widget
// @description show related collections
// @match http://oac.cdlib.org/findaid/*
// @match http://www.oac.cdlib.org/findaid/*
// @match http://oac.cdlib.org/view?docId=*
// @match http://www.oac.cdlib.org/view?docId=*
// @match http://findingaids.loc.gov/*
// @match http://nwda-db.wsulibs.wsu.edu/findaid*
// @match http://ead.lib.virginia.edu/*
// @namespace https://github.com/tingletech/snac-related-widget
// @version 0.0.1
// ==/UserScript==

var body = document.body; 
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://raw.github.com/tingletech/snac-related-widget/master/snac-launch.js";
body.appendChild(script);


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


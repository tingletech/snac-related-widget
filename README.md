# SNAC Widget

## Use Case
This repository has front end code for the related items widget.  The widget can be run as a user script.

## User Script

[`snac.user.js`](https://raw.github.com/tingletech/snac-related-widget/master/snac.user.js)

This user script should work on 
_FireFox_ with [Greasmonkey](http://www.greasespot.net/) or [scriptish](http://scriptish.org/)

_Safari_ < 5.1 with [SIMple Bundle Loader](http://www.culater.net/software/SIMBL/SIMBL.php) 
and [Greasekit](http://8-p.info/greasekit/)

_Safari_ = 5.1 with [NinjaKit](http://d.hatena.ne.jp/os0x/20100612/1276330696)

_Chromium_ and _Google_Chrome_ (version 4 and higher) have built-in support for Greasemonkey-style user scripts.

## Launch Script

[`snac-launch.js`](https://github.com/tingletech/snac-related-widget/blob/master/snac-launch.js)

Inserted into target page.  This **will** a) find the URL for the Collection b) look that URL up in rexster and c) then it will only show the icon if there are related items.

This sketches out what will happen if related items are found http://www.screenr.com/Fz3s

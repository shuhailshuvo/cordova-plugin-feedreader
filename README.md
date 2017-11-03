Feed Reader Plugin for Cordova
==============================

Plugin for Cordova (or PhoneGap) 3.0+ to read rss feeds.


How does it work?
-----------------

This plugin enables developers to read rss from various sources.

If you find that the plugin doesn't work as you might like on a specific device or Android configuration you're using, don't forget that this project is open source, so feel free to fork the project and adapt it to work in any way you like!

Installation
------------

**Cordova**

`cordova plugin add https://github.com/shuhailshuvo/cordova-plugin-feedreader.git`

**PhoneGap**

`phonegap local plugin add https://github.com/shuhailshuvo/cordova-plugin-feedreader.git`

Code example
------------

Using the plugin in your app is very easy:

```js
function successFunction()
{
    console.info("It worked!");
}

function errorFunction(error)
{
    console.error(error);
}

FeedReader.read(url, successFunction, errorFunction);

``

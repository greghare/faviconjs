var faviconLinks = document.getElementsByClassName("favicon");

for(var i = 0; i < faviconLinks.length; i++) {

    console.log("Adding favicon to: " + faviconLinks[i].href);    
    
    // Create the favicon img
    var favicon = document.createElement("img");
    favicon.className = "favicon-img";
    favicon.style.verticalAlign = "middle";
    favicon.style.marginRight = "5px";   
    favicon.style.height = "16px";

    // Get the favicon SRC for the given domain, and assign it to the favicon src
    var faviconSRC = getFavicon(getDomain(faviconLinks[i].href), [ 'ico' ]);
    favicon.src = faviconSRC;

    faviconLinks[i].insertBefore( favicon, faviconLinks[i].firstChild );
}


function getDomain(url) {
    var parser = document.createElement('a');
    parser.href = url;
    parser.protocol; // => "http:"
    parser.hostname; // => "example.com"

    return parser.protocol + "//" + parser.hostname + "/";
}

// Returns an array of favicons at the given domain with the
// specified file types
function getFavicons(domain, fileTypes) {

    var fav = new Image();
    var icons = [];

    for(var i = 0; i < fileTypes.length; i++)
    {
        var path = domain + "favicon." + fileTypes[i];
        fav.onload = icons.push(path);
        fav.src = path;
    }

    return icons;
}

// Returns a single favicon at the given domain from any of
// the specified file types
function getFavicon(domain, fileTypes) {
    return getFavicons(domain, fileTypes)[0]; // first favicon
}

function getSearchUrl (o) {

    function searchPrefix (input) {
        return (o.indexOf(input + ' ') == 0);
    }

    if (o.indexOf(' ') > 0 || o.indexOf('.') < 0) {

        //Define custom search prefixes
        if (searchPrefix("g")) {
            return 'http://www.google.com/search?q=' + o.substring(2);
        } else if (searchPrefix("aw")) {
            return 'https://wiki.archlinux.org/index.php/Special:Search?fulltext=Search&search=%s' + o.substring(3)
        } else if (searchPrefix("ck")) {
            return 'http://www.chefkoch.de/rs/s0/' + o.substring(3).replace(" ","+") + "/Rezepte.html"
        } else if (searchPrefix("nzb")) {
            return 'HTTP://nzbindex.com/search/?sort=size&minsize=100&q=' + o.substring(4)
        //} else if (searchPrefix("XXX")) {
        //    return '<SEARCH URL>' + o.substring(2)
        } else {
            return 'http://www.google.com/search?q=' + o;
        }
    } else {
        if(o.indexOf(':') < 0) o = 'http://' + o
        return o;
    }
}

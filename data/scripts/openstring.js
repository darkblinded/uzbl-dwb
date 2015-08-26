function getSearchUrl (o) {

    function searchPrefix (input) {
        return (o.indexOf(input + ' ') == 0);
    }

    if (o.indexOf(' ') > 0 || o.indexOf('.') < 0) {

        //Define custom search prefixes
        if (searchPrefix("g")) {
            return 'http://www.google.com/search?q=' + o.substring(2);
        } else {
            return 'http://www.google.com/search?q=' + o;
        }
    } else {
        if(o.indexOf(':') < 0) o = 'http://' + o
        return o;
    }
}

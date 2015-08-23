function getSearchUrl (o) {

    function searchPrefix (input) {
        return (o.indexOf(input + ' ') == 0);
    }

    if (o.indexOf(' ') > 0 || o.indexOf('.') < 0) {

        //Define custom search prefixes
        if (searchPrefix("g")) {
            //window.location = 'http://www.google.com/search?q=' + o.substring(2)
            return 'http://www.google.com/search?q=' + o.substring(2);
        //} else if () {
        //    window.location = '<SEARCH URL>' + o.substring(2)
        } else {
            //window.location = 'http://www.google.com/search?q=' + o
            return 'http://www.google.com/search?q=' + o;
        }
    } else {
        //test if url resolves
        if(o.indexOf(':') < 0) o = 'http://' + o
        //window.location = o;
        return o;
    }
}

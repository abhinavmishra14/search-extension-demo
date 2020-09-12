//Escape special character to allow search keyword containing special chars
var escapeRegExp;
(function () {
  // Referring to the table here:
  //https://lucene.apache.org/core/2_9_4/queryparsersyntax.html
  //Escaping Special Characters
  //+ - && || ! ( ) { } [ ] ^ " ~ * ? : \

  //escaping with character '\\'
  var specialChars = [
          "-"
        , "+"
        , "?"
        , "\\"
        , "|"
		, "&"
		, "!"
		, "*"
		, "\""
		
      ]
    //escaping with character '\'
	, specialCharSlash = [
          "["
        , "]"
        , "{"
        , "}"
        , "("
        , ")"
        , "^"
		, "!"
		, ":"
		, "~"
		, "`"
		, "<"
		, ">"
      ]

      // escape every character with '\'
      // even though only some strictly require it when inside of []
    , regex = RegExp('[' + specialChars.join('\\') + ']', 'g')
	, regexChars = RegExp('[' + specialCharSlash.join('\\') + ']', 'g')
    ;

    escapeRegExp = function (str) {
    	str = str.toString();
		if (logger.isLoggingEnabled()) {
			logger.log("escapechars.js - escapeRegExp - input: "+ str);
		}
    	//replacing with '\\' characters
    	var result = str.replace(regex, "\\\\\\$&");
    	//replacing with '\' characters
    	return result.replace(regexChars, "\\$&");
    };

}());
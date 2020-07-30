  function addFormElem(paramName, fieldName) {
    var paramValue = getParameterByName(paramName);
    var $utmEl = $("<input type='hidden' name='" + fieldName + "' value='" + paramValue + "'>");
    if (paramValue != "") {
      $("form").first().prepend($utmEl);
    }
  }

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  }

  var utmParams = {
    "utm_source"   : "USOURCE",
    "utm_medium"   : "UMEDIUM",
    "utm_campaign" : "UCAMPAIGN",
    "utm_content"  : "UCONTENT",
    "utm_term"     : "UTERM"
  };

  for (var param in utmParams) {
    addFormElem(param, utmParams[param]);
  }
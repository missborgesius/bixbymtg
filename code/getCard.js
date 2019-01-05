module.exports.function = function getCardPrice (cardName) {
 
  function getUrl (cardName){
    var cardName = cardName.toString
    var cardSplitArray = cardName.split(" ")
    var searchUrl = ("https://api.scryfall.com/cards/named?exact=")
    var i;
    for (i = 0; i <= cardSplitArray.length, i++) {
      var searchUrl = searchUrl.concat(cardSplitArray[i])
    }
  return searchUrl
  }

 var Url = getUrl(cardName)
 var cardJson = http.get(Url)
 var cardObject = JSON.parse(cardJson)
 var cardPrice = cardObject[0]
 
 
 return cardPrice
}

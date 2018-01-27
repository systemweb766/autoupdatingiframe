var countup = function(pi, pmin, pmax){
  var i = pi;
  var min = pmin;
  var max = pmax;

  var count = function(){
    if(i === max) { i = min;}
    autoReload(i);
    i++;
    console.log(i);
    setTimeout(count, 5000);//60000msで一画面リロード
  }
  var autoReload = function(num) {
    var targetIframeNum = num;
    var iframeTarget = document.getElementsByTagName('iframe')[targetIframeNum];
    var targetUrl = iframeTarget.getAttribute('src');
    return iframeTarget.contentWindow.location.replace(targetUrl);
  }
  count();
}

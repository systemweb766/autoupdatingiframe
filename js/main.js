var countup = function(){
  var i = 0;
  var url = 'https://www.portal-tokyoport.jp/image.php?func=thumbnail&cameraid=1&w=640&h=480&id='; //idなければ付与
  var id = i + 1;
  var min = 1;
  var max = 7;

  var count = function(){
    if(i === max) { i = min;}
    autoReload(i, url, id);
    i++;
    console.log(i);
    setTimeout(count, 10000);//60000msで一画面リロード
  }
  var autoReload = function(num, url, id) {
    var targetIframeNum = num;
    var targetUrl = url + id;
    var id = id;
    var iframeTarget = document.getElementsByTagName('iframe')[targetIframeNum];
    return iframeTarget.contentWindow.location.replace(targetUrl);
  }
  count();
}

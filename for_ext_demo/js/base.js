function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
chrome.storage.local.get({owner:'br0ws3r-ext',repo:'master'},function(i){
	$('#bas3').attr('href', 'https://cdn.jsdelivr.net/gh/'+ i.owner +'/'+ i.repo +'/master/for_ext_demo/');
	var page_type = get('_type');
	$('head').append('<script type="text/javascript" src="/js/' + page_type +'.js">');
	//document.title += ' | ' + page_type;
});
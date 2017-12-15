$(document).ready(function(){
  //console.log(map);
  $('.dropdown-submenu a.submenu-title').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
function reloadhtml(){
  	url = window.location.href;
  	if (url.includes("article")) {
  		article_url = url.replace("/#", "");
      url = url.split("#");
      item_id = url[1];
      marker = items[item_id];
      var articleicon = "<img class='article-marker' src='" + marker.iconURL  + "' onclick='myFunction()'>";
  		$.get(article_url, function(data){
          var index = data.indexOf("</h1>");
          data = data.slice(0, index) + articleicon + data.slice(index,);
          $("#sidebar-content").html(data);
        });
    marker.openPopup();
  	} 
};

function myFunction(){
  url = window.location.href;
  url = url.split("#");
  item_id = url[1];
  marker = items[item_id];
  marker.togglePopup();
};

function onClick(url){
    //bug where if not on map page can't get markers
      item_id = url;
      article_url = window.location.origin + window.location.pathname + item_id;
      marker = items[item_id];
      var articleicon = "<img class='article-marker' src='" + marker.iconURL  + "' onclick='myFunction()'>";
      $.get(article_url, function(data){
          var index = data.indexOf("</h1>");
          data = data.slice(0, index) + articleicon + data.slice(index,);
          $("#sidebar-content").html(data);
        });
    marker.openPopup();
}



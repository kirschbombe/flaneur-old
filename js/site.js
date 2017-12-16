$(document).ready(function(){
  //console.log(map);
  $('a.submenu-title').on("click", function(e){
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
  	}  else if (url.includes('#') == true) {
      page_url = url.replace("/#", "");
      $.get(page_url, function(data){
        $("#sidebar-content").html(data);
      });
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
    if (url.includes("article")) {
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
    } else {
    	page_url = window.location.origin + window.location.pathname + url
    	$.get(page_url, function(data){
    		$("#sidebar-content").html(data);
    	});
    }
}

function openMenu() {
	document.getElementById("drawer-menu").style.width = "20%";
}
function expand() {
  submenu = document.getElementById("submenu")
  if (submenu.style.height == '0px' | submenu.style.height == '') {
    submenu.style.height = "70%";
    submenu.style.overflow = 'scroll';
  } else {
    submenu.style.height = "0";
    submenu.style.overflow = 'hidden';
  }
}

function closeMenu() {
	document.getElementById("drawer-menu").style.width = "0";
}



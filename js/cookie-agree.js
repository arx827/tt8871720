

(function(){
		
	var setCookie=function(name,value,days){
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/;SameSite=Lax";
	}
	
	var getCookie = function(c_name){
		if (document.cookie.length>0){
				c_start=document.cookie.indexOf(c_name + "=")
				if (c_start!=-1){ 
					c_start=c_start + c_name.length+1 
					c_end=document.cookie.indexOf(";",c_start)
					if (c_end==-1) c_end=document.cookie.length
					return unescape(document.cookie.substring(c_start,c_end))
				} 
		}
		return ""
	}
	
	var callAjax = function(url, callback){
		var xmlhttp;
		// compatible with IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				callback(xmlhttp.responseText);
			}
		}
		xmlhttp.open("POST", url, true);
		xmlhttp.withCredentials = true;
		xmlhttp.send();
	}

	function appendHtml(el, str) {
		var div = document.createElement('div');
		div.innerHTML = str;
		while (div.children.length > 0) {
		  el.appendChild(div.children[0]);
		}
	}


	if( getCookie('cookieAgree')===""){

	

        function addStyle(styles) { 
			var css = document.createElement('style'); 
			css.type = 'text/css'; 
			if (css.styleSheet)  
				css.styleSheet.cssText = styles; 
			else  
				css.appendChild(document.createTextNode(styles)); 
			document.getElementsByTagName("head")[0].appendChild(css); 
		} 

	  	window.onload = function() { addStyle('#cookie-agree-btn{display:inline-block;}  @media (max-width:767px){ .cookie-agree-innerbox{display:block!important;} #cookie-agree-btn{ display:block; width: 100%;box-sizing: border-box; } }') }; 
	

	  	document.body.insertAdjacentHTML('beforeend',
        '<div id="cookie-agree-box" style="font-family:\'微軟正黑體\';font-size:14px; padding:15px 0 10px; position:fixed; left:0; right:0; bottom:0; z-index:880; background:rgba(0,0,0,0.9);line-height: 1.5;">' +
			'<div class="cookie-agree-innerbox" style="display:flex;margin:0 auto; color:white; padding:0px 3%">'+
				'<div>為提供您最佳個人化且即時的服務，本網站透過使用Cookies記錄與存取您的瀏覽使用訊息。當您繼續瀏覽(使用)本網站或關閉本視窗，即表示您同意Cookies技術支援。更多資訊請參閱<a href="https://www.fubon.com/life/statement/privacy/web-privacy/" target="_blank" style="color:#ff5500;text-decoration: none;">隱私權保護聲明</a>。<a href="https://www.fubon.com/life/direct/close-cookie.html" target="_blank" style="color:#ff5500;text-decoration: none;">如何停止Cookies蒐集</a>。</div>'+
				'<div><button type="button" id="cookie-agree-btn" style=" padding:5px 30px; background:#0094c3; white-space:nowrap; border:none; border-radius:5px; color:white; font-size:14px;">同意</button></div>' +
            '</div>' +
            '<button id="close-cookie-agree-box" type="button" style="font-family:\'微軟正黑體\';position: absolute;top: 5px;right: 5px;border:none; background:none; color:#fff; font-size:14px;">╳</button>' +
		'</div>'); 

		appendHtml(document.body, '<div id="cookie-agree-padding" style="height:'+document.getElementById('cookie-agree-box').clientHeight+'px;display:none;"></div>');
		//document.getElementsByTagName('body')[0].style.paddingBottom=document.getElementById('cookie-agree-box').clientHeight+'px';

		window.addEventListener('resize', function(event){
			//document.getElementsByTagName('body')[0].style.paddingBottom=document.getElementById('cookie-agree-box').clientHeight+'px';			
			document.getElementById('cookie-agree-padding').style.height=document.getElementById('cookie-agree-box').clientHeight+'px';
		});

		document.getElementById('close-cookie-agree-box').addEventListener('click',function(){
			document.getElementById('cookie-agree-box').style.display='none';
			document.getElementById('cookie-agree-padding').style.height='0';
		});

		var url="";
		var hostName=location.host;
		if(hostName.indexOf("www.test.fubon.com")>=0 || hostName.indexOf("direct.fbl.com.tw")>=0 || hostName.indexOf("localhost")>=0){
			url="https://direct.fbl.com.tw:1200/m/Home/AggreePrivacyPolicy";
		}else{
			url="https://direct.fubonlife.com.tw/m/Home/AggreePrivacyPolicy";
		}

		document.getElementById('cookie-agree-btn').addEventListener('click',function(){
			callAjax(url, function(data){
				setCookie('cookieAgree','true',3650);
				document.getElementById('cookie-agree-box').style.display="none";
				document.getElementById('cookie-agree-padding').style.height='0';
			});
			return false;
		});
	}
})();
	




function Translate() { 

	//initialization
	this.init =  function(attribute, lng){
		this.attribute = attribute;
		this.lng = lng;	
		ProjectTranslate(lng);
		ResumeTranslate(lng);
	}
	//translate 
	this.process = function(){
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "assets/lng/"+this.lng+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key == "placeholder_name" || key == "placeholder_email" || key == "placeholder_message") {
							elem.setAttribute("placeholder", LngObject[key]);
						}else if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}
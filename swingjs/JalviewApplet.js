// Jalview Priliminary applet-generation code.
// author: Bob Hanson hansonr@stolaf.edu

Jalview = { 
	jvid : 0 
}

$(document).ready(function() {
	if (document.location.href.toLowerCase().indexOf("_use=java") < 0)
		Jalview.processAllAppletElements(self.JalviewInfo);
});

 
Jalview.processAllAppletElements = function(PageInfo) {
 	var applets = document.getElementsByTagName("applet");
	var apps=[];
 	for (var i = 0; i < applets.length; i++)
		apps[i] = applets[i];
 	for (var i = 0; i < apps.length; i++) {
 		Jalview.processAppletElement(apps[i], PageInfo);
 	}
}
 
Jalview.processAppletElement = function(element, UserInfo) {
	
	var code = element.getAttribute("code");
	var parent = element.parentElement;
	if (code != "jalview.bin.JalviewLite") {
		return;
	}

 	var Info = {
		code: null,
		main: "jalview.bin.Jalview",
		core: "NONE",
		resourcePath: "examples",
		readyFunction: null,
		serverURL: 'https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php',
		j2sPath: 'swingjs/j2s',
		console:'sysout',
		startButton:'Start Jalview',
		hideDesktop:true,
		embedInternalFrames:false,
		idPrefix:'%ID%',
		allowJavascript: true,
	}

	var text = element.outerHTML;
	var args = Info.args = text.replace(/[\n\t]/g, " ").split("<param ");

	// overwrite default parameters with UserInfo (global JalviewInfo):
 
	if (UserInfo) {
		for (var i in UserInfo) {
			Info[i] = UserInfo[i];
		}
	}
	// generate name/value pairs for parameters in Applet tag

	Info.j2sAppletID = Info.j2sAppletID 
		|| element.getAttribute("name") 
		|| element.getAttribute("id") 
		|| Info.idPrefix.replace(/%ID%/g, "jalview" + ++Jalview.jvid);
	
	//Info.jalview_SCREEN_X= 10,Info.jalview_SCREEN_Y= 10;
	//Info.jalview_EMBEDDED= true;
	//Info.jalview_SCREEN_WIDTH = 400;
	//Info.jalview_SCREEN_HEIGHT = 100;

	
	var addParam = function(key,value) {
		args.push("name=\"" + key + "\" value=\"" + value + "\""); 
	}


	for (var i in Info) {
		var v = ("" + Info[i] || "null").replace(/\"/g,"'");
		addParam("Info." + i, v);
	}
	
	

	element.JalviewInfo = Info;
	var btn = document.createElement("button");
	btn.appletElement = element;
	var a = element.getAttribute("width");
	//a && (btn.style.width = (a || 140) + "px");
	a = element.getAttribute("height");
	//a && (btn.style.height = (a || 25) + "px");
	btn.jvparent = parent;
	if (Info.startButton) {
		btn.innerHTML = Info.startButton;
		parent.replaceChild(btn, element); 
		$(btn).click(Jalview.doStartJalview);
	} else {
		parent.removeChild(element);
		Jalview.doStartJalview({target:btn});
	}
}
 


Jalview.doStartJalview = function(e) {
	e.target.disabled = true;
 	var element = e.target.appletElement;
 	var parent = e.target.jvparent;
	var Info = element.JalviewInfo;
	var id = Info.j2sAppletID;
	var d = document.createElement("div");
	d.id = id + "-desktop-div";
	if (Info.hideDesktop) {
		d.style.display = "none";
		d.style.width = d.style.height = "0px";
	} else {
		d.style.width = "300px", d.style.height = "70px";
	}
	parent.appendChild(d);
	d = document.createElement("div");
	d.id = id + "-alignment-div";
	if (Info.embedInternalFrames) {
// TODO
	} else {
		d.style.display = "none";
		d.style.width = d.style.height = "0px";
	}
	if (Info.allowJavascript) {
		if (Info.readyFunction) {
			var c = Info.readyFunction;
			Info.readyFunction = function(a){
				Jalview._setAPI(a);
				c.apply(null, arguments);			
			}
		} else {
			Info.readyFunction = function(a) {Jalview._setAPI(a)};
		}
	}
	var app = SwingJS.getApplet(id, Info);
}

Jalview._setAPI = function(app) {
	
	// Create a map of nonqualified methods to qualified methods
	// based on parameter type.
	var cl = Class.forName$S("jalview.bin.Jalview");
	if (!cl.$clazz$.getInstance$) {
		System.err.println(app.__Info.main + " has no getInstance() method; interface creation skipped.");
		return;
	}
	var instance = app._instance = cl.$clazz$.getInstance$();
	var apply = function(args, methods) {
		return methods[args.length].apply(instance, args);
	}
	var getMap = function(cl) {
		var methods = cl.getMethods$();
		var p = cl.$clazz$.prototype;
		var map = {};
		for (var i = 0, n = methods.length; i < n; i++) {
			var qname = methods[i].name; 
			if (cl.$clazz$[qname])
				continue; // static method
			var s = qname.split("$");
			var name = s[0];
			if (!name)
				continue; // $init$, $cinit$
			if (app[name]) {
				name += "$";
				System.err.println(app._id + "." + name + " is " + qname);
			};
			(m = map[name])||(m = map[name] = []);
			var j = p[qname].length;
			if (m[j]) {
				System.err.println(app._id + ".instance." + qname + " must be called directly.");
				app[qname] = p[qname];
			} else {
				System.out.println(app._id + "." + name + "(" + j + ") aliases " + app._id + ".instance." + qname);
				m[j] = p[qname];
			}
		}
		return map;
	}
	var getFunc = function(map,i) {
		return function(){return apply(arguments,map[i])};
	}
	var map = getMap(Clazz._4Name(app.__Info.main));
	var n = 0;
	for (var i in map) {
		n++;
		app[i] = getFunc(map,i);
	}
	System.err.println(app._id + " contains " + n + " JavaScript interface methods");
}

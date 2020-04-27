(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'javajs.util.Base64']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSImage", null, 'java.awt.image.BufferedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['src']]]

Clazz.newMeth(C$, 'c$$IA$I$I$S', function (argb, width, height, src) {
;C$.superclazz.c$$I$I$I.apply(this,[width, height, 2]);C$.$init$.apply(this);
this.src=src;
this.秘setPixels$IA(argb);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$S', function (pixelBytes, width, height, src) {
;C$.superclazz.c$$I$I$I.apply(this,[width, height, 2]);C$.$init$.apply(this);
this.src=src;
this.秘setPixels$IA(pixelBytes);
}, 1);

Clazz.newMeth(C$, 'getDOMImage$BA$S', function (b, type) {
var dataurl="data:image/" + type + ";base64," + $I$(1).getBase64$BA(b).toString() ;
var img=null;

img = new Image(this.width, this.height); //if (this.callback)
img.onload = this.callback; img.src = dataurl;
this.秘imgNode=img;
});

Clazz.newMeth(C$, 'setComponent$java_awt_Component', function (c) {
this.秘component=c;
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

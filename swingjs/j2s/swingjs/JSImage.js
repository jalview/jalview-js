(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'javajs.util.Base64']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSImage", null, 'java.awt.image.BufferedImage');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.src=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IA$I$I$S', function (argb, width, height, src) {
C$.superclazz.c$$I$I$I.apply(this, [width, height, 2]);
C$.$init$.apply(this);
this.src=src;
this._pix=argb;
}, 1);

Clazz.newMeth(C$, 'getDOMImage$BA$S', function (b, type) {
var dataurl="data:image/" + type + ";base64," + $I$(1).getBase64$BA(b).toString() ;
var img=null;
{
img = new Image(this.width, this.height);
//if (this.callback) img.onload = this.callback;
img.src = dataurl;
}
this._imgNode=img;
});

Clazz.newMeth(C$, 'setComponent$java_awt_Component', function (c) {
this._component=c;
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

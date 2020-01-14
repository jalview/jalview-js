(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FilteredImageSource", null, null, 'java.awt.image.ImageProducer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.src=null;
this.filter=null;
this.proxies=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ImageProducer$java_awt_image_ImageFilter', function (orig, imgf) {
C$.$init$.apply(this);
this.src=orig;
this.filter=imgf;
}, 1);

Clazz.newMeth(C$, 'addConsumer$java_awt_image_ImageConsumer', function (ic) {
if (this.proxies == null ) {
this.proxies=Clazz.new_($I$(1));
}if (!this.proxies.containsKey$O(ic)) {
var imgf=this.filter.getFilterInstance$java_awt_image_ImageConsumer(ic);
this.proxies.put$TK$TV(ic, imgf);
this.src.addConsumer$java_awt_image_ImageConsumer(imgf);
}});

Clazz.newMeth(C$, 'isConsumer$java_awt_image_ImageConsumer', function (ic) {
return (this.proxies != null  && this.proxies.containsKey$O(ic) );
});

Clazz.newMeth(C$, 'removeConsumer$java_awt_image_ImageConsumer', function (ic) {
if (this.proxies != null ) {
var imgf=this.proxies.get$O(ic);
if (imgf != null ) {
this.src.removeConsumer$java_awt_image_ImageConsumer(imgf);
this.proxies.remove$O(ic);
if (this.proxies.isEmpty$()) {
this.proxies=null;
}}}});

Clazz.newMeth(C$, 'startProduction$java_awt_image_ImageConsumer', function (ic) {
if (this.proxies == null ) {
this.proxies=Clazz.new_($I$(1));
}var imgf=this.proxies.get$O(ic);
if (imgf == null ) {
imgf=this.filter.getFilterInstance$java_awt_image_ImageConsumer(ic);
this.proxies.put$TK$TV(ic, imgf);
}this.src.startProduction$java_awt_image_ImageConsumer(imgf);
});

Clazz.newMeth(C$, 'requestTopDownLeftRightResend$java_awt_image_ImageConsumer', function (ic) {
if (this.proxies != null ) {
var imgf=this.proxies.get$O(ic);
if (imgf != null ) {
imgf.resendTopDownLeftRight$java_awt_image_ImageProducer(this.src);
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

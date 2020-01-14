(function(){var P$=Clazz.newPackage("jalview.javascript"),I$=[];
var C$=Clazz.newClass(P$, "MouseOverListener", null, 'jalview.javascript.JSFunctionExec', ['jalview.structure.VamsasListener', 'jalview.javascript.JsCallBack']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._af=null;
this._listener=null;
this.last=null;
this.i=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.last=null;
this.i=-1;
}, 1);

Clazz.newMeth(C$, ['mouseOverSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource','mouseOverSequence$'], function (seq, index, source) {
if (seq !== this.last  || this.i != index ) {
this.last=seq;
this.i=index;
var src=null;
try {
if (source != null ) {
if (Clazz.instanceOf(source, "jalview.appletgui.AlignViewport") && (source).applet.currentAlignFrame.viewport === source  ) {
src=(source).applet.currentAlignFrame;
}}this.executeJavascriptFunction$S$OA(this._listener, Clazz.array(java.lang.Object, -1, [src, seq.getDisplayId$Z(false), "" + (1 + this.i), "" + seq.findPosition$I(this.i)]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("JalviewLite javascript error: Couldn't send mouseOver with handler '" + this._listener + "'" );
if (Clazz.instanceOf(ex, "netscape.javascript.JSException")) {
System.err.println$S("Javascript Exception: " + (ex).getMessage$());
}ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'c$$jalview_bin_JalviewLite$jalview_appletgui_AlignFrame$S', function (applet, af, listener) {
C$.superclazz.c$$jalview_bin_JalviewLite.apply(this, [applet]);
C$.$init$.apply(this);
this._af=af;
this._listener=listener;
}, 1);

Clazz.newMeth(C$, 'getAlignFrame$', function () {
return this._af;
});

Clazz.newMeth(C$, 'getListenerFunction$', function () {
return this._listener;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

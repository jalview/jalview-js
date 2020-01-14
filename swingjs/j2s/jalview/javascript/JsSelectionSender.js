(function(){var P$=Clazz.newPackage("jalview.javascript");
var C$=Clazz.newClass(P$, "JsSelectionSender", null, 'jalview.javascript.JSFunctionExec', ['jalview.structure.SelectionListener', 'jalview.javascript.JsCallBack']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._af=null;
this._listener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_bin_JalviewLite$jalview_appletgui_AlignFrame$S', function (jvlite, af, listener) {
C$.superclazz.c$$jalview_bin_JalviewLite.apply(this, [jvlite]);
C$.$init$.apply(this);
this._af=af;
this._listener=listener;
}, 1);

Clazz.newMeth(C$, ['selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource','selection$'], function (seqsel, colsel, hidden, source) {
try {
var setid="";
var src=this._af;
if (source != null ) {
if (Clazz.instanceOf(source, "jalview.appletgui.AlignViewport") && (source).applet.currentAlignFrame.viewport === source  ) {
src=(source).applet.currentAlignFrame;
}}var seqs=Clazz.array(String, -1, []);
var cols=Clazz.array(String, -1, []);
var strt=0;
var end=(src == null ) ? -1 : src.alignPanel.av.getAlignment$().getWidth$();
if (seqsel != null  && seqsel.getSize$() > 0 ) {
seqs=Clazz.array(String, [seqsel.getSize$()]);
for (var i=0; i < seqs.length; i++) {
seqs[i]=seqsel.getSequenceAt$I(i).getName$();
}
if (strt < seqsel.getStartRes$()) {
strt=seqsel.getStartRes$();
}if (end == -1 || end > seqsel.getEndRes$() ) {
end=seqsel.getEndRes$();
}}if (colsel != null  && !colsel.isEmpty$() ) {
if (end == -1) {
end=colsel.getMax$() + 1;
}cols=Clazz.array(String, [colsel.getSelected$().size$()]);
for (var i=0; i < cols.length; i++) {
cols[i]="" + (1 + colsel.getSelected$().get$I(i).intValue$());
}
} else {
if (seqsel != null  && seqsel.getSize$() > 0 ) {
cols=Clazz.array(String, [2]);
cols[0]="" + (1 + strt) + "-" + (1 + end) ;
};}System.err.println$S("Relaying selection to jsfunction:" + this._listener);
this.executeJavascriptFunction$S$OA(this._listener, Clazz.array(java.lang.Object, -1, [src, setid, this.jvlite.arrayToSeparatorList$SA(seqs), this.jvlite.arrayToSeparatorList$SA(cols)]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Jalview Javascript exec error: Couldn't send selection message using function '" + this._listener + "'" );
ex.printStackTrace$();
if (Clazz.instanceOf(ex, "netscape.javascript.JSException")) {
System.err.println$S("Javascript Exception: " + (ex).getCause$().toString());
}} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getAlignFrame$', function () {
return this._af;
});

Clazz.newMeth(C$, 'getListenerFunction$', function () {
return this._listener;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

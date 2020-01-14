(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.util.C','org.jmol.modelset.Text','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Hover", null, 'org.jmol.shape.TextShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hoverText=null;
this.atomIndex=0;
this.xy=null;
this.text=null;
this.labelFormat=null;
this.atomFormats=null;
this.specialLabel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.atomIndex=-1;
this.labelFormat="%U";
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
this.isHover=true;
var font3d=this.vwr.gdata.getFont3DFSS$S$S$F("SansSerif", "Plain", 12);
var bgcolix=$I$(1).getColixS$S("#FFFFC3");
var colix=4;
this.currentObject=this.hoverText=$I$(2).newLabel$org_jmol_viewer_Viewer$javajs_awt_Font$S$H$H$I$F(this.vwr, font3d, null, colix, bgcolix, 4, 0);
this.hoverText.adjustForWindow=true;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if ("target" == propertyName) {
if (value == null ) this.atomIndex=-1;
 else {
this.atomIndex=(value).intValue$();
}return;
}if ("text" == propertyName) {
this.text=value;
if (this.text != null  && this.text.length$() == 0 ) this.text=null;
return;
}if ("specialLabel" == propertyName) {
this.specialLabel=value;
return;
}if ("atomLabel" == propertyName) {
var text=value;
if (text != null  && text.length$() == 0 ) text=null;
var count=this.vwr.ms.ac;
if (this.atomFormats == null  || this.atomFormats.length < count ) this.atomFormats=Clazz.array(String, [count]);
for (var i=bsSelected.nextSetBit$I(0); i >= 0; i=bsSelected.nextSetBit$I(i + 1)) this.atomFormats[i]=text;

return;
}if ("xy" == propertyName) {
this.xy=value;
return;
}if ("label" == propertyName) {
this.labelFormat=value;
if (this.labelFormat != null  && this.labelFormat.length$() == 0 ) this.labelFormat=null;
return;
}if (propertyName == "deleteModelAtoms") {
if (this.atomFormats != null ) {
var firstAtomDeleted=((value)[2])[1];
var nAtomsDeleted=((value)[2])[2];
this.atomFormats=$I$(3).deleteElements$O$I$I(this.atomFormats, firstAtomDeleted, nAtomsDeleted);
}this.atomIndex=-1;
return;
}this.setPropTS$S$O$javajs_util_BS(propertyName, value, null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

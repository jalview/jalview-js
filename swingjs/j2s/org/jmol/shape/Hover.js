(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.util.C','org.jmol.modelset.Text','javajs.util.AU']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Hover", null, 'org.jmol.shape.TextShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomIndex=-1;
this.labelFormat="%U";
},1);

C$.$fields$=[['I',['atomIndex'],'S',['text','labelFormat','specialLabel'],'O',['hoverText','org.jmol.modelset.Text','xy','javajs.util.P3i','atomFormats','String[]']]]

Clazz.newMeth(C$, 'initShape$', function () {
this.isHover=true;
var font3d=this.vwr.gdata.getFont3DFSS$S$S$F("SansSerif", "Plain", 12);
var bgcolix=$I$(1).getColixS$S("#FFFFC3");
var colix=4;
this.currentObject=this.hoverText=$I$(2).newLabel$org_jmol_viewer_Viewer$org_jmol_util_Font$S$H$H$I$F(this.vwr, font3d, null, colix, bgcolix, 4, 0);
this.hoverText.adjustForWindow=true;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if ("target" === propertyName ) {
if (value == null ) this.atomIndex=-1;
 else {
this.atomIndex=(value).intValue$();
}return;
}if ("text" === propertyName ) {
this.text=value;
if (this.text != null  && this.text.length$() == 0 ) this.text=null;
return;
}if ("specialLabel" === propertyName ) {
this.specialLabel=value;
return;
}if ("atomLabel" === propertyName ) {
var text=value;
if (text != null  && text.length$() == 0 ) text=null;
var count=this.vwr.ms.ac;
if (this.atomFormats == null  || this.atomFormats.length < count ) this.atomFormats=Clazz.array(String, [count]);
for (var i=bsSelected.nextSetBit$I(0); i >= 0; i=bsSelected.nextSetBit$I(i + 1)) this.atomFormats[i]=text;

return;
}if ("xy" === propertyName ) {
this.xy=value;
return;
}if ("label" === propertyName ) {
this.labelFormat=value;
if (this.labelFormat != null  && this.labelFormat.length$() == 0 ) this.labelFormat=null;
return;
}if (propertyName === "deleteModelAtoms" ) {
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

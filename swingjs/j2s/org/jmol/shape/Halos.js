(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.util.C','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Halos", null, 'org.jmol.shape.AtomShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colixSelection=2;
this.colixHighlight=10;
},1);

C$.$fields$=[['H',['colixSelection','colixHighlight'],'O',['bsHighlight','javajs.util.BS']]]

Clazz.newMeth(C$, 'initState$', function () {
this.translucentAllowed=false;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("translucency" == propertyName) return;
if ("argbSelection" == propertyName) {
this.colixSelection=(function(a,f){return f.apply(null,a)})([(value).intValue$()],$I$(1).getColix$I);
return;
}if ("argbHighlight" == propertyName) {
this.colixHighlight=(function(a,f){return f.apply(null,a)})([(value).intValue$()],$I$(1).getColix$I);
return;
}if ("highlight" == propertyName) {
this.bsHighlight=value;
return;
}if (propertyName == "deleteModelAtoms") {
$I$(2).deleteBits$javajs_util_BS$javajs_util_BS(this.bsHighlight, bs);
}this.setPropAS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bs) {
var bsSelected=(this.vwr.getSelectionHalosEnabled$() ? this.vwr.bsA$() : null);
for (var i=this.ac; --i >= 0; ) this.atoms[i].setShapeVisibility$I$Z(this.vf, bsSelected != null  && bsSelected.get$I(i)  || this.mads != null  && this.mads[i] != 0  );

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

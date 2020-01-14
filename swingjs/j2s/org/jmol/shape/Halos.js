(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.util.C','org.jmol.util.BSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Halos", null, 'org.jmol.shape.AtomShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.colixSelection=0;
this.bsHighlight=null;
this.colixHighlight=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.colixSelection=2;
this.colixHighlight=10;
}, 1);

Clazz.newMeth(C$, 'initState$', function () {
this.translucentAllowed=false;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("translucency" == propertyName) return;
if ("argbSelection" == propertyName) {
this.colixSelection=$I$(1).getColix$I((value).intValue$());
return;
}if ("argbHighlight" == propertyName) {
this.colixHighlight=$I$(1).getColix$I((value).intValue$());
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

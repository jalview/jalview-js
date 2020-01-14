(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.models.rna.VARNAPoint',['java.awt.geom.Point2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModeleBase", null, null, ['java.io.Serializable', 'Comparable']);
C$.XML_VAR_TYPE_NAME=null;
C$.XML_VAR_INDEX_NAME=null;
C$.XML_VAR_LABEL_NAME=null;
C$.XML_VAR_VALUE_NAME=null;
C$.XML_VAR_POSITION_NAME=null;
C$.XML_VAR_CENTER_NAME=null;
C$.XML_VAR_NUMBER_NAME=null;
C$.XML_VAR_CUSTOM_DRAWN_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.XML_VAR_TYPE_NAME="type";
C$.XML_VAR_INDEX_NAME="index";
C$.XML_VAR_LABEL_NAME="label";
C$.XML_VAR_VALUE_NAME="val";
C$.XML_VAR_POSITION_NAME="pos";
C$.XML_VAR_CENTER_NAME="center";
C$.XML_VAR_NUMBER_NAME="num";
C$.XML_VAR_CUSTOM_DRAWN_NAME="custom";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._BP=null;
this._styleBase=null;
this._colorie=null;
this._coords=null;
this._center=null;
this._label=null;
this._value=0;
this._realIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._styleBase=Clazz.new_($I$(1));
this._colorie= Boolean.from(true);
this._coords=Clazz.new_($I$(2));
this._center=Clazz.new_($I$(2));
this._label="";
this._realIndex=-1;
}, 1);

Clazz.newMeth(C$, 'getStyleBase$', function () {
return this._styleBase;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this._value;
});

Clazz.newMeth(C$, 'setValue$D', function (d) {
this._value=d;
});

Clazz.newMeth(C$, 'setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle', function (base) {
this._styleBase=Clazz.new_($I$(1).c$$fr_orsay_lri_varna_models_rna_ModelBaseStyle,[base]);
});

Clazz.newMeth(C$, 'getColorie$', function () {
return this._colorie;
});

Clazz.newMeth(C$, 'setColorie$Boolean', function (_colorie) {
this._colorie=_colorie;
});

Clazz.newMeth(C$, 'getElementStructure$', function () {
if (this._BP == null ) return -1;
 else {
if (this._BP.getPartner5$() === this ) return this._BP.getPartner3$().getIndex$();
 else return this._BP.getPartner5$().getIndex$();
}});

Clazz.newMeth(C$, 'setElementStructure$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (structure, type) {
this._BP=type;
});

Clazz.newMeth(C$, 'removeElementStructure$', function () {
this._BP=null;
});

Clazz.newMeth(C$, 'getStyleBP$', function () {
return this._BP;
});

Clazz.newMeth(C$, 'setStyleBP$fr_orsay_lri_varna_models_rna_ModeleBP', function (type) {
this._BP=type;
});

Clazz.newMeth(C$, 'getBaseNumber$', function () {
return this._realIndex;
});

Clazz.newMeth(C$, 'setBaseNumber$I', function (bn) {
this._realIndex=bn;
});

Clazz.newMeth(C$, 'getCoords$', function () {
return Clazz.new_($I$(3).c$$D$D,[this._coords.x, this._coords.y]);
});

Clazz.newMeth(C$, 'setCoords$java_awt_geom_Point2D_Double', function (coords) {
this._coords.x=coords.x;
this._coords.y=coords.y;
});

Clazz.newMeth(C$, 'getCenter$', function () {
return Clazz.new_($I$(3).c$$D$D,[this._center.x, this._center.y]);
});

Clazz.newMeth(C$, 'setCenter$java_awt_geom_Point2D_Double', function (center) {
this._center.x=center.x;
this._center.y=center.y;
});

Clazz.newMeth(C$, 'getLabel$', function () {
if (this._label == null  || this._label.equals$O("") ) {
return "" + this.getBaseNumber$();
} else {
return this._label;
}});

Clazz.newMeth(C$, 'setLabel$S', function (s) {
this._label=s;
});

Clazz.newMeth(C$, 'setLabel$java_awt_geom_Point2D_Double', function (center) {
this._center.x=center.x;
this._center.y=center.y;
});

Clazz.newMeth(C$, ['compareTo$fr_orsay_lri_varna_models_rna_ModeleBase','compareTo$','compareTo$TT'], function (other) {
var nombre1=(other).getIndex$();
var nombre2=this.getIndex$();
if (nombre1 > nombre2) return -1;
 else if (nombre1 == nombre2) return 0;
 else return 1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06

(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StructureTemp", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._struct=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._struct=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addStrand$fr_orsay_lri_varna_models_rna_ModeleStrand', function (ms) {
this._struct.add$TE(ms);
});

Clazz.newMeth(C$, 'sizeStruct$', function () {
return this._struct.size$();
});

Clazz.newMeth(C$, 'getStrand$I', function (a) {
return this._struct.get$I(a);
});

Clazz.newMeth(C$, 'getListStrands$', function () {
return this._struct;
});

Clazz.newMeth(C$, 'clearListStrands$', function () {
this._struct.clear$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this._struct.isEmpty$();
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06

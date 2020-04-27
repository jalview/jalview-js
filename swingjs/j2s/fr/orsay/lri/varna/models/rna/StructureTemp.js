(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureTemp", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._struct=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['_struct','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addStrand$fr_orsay_lri_varna_models_rna_ModeleStrand', function (ms) {
this._struct.add$O(ms);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

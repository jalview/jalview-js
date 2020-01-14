(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModeleStrand");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._strand=null;
this.hasBeenPlaced=false;
this.strandLeft=false;
this.strandRight=false;
this.levelPosition=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._strand=Clazz.new_($I$(1));
this.hasBeenPlaced=false;
this.strandLeft=false;
this.strandRight=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
this._strand.add$TE(mb);
});

Clazz.newMeth(C$, 'addBase$I$fr_orsay_lri_varna_models_rna_ModeleBase', function (index, mb) {
this._strand.add$I$TE(index, mb);
});

Clazz.newMeth(C$, 'sizeStrand$', function () {
return this._strand.size$();
});

Clazz.newMeth(C$, 'getMB$I', function (a) {
return this._strand.get$I(a);
});

Clazz.newMeth(C$, 'getArrayListMB$', function () {
return this._strand;
});

Clazz.newMeth(C$, 'getLevelPosition$', function () {
return this.levelPosition;
});

Clazz.newMeth(C$, 'setLevelPosition$I', function (a) {
this.levelPosition=a;
});

Clazz.newMeth(C$, 'getStrandRight$', function () {
return this.strandRight;
});

Clazz.newMeth(C$, 'setStrandRight$Z', function (bool) {
this.strandRight=bool;
});

Clazz.newMeth(C$, 'getStrandLeft$', function () {
return this.strandLeft;
});

Clazz.newMeth(C$, 'setStrandLeft$Z', function (bool) {
this.strandLeft=bool;
});

Clazz.newMeth(C$, 'hasBeenPlaced$', function () {
return this.hasBeenPlaced;
});

Clazz.newMeth(C$, 'setHasBeenPlaced$Z', function (bool) {
this.hasBeenPlaced=bool;
});

Clazz.newMeth(C$, 'existInStrand$I', function (a) {
var size=this.sizeStrand$();
var exist=false;
for (var i=0; i < size; i++) {
if (a == this.getMB$I(i).getIndex$()) {
exist=true;
}}
return exist;
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06

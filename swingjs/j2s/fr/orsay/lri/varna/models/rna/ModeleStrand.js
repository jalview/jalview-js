(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModeleStrand");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._strand=Clazz.new_($I$(1,1));
this.hasBeenPlaced=false;
this.strandLeft=false;
this.strandRight=false;
},1);

C$.$fields$=[['Z',['hasBeenPlaced','strandLeft','strandRight'],'I',['levelPosition'],'O',['_strand','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
this._strand.add$O(mb);
});

Clazz.newMeth(C$, 'addBase$I$fr_orsay_lri_varna_models_rna_ModeleBase', function (index, mb) {
this._strand.add$I$O(index, mb);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

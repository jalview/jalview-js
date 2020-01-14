(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Consensus");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mask=null;
this.threshold=0;
this.maskstr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$D', function (mask, threshold) {
C$.$init$.apply(this);
this.maskstr=mask;
this.setMask$S(mask);
this.threshold=threshold;
}, 1);

Clazz.newMeth(C$, 'setMask$S', function (s) {
this.mask=this.setNums$S(s);
});

Clazz.newMeth(C$, 'isConserved$IAA$I$I', function (cons2, col, size) {
return this.isConserved$IAA$I$I$Z(cons2, col, size, true);
});

Clazz.newMeth(C$, 'isConserved$IAA$I$I$Z', function (cons2, col, size, includeGaps) {
var tot=0;
if (!includeGaps) {
size-=cons2[col][cons2[col].length - 1];
}for (var i=0; i < this.mask.length; i++) {
tot+=cons2[col][this.mask[i]];
}
if (tot > ((this.threshold * size) / 100) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'setNums$S', function (s) {
var out=Clazz.array(Integer.TYPE, [s.length$()]);
var i=0;
while (i < s.length$()){
out[i]=$I$(1).aaIndex[(s.charCodeAt$I(i))];
i++;
}
return out;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

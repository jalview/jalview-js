(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ResidueProperties']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Consensus");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['threshold'],'S',['maskstr'],'O',['mask','int[]']]]

Clazz.newMeth(C$, 'c$$S$D',  function (mask, threshold) {
;C$.$init$.apply(this);
this.maskstr=mask;
this.setMask$S(mask);
this.threshold=threshold;
}, 1);

Clazz.newMeth(C$, 'setMask$S',  function (s) {
this.mask=this.setNums$S(s);
});

Clazz.newMeth(C$, 'isConserved$IAA$I$I',  function (cons2, col, size) {
System.out.println$S("DEPRECATED!!!!");
return this.isConserved$IAA$I$I$Z(cons2, col, size, true);
});

Clazz.newMeth(C$, 'isConserved$IAA$I$I$Z',  function (cons2, col, size, includeGaps) {
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

Clazz.newMeth(C$, 'setNums$S',  function (s) {
var out=Clazz.array(Integer.TYPE, [s.length$()]);
var i=0;
while (i < s.length$()){
out[i]=$I$(1).aaIndex[(s.charCodeAt$I(i))];
++i;
}
return out;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

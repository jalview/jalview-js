(function(){var P$=Clazz.newPackage("sun.text"),I$=[[0,'sun.text.normalizer.NormalizerImpl']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComposedCharIter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.curChar=-1;
},1);

C$.$fields$=[['I',['curChar']]
,['I',['decompNum'],'O',['chars','int[]','decomps','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$', function () {
if (this.curChar == C$.decompNum - 1) {
return -1;
}return C$.chars[++this.curChar];
});

Clazz.newMeth(C$, 'decomposition$', function () {
return C$.decomps[this.curChar];
});

C$.$static$=function(){C$.$static$=0;
{
var maxNum=2000;
C$.chars=Clazz.array(Integer.TYPE, [maxNum]);
C$.decomps=Clazz.array(String, [maxNum]);
C$.decompNum=$I$(1).getDecompose$IA$SA(C$.chars, C$.decomps);
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

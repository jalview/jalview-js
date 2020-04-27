(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),I$=[[0,'javajs.util.M4']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HallRotation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.seitzMatrix=Clazz.new_($I$(1,1));
this.seitzMatrixInv=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['rotCode'],'O',['seitzMatrix','javajs.util.M4','+seitzMatrixInv']]
,['O',['hallRotationTerms','org.jmol.symmetry.HallRotation[]']]]

Clazz.newMeth(C$, 'c$$S$S', function (code, matrixData) {
;C$.$init$.apply(this);
this.rotCode=code;
var data=Clazz.array(Float.TYPE, [16]);
var dataInv=Clazz.array(Float.TYPE, [16]);
data[15]=dataInv[15]=1.0;
for (var i=0, ipt=0; ipt < 11; i++) {
var value=0;
switch ((matrixData.charCodeAt$I(i))) {
case 32:
ipt++;
continue;
case 43:
case 49:
value=1;
break;
case 45:
value=-1;
break;
}
data[ipt]=value;
dataInv[ipt]=-value;
ipt++;
}
this.seitzMatrix.setA$FA(data);
this.seitzMatrixInv.setA$FA(dataInv);
}, 1);

Clazz.newMeth(C$, 'lookup$S', function (code) {
for (var i=C$.getHallTerms$().length; --i >= 0; ) if (C$.hallRotationTerms[i].rotCode.equals$O(code)) return C$.hallRotationTerms[i];

return null;
}, 1);

Clazz.newMeth(C$, 'getHallTerms$', function () {
return (C$.hallRotationTerms == null  ? C$.hallRotationTerms=Clazz.array(C$, -1, [Clazz.new_(C$.c$$S$S,["1_", "+00 0+0 00+"]), Clazz.new_(C$.c$$S$S,["2x", "+00 0-0 00-"]), Clazz.new_(C$.c$$S$S,["2y", "-00 0+0 00-"]), Clazz.new_(C$.c$$S$S,["2z", "-00 0-0 00+"]), Clazz.new_(C$.c$$S$S,["2\'", "0-0 -00 00-"]), Clazz.new_(C$.c$$S$S,["2\"", "0+0 +00 00-"]), Clazz.new_(C$.c$$S$S,["2x\'", "-00 00- 0-0"]), Clazz.new_(C$.c$$S$S,["2x\"", "-00 00+ 0+0"]), Clazz.new_(C$.c$$S$S,["2y\'", "00- 0-0 -00"]), Clazz.new_(C$.c$$S$S,["2y\"", "00+ 0-0 +00"]), Clazz.new_(C$.c$$S$S,["2z\'", "0-0 -00 00-"]), Clazz.new_(C$.c$$S$S,["2z\"", "0+0 +00 00-"]), Clazz.new_(C$.c$$S$S,["3x", "+00 00- 0+-"]), Clazz.new_(C$.c$$S$S,["3y", "-0+ 0+0 -00"]), Clazz.new_(C$.c$$S$S,["3z", "0-0 +-0 00+"]), Clazz.new_(C$.c$$S$S,["3*", "00+ +00 0+0"]), Clazz.new_(C$.c$$S$S,["4x", "+00 00- 0+0"]), Clazz.new_(C$.c$$S$S,["4y", "00+ 0+0 -00"]), Clazz.new_(C$.c$$S$S,["4z", "0-0 +00 00+"]), Clazz.new_(C$.c$$S$S,["6x", "+00 0+- 0+0"]), Clazz.new_(C$.c$$S$S,["6y", "00+ 0+0 -0+"]), Clazz.new_(C$.c$$S$S,["6z", "+-0 +00 00+"])]) : C$.hallRotationTerms);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

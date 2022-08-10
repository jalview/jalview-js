(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),p$1={},I$=[[0,'org.jmol.script.T','org.jmol.util.Logger','org.jmol.minimize.forcefield.CalculationsUFF','javajs.util.PT','org.jmol.util.Elements','java.util.Hashtable','org.jmol.minimize.forcefield.FFParam','javajs.util.Lst']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ForceFieldUFF", null, 'org.jmol.minimize.forcefield.ForceField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bsAromatic','javajs.util.BS']]
,['O',['atomTypes','javajs.util.Lst','ffParams','java.util.Map','tokenTypes','org.jmol.script.T[][]']]]

Clazz.newMeth(C$, 'c$$org_jmol_minimize_Minimizer', function (minimizer) {
Clazz.super_(C$, this);
this.minimizer=minimizer;
this.name="UFF";
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
this.bsAromatic=null;
});

Clazz.newMeth(C$, 'setModel$javajs_util_BS$I', function (bsElements, elemnoMax) {
this.setModelFields$();
$I$(2).info$S("minimize: setting atom types...");
if (C$.atomTypes == null  && (C$.atomTypes=p$1.getAtomTypes.apply(this, [])) == null  ) return false;
if (C$.ffParams == null  && (C$.ffParams=p$1.getFFParameters.apply(this, [])) == null  ) return false;
p$1.setAtomTypes$javajs_util_BS$I.apply(this, [bsElements, elemnoMax]);
this.calc=Clazz.new_($I$(3,1).c$$org_jmol_minimize_forcefield_ForceField$java_util_Map$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst,[this, C$.ffParams, this.minAtoms, this.minBonds, this.minAngles, this.minTorsions, this.minPositions, this.minimizer.constraints]);
return this.calc.setupCalculations$();
});

Clazz.newMeth(C$, 'setAtomTypes$javajs_util_BS$I', function (bsElements, elemnoMax) {
var nTypes=C$.atomTypes.size$();
bsElements.clear$I(0);
for (var i=0; i < nTypes; i++) {
var data=C$.atomTypes.get$I(i);
var smarts=data[0];
if (smarts == null ) continue;
var search=p$1.getSearch$S$I$javajs_util_BS.apply(this, [smarts, elemnoMax, bsElements]);
if (bsElements.get$I(0)) bsElements.clear$I(0);
 else if (search == null ) break;
 else for (var j=this.minimizer.bsAtoms.nextSetBit$I(0), pt=0; j < this.minimizer.atoms.length && j >= 0 ; j=this.minimizer.bsAtoms.nextSetBit$I(j + 1), pt++) if (search.get$I(j)) this.minAtoms[pt].sType=data[1].intern$();

}
}, p$1);

Clazz.newMeth(C$, 'getSearch$S$I$javajs_util_BS', function (smarts, elemnoMax, bsElements) {
var search=null;
var len=smarts.length$();
search=C$.tokenTypes[0];
var n=(smarts.charCodeAt$I(len - 2)) - 48;
var elemNo=0;
if (n >= 10) n=0;
var isAromatic=false;
if (smarts.charAt$I(1) == "#") {
elemNo=$I$(4,"parseInt$S",[smarts.substring$I$I(2, len - 1)]);
} else {
var s=smarts.substring$I$I(1, (n > 0 ? len - 3 : len - 1));
if (s.equals$O(s.toLowerCase$())) {
s=s.toUpperCase$();
isAromatic=true;
}elemNo=$I$(5).elementNumberFromSymbol$S$Z(s, false);
}if (elemNo > elemnoMax) return null;
if (!bsElements.get$I(elemNo)) {
bsElements.set$I(0);
return null;
}switch ((smarts.charCodeAt$I(len - 3))) {
case 68:
search=C$.tokenTypes[2];
search[6].intValue=n;
break;
case 94:
search=C$.tokenTypes[4 + (n - 1)];
break;
case 43:
search=C$.tokenTypes[1];
search[5].intValue=n;
break;
case 45:
search=C$.tokenTypes[1];
search[5].intValue=-n;
break;
case 65:
search=C$.tokenTypes[6];
break;
}
search[2].intValue=elemNo;
var v=this.minimizer.vwr.evaluateExpression$O(search);
if (!(Clazz.instanceOf(v, "javajs.util.BS"))) return null;
var bs=v;
if (isAromatic && bs.nextSetBit$I(0) >= 0 ) {
if (this.bsAromatic == null ) this.bsAromatic=this.minimizer.vwr.evaluateExpression$O(C$.tokenTypes[3]);
bs.and$javajs_util_BS(this.bsAromatic);
}if ($I$(2).debugging && bs.nextSetBit$I(0) >= 0 ) $I$(2,"debug$S",[smarts + " minimize atoms=" + bs ]);
return bs;
}, p$1);

Clazz.newMeth(C$, 'getFFParameters', function () {
var ffParam;
var temp=Clazz.new_($I$(6,1));
var resourceName="UFF.txt";
var br=null;
try {
br=this.getBufferedReader$S(resourceName);
var line;
while ((line=br.readLine$()) != null ){
var vs=$I$(4).getTokens$S(line);
if (vs.length < 13) continue;
if ($I$(2).debugging) $I$(2).debug$S(line);
if (line.substring$I$I(0, 5).equals$O("param")) {
ffParam=Clazz.new_($I$(7,1));
temp.put$O$O(vs[1], ffParam);
ffParam.dVal=Clazz.array(Double.TYPE, [11]);
ffParam.sVal=Clazz.array(String, [1]);
ffParam.sVal[0]=vs[1];
ffParam.dVal[0]=$I$(4).parseFloat$S(vs[2]);
ffParam.dVal[1]=$I$(4).parseFloat$S(vs[3]) * 0.017453292519943295;
ffParam.dVal[2]=$I$(4).parseFloat$S(vs[4]);
ffParam.dVal[3]=$I$(4).parseFloat$S(vs[5]);
ffParam.dVal[4]=$I$(4).parseFloat$S(vs[6]);
ffParam.dVal[5]=$I$(4).parseFloat$S(vs[7]);
ffParam.dVal[6]=$I$(4).parseFloat$S(vs[8]);
ffParam.dVal[7]=$I$(4).parseFloat$S(vs[9]);
ffParam.dVal[8]=$I$(4).parseFloat$S(vs[10]);
ffParam.dVal[9]=$I$(4).parseFloat$S(vs[11]);
ffParam.dVal[10]=$I$(4).parseFloat$S(vs[12]);
ffParam.iVal=Clazz.array(Integer.TYPE, [1]);
var coord=(vs[1].length$() > 2 ? vs[1].charAt$I(2) : "1");
switch (coord.$c()) {
case 82:
coord="2";
break;
default:
coord="1";
break;
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
break;
}
ffParam.iVal[0]=coord.$c() - 48;
}}
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception " + e.toString() + " in getResource " + resourceName );
try {
br.close$();
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
} else {
throw ee;
}
}
return null;
} else {
throw e;
}
}
$I$(2,"info$S",[temp.size$() + " atom types read from " + resourceName ]);
return temp;
}, p$1);

Clazz.newMeth(C$, 'getAtomTypes', function () {
var types=Clazz.new_($I$(8,1));
var fileName="UFF.txt";
try {
var br=this.getBufferedReader$S(fileName);
var line;
while ((line=br.readLine$()) != null ){
if (line.length$() > 4 && line.substring$I$I(0, 4).equals$O("atom") ) {
var vs=$I$(4).getTokens$S(line);
var info=Clazz.array(String, -1, [vs[1], vs[2]]);
types.addLast$O(info);
}}
br.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.jmol.viewer.JmolAsyncException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.jmol.viewer.JmolAsyncException').c$$S,[e.getFileName$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.err.println$S("Exception " + e.toString() + " in getResource " + fileName );
}
} else {
throw e$$;
}
}
$I$(2,"info$S",[types.size$() + " UFF parameters read"]);
return (types.size$() > 0 ? types : null);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.tokenTypes=Clazz.array($I$(1), -2, [Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).n$I$I(268435860, 1094715402), $I$(1).i$I(0), $I$(1).tokenExpressionEnd]), Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).n$I$I(268435860, 1094715402), $I$(1).i$I(0), $I$(1).tokenAnd, $I$(1).n$I$I(268435860, 1631586315), $I$(1).i$I(0), $I$(1).tokenExpressionEnd]), Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).n$I$I(268435860, 1094715402), $I$(1).i$I(0), $I$(1).tokenAnd, $I$(1).tokenConnected, $I$(1).tokenLeftParen, $I$(1).i$I(0), $I$(1).tokenRightParen, $I$(1).tokenExpressionEnd]), Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).o$I$O(1073741824, "flatring"), $I$(1).tokenExpressionEnd]), Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).n$I$I(268435860, 1094715402), $I$(1).i$I(0), $I$(1).tokenAnd, $I$(1).tokenLeftParen, $I$(1).tokenConnected, $I$(1).tokenLeftParen, $I$(1).i$I(1), $I$(1).tokenComma, $I$(1).o$I$O(4, "triple"), $I$(1).tokenRightParen, $I$(1).tokenOr, $I$(1).tokenConnected, $I$(1).tokenLeftParen, $I$(1).i$I(2), $I$(1).tokenComma, $I$(1).o$I$O(4, "double"), $I$(1).tokenRightParen, $I$(1).tokenRightParen, $I$(1).tokenExpressionEnd]), Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).n$I$I(268435860, 1094715402), $I$(1).i$I(0), $I$(1).tokenAnd, $I$(1).o$I$O(134217736, "connected"), $I$(1).tokenLeftParen, $I$(1).i$I(1), $I$(1).tokenComma, $I$(1).o$I$O(4, "double"), $I$(1).tokenRightParen, $I$(1).tokenExpressionEnd]), Clazz.array($I$(1), -1, [$I$(1).tokenExpressionBegin, $I$(1).n$I$I(268435860, 1094715402), $I$(1).i$I(0), $I$(1).tokenAnd, $I$(1).tokenConnected, $I$(1).tokenLeftParen, $I$(1).i$I(3), $I$(1).tokenRightParen, $I$(1).tokenAnd, $I$(1).tokenConnected, $I$(1).tokenLeftParen, $I$(1).tokenConnected, $I$(1).tokenLeftParen, $I$(1).o$I$O(4, "double"), $I$(1).tokenRightParen, $I$(1).tokenRightParen, $I$(1).tokenExpressionEnd])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:37 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

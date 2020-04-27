(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.text.DecimalFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Measure", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.expValue="";
},1);

C$.$fields$=[['D',['calcValue','diff'],'I',['type'],'S',['expValue']]
,['O',['df','java.text.DecimalFormat[]']]]

Clazz.newMeth(C$, 'c$$S$D$I', function (expValue, calcValue, type) {
;C$.$init$.apply(this);
this.expValue=expValue;
this.calcValue=calcValue;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getExpValue$', function () {
return this.expValue;
});

Clazz.newMeth(C$, 'getCalcValue$', function () {
return this.calcValue;
});

Clazz.newMeth(C$, 'getDiff$', function () {
return this.diff;
});

Clazz.newMeth(C$, ['compareTo$org_openscience_jmol_app_janocchio_Measure','compareTo$O'], function (m) {
var dcomp=this.calcValue - m.getCalcValue$();
if (dcomp > 0 ) {
return 1;
} else if (dcomp < 0 ) {
return -1;
} else {
return 0;
}});

Clazz.newMeth(C$, 'toString', function () {
return "" + new Double(this.calcValue).toString();
});

Clazz.newMeth(C$, 'round$', function () {
return C$.df[this.type].format$D(this.calcValue);
});

Clazz.newMeth(C$, 'formatDistance$D', function (d) {
return C$.df[0].format$D(d);
}, 1);

Clazz.newMeth(C$, 'formatJ$D', function (d) {
return C$.df[1].format$D(d);
}, 1);

Clazz.newMeth(C$, 'formatNOE$D', function (d) {
return C$.df[2].format$D(d);
}, 1);

Clazz.newMeth(C$, 'formatExpNOE$D', function (d) {
return C$.df[0].format$D(d);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.df=Clazz.array($I$(1), -1, [Clazz.new_($I$(1,1).c$$S,["0.00"]), Clazz.new_($I$(1,1).c$$S,["0.0"]), Clazz.new_($I$(1,1).c$$S,["0.0000"])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

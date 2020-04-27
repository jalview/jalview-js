(function(){var P$=Clazz.newPackage("org.jmol.modelkit"),I$=[[0,'javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Constraint");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['value'],'I',['type'],'S',['symop'],'O',['points','javajs.util.P3[]','offset','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$$I$OA', function (type, params) {
;C$.$init$.apply(this);
this.type=type;
switch (type) {
case 0:
this.symop=params[0];
this.points=Clazz.array($I$(1), [1]);
this.offset=params[1];
break;
case 1:
this.value=(params[0]).doubleValue$();
this.points=Clazz.array($I$(1), -1, [params[1], null]);
break;
case 2:
this.value=(params[0]).doubleValue$();
this.points=Clazz.array($I$(1), -1, [params[1], params[2], null]);
break;
case 3:
this.value=(params[0]).doubleValue$();
this.points=Clazz.array($I$(1), -1, [params[1], params[2], params[3], null]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

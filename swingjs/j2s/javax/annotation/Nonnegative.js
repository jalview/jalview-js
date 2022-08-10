(function(){var P$=Clazz.newPackage("javax.annotation"),I$=[[0,'javax.annotation.meta.When']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*@*/var C$=Clazz.newClass(P$, "Nonnegative", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.lang.annotation.Annotation');
C$.$classes$=[['Checker',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() {var a=[];
a.push(['when','javax.annotation.meta.When',$I$(1).ALWAYS]);
return a};
(function(){/*c*/var C$=Clazz.newClass(P$.Nonnegative, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.annotation.meta.TypeQualifierValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['forConstantValue$javax_annotation_Nonnegative$O','forConstantValue$java_lang_annotation_Annotation$O'],  function (annotation, v) {
if (!(Clazz.instanceOf(v, "java.lang.Number"))) return $I$(1).NEVER;
var isNegative;
var value=v;
if (Clazz.instanceOf(value, "java.lang.Long")) isNegative=Long.$lt(value.longValue$(),0 );
 else if (Clazz.instanceOf(value, "java.lang.Double")) isNegative=value.doubleValue$() < 0 ;
 else if (Clazz.instanceOf(value, "java.lang.Float")) isNegative=value.floatValue$() < 0 ;
 else isNegative=value.intValue$() < 0;
if (isNegative) return $I$(1).NEVER;
 else return $I$(1).ALWAYS;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

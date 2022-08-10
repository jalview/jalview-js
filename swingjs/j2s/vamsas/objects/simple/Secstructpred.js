(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Secstructpred", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'S',['output'],'O',['__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (output) {
;C$.$init$.apply(this);
this.output=output;
}, 1);

Clazz.newMeth(C$, 'getOutput$',  function () {
return this.output;
});

Clazz.newMeth(C$, 'setOutput$S',  function (output) {
this.output=output;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.Secstructpred"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.output == null  && other.getOutput$() == null  ) || (this.output != null  && this.output.equals$O(other.getOutput$()) ) ) ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getOutput$() != null ) {
_hashCode+=this.getOutput$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

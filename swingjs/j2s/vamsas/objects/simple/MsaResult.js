(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MsaResult", null, 'vamsas.objects.simple.Result', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$__equalsCalc=null;
this.$__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['$__hashCodeCalc'],'O',['msa','vamsas.objects.simple.Alignment','$__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$vamsas_objects_simple_Alignment', function (msa) {
Clazz.super_(C$, this);
this.msa=msa;
}, 1);

Clazz.newMeth(C$, 'getMsa$', function () {
return this.msa;
});

Clazz.newMeth(C$, 'setMsa$vamsas_objects_simple_Alignment', function (msa) {
this.msa=msa;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.MsaResult"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.$__equalsCalc != null ) {
return (this.$__equalsCalc === obj );
}this.$__equalsCalc=obj;
var _equals;
_equals=C$.superclazz.prototype.equals$O.apply(this, [obj]) && (((this.msa == null ) && (other.getMsa$() == null ) ) || ((this.msa != null ) && this.msa.equals$O(other.getMsa$()) ) ) ;
this.$__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.$__hashCodeCalc) {
return 0;
}this.$__hashCodeCalc=true;
var _hashCode=C$.superclazz.prototype.hashCode$.apply(this, []);
if (this.getMsa$() != null ) {
_hashCode+=this.getMsa$().hashCode$();
}this.$__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

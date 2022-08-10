(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'java.util.Arrays','java.lang.reflect.Array']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceSet", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'O',['seqs','vamsas.objects.simple.Sequence[]','__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$vamsas_objects_simple_SequenceA',  function (seqs) {
;C$.$init$.apply(this);
this.seqs=seqs;
}, 1);

Clazz.newMeth(C$, 'getSeqs$',  function () {
return this.seqs;
});

Clazz.newMeth(C$, 'setSeqs$vamsas_objects_simple_SequenceA',  function (seqs) {
this.seqs=seqs;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.SequenceSet"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.seqs == null  && other.getSeqs$() == null  ) || (this.seqs != null  && $I$(1,"equals$OA$OA",[this.seqs, other.getSeqs$()]) ) ) ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getSeqs$() != null ) {
for (var i=0; i < $I$(2,"getLength$O",[this.getSeqs$()]); i++) {
var obj=$I$(2,"get$O$I",[this.getSeqs$(), i]);
if (obj != null  && !obj.getClass$().isArray$() ) {
_hashCode+=obj.hashCode$();
}}
}this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

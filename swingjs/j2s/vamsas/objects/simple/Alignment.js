(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'java.util.Arrays','java.lang.reflect.Array']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Alignment", null, 'vamsas.objects.simple.Object', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$__equalsCalc=null;
this.$__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['$__hashCodeCalc'],'S',['gapchar'],'O',['method','String[]','seqs','vamsas.objects.simple.SequenceSet','$__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$vamsas_objects_simple_SequenceSet', function (gapchar, method, seqs) {
Clazz.super_(C$, this);
this.gapchar=gapchar;
this.method=method;
this.seqs=seqs;
}, 1);

Clazz.newMeth(C$, 'getGapchar$', function () {
return this.gapchar;
});

Clazz.newMeth(C$, 'setGapchar$S', function (gapchar) {
this.gapchar=gapchar;
});

Clazz.newMeth(C$, 'getMethod$', function () {
return this.method;
});

Clazz.newMeth(C$, 'setMethod$SA', function (method) {
this.method=method;
});

Clazz.newMeth(C$, 'getSeqs$', function () {
return this.seqs;
});

Clazz.newMeth(C$, 'setSeqs$vamsas_objects_simple_SequenceSet', function (seqs) {
this.seqs=seqs;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.Alignment"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.$__equalsCalc != null ) {
return (this.$__equalsCalc === obj );
}this.$__equalsCalc=obj;
var _equals;
_equals=C$.superclazz.prototype.equals$O.apply(this, [obj]) && ((this.gapchar == null  && other.getGapchar$() == null  ) || (this.gapchar != null  && this.gapchar.equals$O(other.getGapchar$()) ) ) && ((this.method == null  && other.getMethod$() == null  ) || (this.method != null  && $I$(1,"equals$OA$OA",[this.method, other.getMethod$()]) ) ) && ((this.seqs == null  && other.getSeqs$() == null  ) || (this.seqs != null  && this.seqs.equals$O(other.getSeqs$()) ) )  ;
this.$__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.$__hashCodeCalc) {
return 0;
}this.$__hashCodeCalc=true;
var _hashCode=C$.superclazz.prototype.hashCode$.apply(this, []);
if (this.getGapchar$() != null ) {
_hashCode+=this.getGapchar$().hashCode$();
}if (this.getMethod$() != null ) {
for (var i=0; i < $I$(2,"getLength$O",[this.getMethod$()]); i++) {
var obj=$I$(2,"get$O$I",[this.getMethod$(), i]);
if (obj != null  && !obj.getClass$().isArray$() ) {
_hashCode+=obj.hashCode$();
}}
}if (this.getSeqs$() != null ) {
_hashCode+=this.getSeqs$().hashCode$();
}this.$__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

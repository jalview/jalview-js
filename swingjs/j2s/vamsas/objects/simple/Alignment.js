(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'java.util.Arrays','java.lang.reflect.Array']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Alignment", null, 'vamsas.objects.simple.Object', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gapchar=null;
this.method=null;
this.seqs=null;
this.$__equalsCalc=null;
this.$__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$__equalsCalc=null;
this.$__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$vamsas_objects_simple_SequenceSet', function (gapchar, method, seqs) {
Clazz.super_(C$, this,1);
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
_equals=C$.superclazz.prototype.equals$O.apply(this, [obj]) && ((this.gapchar == null  && other.getGapchar$() == null  ) || (this.gapchar != null  && this.gapchar.equals$O(other.getGapchar$()) ) ) && ((this.method == null  && other.getMethod$() == null  ) || (this.method != null  && $I$(1).equals$OA$OA(this.method, other.getMethod$()) ) ) && ((this.seqs == null  && other.getSeqs$() == null  ) || (this.seqs != null  && this.seqs.equals$O(other.getSeqs$()) ) )  ;
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
for (var i=0; i < $I$(2).getLength$O(this.getMethod$()); i++) {
var obj=$I$(2).get$O$I(this.getMethod$(), i);
if (obj != null  && !obj.getClass$().isArray$() ) {
_hashCode+=obj.hashCode$();
}}
}if (this.getSeqs$() != null ) {
_hashCode+=this.getSeqs$().hashCode$();
}this.$__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

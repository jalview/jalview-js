(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
var C$=Clazz.newClass(P$, "Sequence", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.seq=null;
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (id, seq) {
C$.$init$.apply(this);
this.id=id;
this.seq=seq;
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getSeq$', function () {
return this.seq;
});

Clazz.newMeth(C$, 'setSeq$S', function (seq) {
this.seq=seq;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.Sequence"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.id == null  && other.getId$() == null  ) || (this.id != null  && this.id.equals$O(other.getId$()) ) ) && ((this.seq == null  && other.getSeq$() == null  ) || (this.seq != null  && this.seq.equals$O(other.getSeq$()) ) )  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getId$() != null ) {
_hashCode+=this.getId$().hashCode$();
}if (this.getSeq$() != null ) {
_hashCode+=this.getSeq$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

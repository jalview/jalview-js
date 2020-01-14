(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
var C$=Clazz.newClass(P$, "Msfalignment", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.msf=null;
this.notes=null;
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

Clazz.newMeth(C$, 'c$$S$S', function (msf, notes) {
C$.$init$.apply(this);
this.msf=msf;
this.notes=notes;
}, 1);

Clazz.newMeth(C$, 'getMsf$', function () {
return this.msf;
});

Clazz.newMeth(C$, 'setMsf$S', function (msf) {
this.msf=msf;
});

Clazz.newMeth(C$, 'getNotes$', function () {
return this.notes;
});

Clazz.newMeth(C$, 'setNotes$S', function (notes) {
this.notes=notes;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.Msfalignment"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.msf == null  && other.getMsf$() == null  ) || (this.msf != null  && this.msf.equals$O(other.getMsf$()) ) ) && ((this.notes == null  && other.getNotes$() == null  ) || (this.notes != null  && this.notes.equals$O(other.getNotes$()) ) )  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getMsf$() != null ) {
_hashCode+=this.getMsf$().hashCode$();
}if (this.getNotes$() != null ) {
_hashCode+=this.getNotes$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Msfalignment", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'S',['msf','notes'],'O',['__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (msf, notes) {
;C$.$init$.apply(this);
this.msf=msf;
this.notes=notes;
}, 1);

Clazz.newMeth(C$, 'getMsf$',  function () {
return this.msf;
});

Clazz.newMeth(C$, 'setMsf$S',  function (msf) {
this.msf=msf;
});

Clazz.newMeth(C$, 'getNotes$',  function () {
return this.notes;
});

Clazz.newMeth(C$, 'setNotes$S',  function (notes) {
this.notes=notes;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
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

Clazz.newMeth(C$, 'hashCode$',  function () {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

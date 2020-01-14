(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
var C$=Clazz.newClass(P$, "JpredResult", null, 'vamsas.objects.simple.Result', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.aligfile=null;
this.predfile=null;
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

Clazz.newMeth(C$, 'c$$S$S', function (aligfile, predfile) {
Clazz.super_(C$, this,1);
this.aligfile=aligfile;
this.predfile=predfile;
}, 1);

Clazz.newMeth(C$, 'getAligfile$', function () {
return this.aligfile;
});

Clazz.newMeth(C$, 'setAligfile$S', function (aligfile) {
this.aligfile=aligfile;
});

Clazz.newMeth(C$, 'getPredfile$', function () {
return this.predfile;
});

Clazz.newMeth(C$, 'setPredfile$S', function (predfile) {
this.predfile=predfile;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.JpredResult"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.$__equalsCalc != null ) {
return (this.$__equalsCalc === obj );
}this.$__equalsCalc=obj;
var _equals;
_equals=C$.superclazz.prototype.equals$O.apply(this, [obj]) && ((this.aligfile == null  && other.getAligfile$() == null  ) || (this.aligfile != null  && this.aligfile.equals$O(other.getAligfile$()) ) ) && ((this.predfile == null  && other.getPredfile$() == null  ) || (this.predfile != null  && this.predfile.equals$O(other.getPredfile$()) ) )  ;
this.$__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.$__hashCodeCalc) {
return 0;
}this.$__hashCodeCalc=true;
var _hashCode=C$.superclazz.prototype.hashCode$.apply(this, []);
if (this.getAligfile$() != null ) {
_hashCode+=this.getAligfile$().hashCode$();
}if (this.getPredfile$() != null ) {
_hashCode+=this.getPredfile$().hashCode$();
}this.$__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

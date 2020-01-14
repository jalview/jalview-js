(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
var C$=Clazz.newClass(P$, "SeqSearchResult", null, 'vamsas.objects.simple.Result', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alignment=null;
this.annotation=null;
this.features=null;
this.newickTree=null;
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

Clazz.newMeth(C$, 'c$$vamsas_objects_simple_Alignment$S$S$S', function (alignment, annotation, features, newickTree) {
Clazz.super_(C$, this,1);
this.alignment=alignment;
this.annotation=annotation;
this.features=features;
this.newickTree=newickTree;
}, 1);

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.alignment;
});

Clazz.newMeth(C$, 'setAlignment$vamsas_objects_simple_Alignment', function (alignment) {
this.alignment=alignment;
});

Clazz.newMeth(C$, 'getAnnotation$', function () {
return this.annotation;
});

Clazz.newMeth(C$, 'setAnnotation$S', function (annotation) {
this.annotation=annotation;
});

Clazz.newMeth(C$, 'getFeatures$', function () {
return this.features;
});

Clazz.newMeth(C$, 'setFeatures$S', function (features) {
this.features=features;
});

Clazz.newMeth(C$, 'getNewickTree$', function () {
return this.newickTree;
});

Clazz.newMeth(C$, 'setNewickTree$S', function (newickTree) {
this.newickTree=newickTree;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.SeqSearchResult"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.$__equalsCalc != null ) {
return (this.$__equalsCalc === obj );
}this.$__equalsCalc=obj;
var _equals;
_equals=C$.superclazz.prototype.equals$O.apply(this, [obj]) && ((this.alignment == null  && other.getAlignment$() == null  ) || (this.alignment != null  && this.alignment.equals$O(other.getAlignment$()) ) ) && ((this.annotation == null  && other.getAnnotation$() == null  ) || (this.annotation != null  && this.annotation.equals$O(other.getAnnotation$()) ) ) && ((this.features == null  && other.getFeatures$() == null  ) || (this.features != null  && this.features.equals$O(other.getFeatures$()) ) ) && ((this.newickTree == null  && other.getNewickTree$() == null  ) || (this.newickTree != null  && this.newickTree.equals$O(other.getNewickTree$()) ) )  ;
this.$__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.$__hashCodeCalc) {
return 0;
}this.$__hashCodeCalc=true;
var _hashCode=C$.superclazz.prototype.hashCode$.apply(this, []);
if (this.getAlignment$() != null ) {
_hashCode+=this.getAlignment$().hashCode$();
}if (this.getAnnotation$() != null ) {
_hashCode+=this.getAnnotation$().hashCode$();
}if (this.getFeatures$() != null ) {
_hashCode+=this.getFeatures$().hashCode$();
}if (this.getNewickTree$() != null ) {
_hashCode+=this.getNewickTree$().hashCode$();
}this.$__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

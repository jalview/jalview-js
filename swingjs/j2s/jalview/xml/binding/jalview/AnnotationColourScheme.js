(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "AnnotationColourScheme");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.aboveThreshold=null;
this.annotation=null;
this.minColour=null;
this.maxColour=null;
this.colourScheme=null;
this.threshold=null;
this.perSequence=null;
this.predefinedColours=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAboveThreshold$', function () {
return this.aboveThreshold;
});

Clazz.newMeth(C$, 'setAboveThreshold$Integer', function (value) {
this.aboveThreshold=value;
});

Clazz.newMeth(C$, 'getAnnotation$', function () {
return this.annotation;
});

Clazz.newMeth(C$, 'setAnnotation$S', function (value) {
this.annotation=value;
});

Clazz.newMeth(C$, 'getMinColour$', function () {
return this.minColour;
});

Clazz.newMeth(C$, 'setMinColour$Integer', function (value) {
this.minColour=value;
});

Clazz.newMeth(C$, 'getMaxColour$', function () {
return this.maxColour;
});

Clazz.newMeth(C$, 'setMaxColour$Integer', function (value) {
this.maxColour=value;
});

Clazz.newMeth(C$, 'getColourScheme$', function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S', function (value) {
this.colourScheme=value;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float', function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'isPerSequence$', function () {
return this.perSequence;
});

Clazz.newMeth(C$, 'setPerSequence$Boolean', function (value) {
this.perSequence=value;
});

Clazz.newMeth(C$, 'isPredefinedColours$', function () {
return this.predefinedColours;
});

Clazz.newMeth(C$, 'setPredefinedColours$Boolean', function (value) {
this.predefinedColours=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.AnnotationColourScheme'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="AnnotationColourScheme" namespace="www.jalview.org" )']],
  [['aboveThreshold','Integer'],['@XmlAttribute(name="aboveThreshold" )']],
  [['annotation','String'],['@XmlAttribute(name="annotation" )']],
  [['minColour','Integer'],['@XmlAttribute(name="minColour" )']],
  [['maxColour','.'],['@XmlAttribute(name="maxColour" )']],
  [['colourScheme','String'],['@XmlAttribute(name="colourScheme" )']],
  [['threshold','Float'],['@XmlAttribute(name="threshold" )']],
  [['perSequence','Boolean'],['@XmlAttribute(name="perSequence" )']],
  [['predefinedColours','.'],['@XmlAttribute(name="predefinedColours" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

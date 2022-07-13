(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnnotationColourScheme");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['annotation','colourScheme'],'O',['aboveThreshold','Integer','+minColour','+maxColour','threshold','Float','perSequence','Boolean','+predefinedColours']]]

Clazz.newMeth(C$, 'getAboveThreshold$',  function () {
return this.aboveThreshold;
});

Clazz.newMeth(C$, 'setAboveThreshold$Integer',  function (value) {
this.aboveThreshold=value;
});

Clazz.newMeth(C$, 'getAnnotation$',  function () {
return this.annotation;
});

Clazz.newMeth(C$, 'setAnnotation$S',  function (value) {
this.annotation=value;
});

Clazz.newMeth(C$, 'getMinColour$',  function () {
return this.minColour;
});

Clazz.newMeth(C$, 'setMinColour$Integer',  function (value) {
this.minColour=value;
});

Clazz.newMeth(C$, 'getMaxColour$',  function () {
return this.maxColour;
});

Clazz.newMeth(C$, 'setMaxColour$Integer',  function (value) {
this.maxColour=value;
});

Clazz.newMeth(C$, 'getColourScheme$',  function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S',  function (value) {
this.colourScheme=value;
});

Clazz.newMeth(C$, 'getThreshold$',  function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float',  function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'isPerSequence$',  function () {
return this.perSequence;
});

Clazz.newMeth(C$, 'setPerSequence$Boolean',  function (value) {
this.perSequence=value;
});

Clazz.newMeth(C$, 'isPredefinedColours$',  function () {
return this.predefinedColours;
});

Clazz.newMeth(C$, 'setPredefinedColours$Boolean',  function (value) {
this.predefinedColours=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.AnnotationColourScheme',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="AnnotationColourScheme" namespace="www.jalview.org" ']],
  [['aboveThreshold','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="aboveThreshold" ']],
  [['annotation','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="annotation" ']],
  [['minColour','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="minColour" ']],
  [['maxColour','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="maxColour" ']],
  [['colourScheme','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colourScheme" ']],
  [['threshold','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="threshold" ']],
  [['perSequence','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="perSequence" ']],
  [['predefinedColours','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="predefinedColours" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

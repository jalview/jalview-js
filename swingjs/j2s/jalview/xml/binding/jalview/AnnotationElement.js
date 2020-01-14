(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "AnnotationElement");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.displayCharacter=null;
this.description=null;
this.secondaryStructure=null;
this.value=null;
this.position=0;
this.colour=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDisplayCharacter$', function () {
return this.displayCharacter;
});

Clazz.newMeth(C$, 'setDisplayCharacter$S', function (value) {
this.displayCharacter=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getSecondaryStructure$', function () {
return this.secondaryStructure;
});

Clazz.newMeth(C$, 'setSecondaryStructure$S', function (value) {
this.secondaryStructure=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$Float', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$I', function (value) {
this.position=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$Integer', function (value) {
this.colour=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.AnnotationElement'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"displayCharacter"  "description"  "secondaryStructure"  "value"  } )','@XmlRootElement(name="annotationElement" )']],
  [['position','int'],['@XmlAttribute(name="position" required="true" )']],
  [['colour','Integer'],['@XmlAttribute(name="colour" )']],
  [['displayCharacter','String'],['@XmlElement']],
  [['description','String'],['@XmlElement']],
  [['secondaryStructure','String'],['@XmlElement']],
  [['value','Float'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnnotationElement");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['position'],'S',['displayCharacter','description','secondaryStructure'],'O',['value','Float','colour','Integer']]]

Clazz.newMeth(C$, 'getDisplayCharacter$',  function () {
return this.displayCharacter;
});

Clazz.newMeth(C$, 'setDisplayCharacter$S',  function (value) {
this.displayCharacter=value;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getSecondaryStructure$',  function () {
return this.secondaryStructure;
});

Clazz.newMeth(C$, 'setSecondaryStructure$S',  function (value) {
this.secondaryStructure=value;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$Float',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$I',  function (value) {
this.position=value;
});

Clazz.newMeth(C$, 'getColour$',  function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$Integer',  function (value) {
this.colour=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.AnnotationElement',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"displayCharacter"  "description"  "secondaryStructure"  "value"  } ','name="annotationElement" ']],
  [['position','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="position" required="true" ']],
  [['colour','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colour" ']],
  [['displayCharacter','String'],['@XmlElement']],
  [['description','String'],['@XmlElement']],
  [['secondaryStructure','String'],['@XmlElement']],
  [['value','Float'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

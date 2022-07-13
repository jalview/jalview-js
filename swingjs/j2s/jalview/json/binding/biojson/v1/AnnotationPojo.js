(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnnotationPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['secondaryStructure'],'F',['value'],'S',['displayCharacter','description','colour']]]

Clazz.newMeth(C$, 'getDisplayCharacter$',  function () {
return this.displayCharacter;
});

Clazz.newMeth(C$, 'setDisplayCharacter$S',  function (displayCharacter) {
this.displayCharacter=displayCharacter;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getSecondaryStructure$',  function () {
return this.secondaryStructure;
});

Clazz.newMeth(C$, 'setSecondaryStructure$C',  function (secondaryStructure) {
this.secondaryStructure=secondaryStructure;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$F',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getColour$',  function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$S',  function (colour) {
this.colour=colour;
});
C$.$getAnn$ = function(){ return [
[['displayCharacter','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Display character for the given annotation" ']],
  [['description','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Description for the annotation" ']],
  [['secondaryStructure','char',null,['com.github.reinert.jjschema.Attributes']],['required="true" enums={"E"  "H"  " "  ")"  "("  } description="Determines what is rendered for the secondary </br>structure <ul><li>’E’ - indicates Beta Sheet/Strand <li>’H’ - indicates alpha helix </li><li> ‘\u0000’ - indicates blank</li></ul></br>For RNA Helix (only shown when working with</br> nucleotide sequences): <ul><li> ‘(’ - indicates bases pair with columns upstream</br> (to right) </li><li> ’(’ - indicate region pairs with bases to the left</li></ul>" ']],
  [['value','float',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Value of the annotation" ']],
  [['colour','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Colour of the annotation position in hex string." ']],
  [['M:getDisplayCharacter','String'],['@XmlElement']],
  [['M:getDescription','String'],['@XmlElement']],
  [['M:getSecondaryStructure','char'],['@XmlElement']],
  [['M:getValue','float'],['@XmlElement']],
  [['M:getColour','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

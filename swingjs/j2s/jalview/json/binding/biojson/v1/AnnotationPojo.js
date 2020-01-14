(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[];
var C$=Clazz.newClass(P$, "AnnotationPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.displayCharacter=null;
this.description=null;
this.secondaryStructure='\0';
this.value=0;
this.colour=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDisplayCharacter$', function () {
return this.displayCharacter;
});

Clazz.newMeth(C$, 'setDisplayCharacter$S', function (displayCharacter) {
this.displayCharacter=displayCharacter;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getSecondaryStructure$', function () {
return this.secondaryStructure;
});

Clazz.newMeth(C$, 'setSecondaryStructure$C', function (secondaryStructure) {
this.secondaryStructure=secondaryStructure;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$F', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$S', function (colour) {
this.colour=colour;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

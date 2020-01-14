(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1");
var C$=Clazz.newClass(P$, "SequenceFeaturesPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xStart=0;
this.xEnd=0;
this.sequenceRef=null;
this.type=null;
this.score=null;
this.description=null;
this.otherDetails=null;
this.fillColor=null;
this.featureGroup=null;
this.links=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (sequenceRef) {
C$.$init$.apply(this);
this.sequenceRef=sequenceRef;
}, 1);

Clazz.newMeth(C$, 'getFillColor$', function () {
return "#" + this.fillColor;
});

Clazz.newMeth(C$, 'setFillColor$S', function (fillColor) {
this.fillColor=fillColor;
});

Clazz.newMeth(C$, 'getXstart$', function () {
return this.xStart;
});

Clazz.newMeth(C$, 'setXstart$I', function (xStart) {
this.xStart=xStart;
});

Clazz.newMeth(C$, 'getXend$', function () {
return this.xEnd;
});

Clazz.newMeth(C$, 'setXend$I', function (xend) {
this.xEnd=xend;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$Float', function (score) {
this.score=score;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getOtherDetails$', function () {
return this.otherDetails;
});

Clazz.newMeth(C$, 'setOtherDetails$java_util_Map', function (otherDetails) {
this.otherDetails=otherDetails;
});

Clazz.newMeth(C$, 'getLinks$', function () {
return this.links;
});

Clazz.newMeth(C$, 'setLinks$java_util_Vector', function (links) {
this.links=links;
});

Clazz.newMeth(C$, 'getFeatureGroup$', function () {
return this.featureGroup;
});

Clazz.newMeth(C$, 'setFeatureGroup$S', function (featureGroup) {
this.featureGroup=featureGroup;
});

Clazz.newMeth(C$, 'getSequenceRef$', function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S', function (sequenceRef) {
this.sequenceRef=sequenceRef;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

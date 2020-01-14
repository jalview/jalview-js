(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceGrpPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.colourScheme=null;
this.groupName=null;
this.description=null;
this.displayBoxes=false;
this.displayText=false;
this.colourText=false;
this.showNonconserved=false;
this.startRes=0;
this.endRes=0;
this.sequenceRefs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sequenceRefs=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getColourScheme$', function () {
return this.colourScheme;
});

Clazz.newMeth(C$, 'setColourScheme$S', function (colourScheme) {
this.colourScheme=colourScheme;
});

Clazz.newMeth(C$, 'getGroupName$', function () {
return this.groupName;
});

Clazz.newMeth(C$, 'setGroupName$S', function (groupName) {
this.groupName=groupName;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'isDisplayBoxes$', function () {
return this.displayBoxes;
});

Clazz.newMeth(C$, 'setDisplayBoxes$Z', function (displayBoxes) {
this.displayBoxes=displayBoxes;
});

Clazz.newMeth(C$, 'isDisplayText$', function () {
return this.displayText;
});

Clazz.newMeth(C$, 'setDisplayText$Z', function (displayText) {
this.displayText=displayText;
});

Clazz.newMeth(C$, 'isColourText$', function () {
return this.colourText;
});

Clazz.newMeth(C$, 'setColourText$Z', function (colourText) {
this.colourText=colourText;
});

Clazz.newMeth(C$, 'isShowNonconserved$', function () {
return this.showNonconserved;
});

Clazz.newMeth(C$, 'setShowNonconserved$Z', function (showNonconserved) {
this.showNonconserved=showNonconserved;
});

Clazz.newMeth(C$, 'getStartRes$', function () {
return this.startRes;
});

Clazz.newMeth(C$, 'setStartRes$I', function (startRes) {
this.startRes=startRes;
});

Clazz.newMeth(C$, 'getEndRes$', function () {
return this.endRes;
});

Clazz.newMeth(C$, 'setEndRes$I', function (endRes) {
this.endRes=endRes;
});

Clazz.newMeth(C$, 'getSequenceRefs$', function () {
return this.sequenceRefs;
});

Clazz.newMeth(C$, 'setSequenceRefs$java_util_ArrayList', function (sequenceRefs) {
this.sequenceRefs=sequenceRefs;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

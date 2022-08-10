(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GlyphJustificationInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['growAbsorb','shrinkAbsorb'],'F',['weight','growLeftLimit','growRightLimit','shrinkLeftLimit','shrinkRightLimit'],'I',['growPriority','shrinkPriority']]]

Clazz.newMeth(C$, 'c$$F$Z$I$F$F$Z$I$F$F',  function (weight, growAbsorb, growPriority, growLeftLimit, growRightLimit, shrinkAbsorb, shrinkPriority, shrinkLeftLimit, shrinkRightLimit) {
;C$.$init$.apply(this);
if (weight < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["weight is negative"]);
}if (!C$.priorityIsValid$I(growPriority)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid grow priority"]);
}if (growLeftLimit < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["growLeftLimit is negative"]);
}if (growRightLimit < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["growRightLimit is negative"]);
}if (!C$.priorityIsValid$I(shrinkPriority)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid shrink priority"]);
}if (shrinkLeftLimit < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["shrinkLeftLimit is negative"]);
}if (shrinkRightLimit < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["shrinkRightLimit is negative"]);
}this.weight=weight;
this.growAbsorb=growAbsorb;
this.growPriority=growPriority;
this.growLeftLimit=growLeftLimit;
this.growRightLimit=growRightLimit;
this.shrinkAbsorb=shrinkAbsorb;
this.shrinkPriority=shrinkPriority;
this.shrinkLeftLimit=shrinkLeftLimit;
this.shrinkRightLimit=shrinkRightLimit;
}, 1);

Clazz.newMeth(C$, 'priorityIsValid$I',  function (priority) {
return priority >= 0 && priority <= 3 ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:52 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

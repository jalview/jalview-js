(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.awt.Color','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScoreColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.min=0;
this.max=0;
this.scores=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IA$DA$D$D', function (symbolIndex, scores, min, max) {
C$.superclazz.c$$IA.apply(this, [symbolIndex]);
C$.$init$.apply(this);
this.scores=scores;
this.min=min;
this.max=max;
var iSize=scores.length;
this.colors=Clazz.array($I$(1), [scores.length]);
for (var i=0; i < iSize; i++) {
var score=(scores[i] - min) / (max - min);
if (score > 1.0 ) {
score=1.0;
}if (score < 0.0 ) {
score=0.0;
}this.colors[i]=this.makeColour$F(score);
}
}, 1);

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI', function (c, j, seq) {
if ($I$(2).isGap$C(c)) {
return $I$(1).white;
}return C$.superclazz.prototype.findColour$C.apply(this, [c]);
});

Clazz.newMeth(C$, 'makeColour$F', function (c) {
return Clazz.new_($I$(1).c$$F$F$F,[c, 0.0, 1.0 - c]);
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return "Score";
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$.c$$IA$DA$D$D,[this.symbolIndex, this.scores, this.min, this.max]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

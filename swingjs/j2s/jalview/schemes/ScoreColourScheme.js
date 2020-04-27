(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.awt.Color','jalview.util.Comparison']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScoreColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['min','max'],'O',['scores','double[]']]]

Clazz.newMeth(C$, 'c$$IA$DA$D$D', function (symbolIndex, scores, min, max) {
;C$.superclazz.c$$IA.apply(this,[symbolIndex]);C$.$init$.apply(this);
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
return Clazz.new_($I$(1,1).c$$F$F$F,[c, 0.0, 1.0 - c]);
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return "Score";
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$.c$$IA$DA$D$D,[this.symbolIndex, this.scores, this.min, this.max]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

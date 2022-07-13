(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'java.awt.Color','jalview.analysis.scoremodels.ScoreModels','jalview.util.Comparison','jalview.schemes.JalviewColourScheme']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Blosum62ColourScheme", null, 'jalview.schemes.ResidueColourScheme');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['LIGHT_BLUE','java.awt.Color','+DARK_BLUE']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI',  function (view, coll) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI$S$F',  function (res, j, seq, consensusResidue, pid) {
var sm=$I$(2).getInstance$().getBlosum62$();
if ("a" <= res && res <= "z" ) {
res = String.fromCharCode(res.$c()- (32));
}if ($I$(3).isGap$C(res) || consensusResidue == null  ) {
return $I$(1).white;
}var colour;
if (consensusResidue.indexOf$I(res) > -1) {
colour=C$.DARK_BLUE;
} else {
var score=0;
for (var consensus, $consensus = 0, $$consensus = consensusResidue.toCharArray$(); $consensus<$$consensus.length&&((consensus=($$consensus[$consensus])),1);$consensus++) {
score+=sm.getPairwiseScore$C$C(consensus, res);
}
if (score > 0 ) {
colour=C$.LIGHT_BLUE;
} else {
colour=$I$(1).white;
}}return colour;
});

Clazz.newMeth(C$, 'isPeptideSpecific$',  function () {
return true;
});

Clazz.newMeth(C$, 'getSchemeName$',  function () {
return $I$(4).Blosum62.toString();
});

Clazz.newMeth(C$, 'isSimple$',  function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.LIGHT_BLUE=Clazz.new_($I$(1,1).c$$I$I$I,[204, 204, 255]);
C$.DARK_BLUE=Clazz.new_($I$(1,1).c$$I$I$I,[154, 154, 255]);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

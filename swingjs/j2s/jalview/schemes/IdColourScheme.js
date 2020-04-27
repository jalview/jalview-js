(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.JalviewColourScheme','java.awt.Color']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdColourScheme", null, null, 'jalview.schemes.ColourSchemeI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.view=null;
},1);

C$.$fields$=[['O',['view','jalview.api.AlignViewportI']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
;C$.$init$.apply(this);
this.view=view;
}, 1);

Clazz.newMeth(C$, 'getSchemeName$', function () {
return $I$(1).IdColour.toString();
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
return Clazz.new_(C$.c$$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI,[view, coll]);
});

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map', function (alignment, hiddenReps) {
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI$S$F', function (symbol, position, seq, consensusResidue, pid) {
if (this.view == null ) {
return $I$(2).WHITE;
}var col=this.view.getSequenceColour$jalview_datamodel_SequenceI(seq);
return $I$(2).WHITE.equals$O(col) ? $I$(2).WHITE : col.darker$();
});

Clazz.newMeth(C$, 'hasGapColour$', function () {
return false;
});

Clazz.newMeth(C$, 'isApplicableTo$jalview_datamodel_AnnotatedCollectionI', function (ac) {
return true;
});

Clazz.newMeth(C$, 'isSimple$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

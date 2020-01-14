(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.JalviewColourScheme','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IdColourScheme", null, null, 'jalview.schemes.ColourSchemeI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.view=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.view=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, coll) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

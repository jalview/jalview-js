(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.util.StringUtils','jalview.io.gff.SequenceOntologyFactory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InterProScanHelper", null, 'jalview.io.gff.Gff3Helper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'processGff$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z',  function (seq, gff, align, newseqs, relaxedIdMatching) {
if (".".equals$O(gff[1])) {
return null;
}return C$.superclazz.prototype.processGff$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z.apply(this, [seq, gff, align, newseqs, relaxedIdMatching]);
});

Clazz.newMeth(C$, 'buildSequenceFeature$SA$java_util_Map',  function (gff, attributes) {
var sf=C$.superclazz.prototype.buildSequenceFeature$SA$I$S$java_util_Map.apply(this, [gff, 1, "InterProScan", attributes]);
var desc=attributes.get$O("signature_desc");
var description=$I$(1).listToDelimitedString$java_util_List$S(desc, ", ");
if (description.length$() > 0) {
sf.setDescription$S(description);
}return sf;
});

Clazz.newMeth(C$, 'recognises$SA',  function (columns) {
var so=$I$(2).getInstance$();
var type=columns[2];
if (so.isA$S$S(type, "protein_match") || (".".equals$O(columns[1]) && so.isA$S$S(type, "polypeptide") ) ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'findTargetId$S$java_util_Map',  function (target, set) {
var ids=set.get$O("ID");
if (ids == null  || ids.size$() != 1 ) {
return null;
}return ids.get$I(0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

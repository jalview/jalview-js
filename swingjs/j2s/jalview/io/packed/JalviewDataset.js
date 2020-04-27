(function(){var P$=Clazz.newPackage("jalview.io.packed"),I$=[[0,'java.util.ArrayList','jalview.analysis.SeqsetUtils','jalview.analysis.TreeModel','java.util.Hashtable','java.util.HashMap',['jalview.io.packed.JalviewDataset','.AlignmentSet']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewDataset", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AlignmentSet',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.relaxedIdMatching=false;
},1);

C$.$fields$=[['Z',['relaxedIdMatching'],'O',['parentDataset','jalview.datamodel.AlignmentI','al','java.util.List','featureColours','java.util.Map','seqDetails','java.util.Hashtable']]]

Clazz.newMeth(C$, 'getParentDataset$', function () {
return this.parentDataset;
});

Clazz.newMeth(C$, 'setParentDataset$jalview_datamodel_AlignmentI', function (parentDataset) {
this.parentDataset=parentDataset;
});

Clazz.newMeth(C$, 'getFeatureColours$', function () {
return this.featureColours;
});

Clazz.newMeth(C$, 'setFeatureColours$java_util_Map', function (featureColours) {
this.featureColours=featureColours;
});

Clazz.newMeth(C$, 'getSeqDetails$', function () {
return this.seqDetails;
});

Clazz.newMeth(C$, 'setSeqDetails$java_util_Hashtable', function (seqDetails) {
this.seqDetails=seqDetails;
});

Clazz.newMeth(C$, 'getAl$', function () {
return (this.al == null ) ? Clazz.new_($I$(1,1)) : this.al;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.seqDetails=Clazz.new_($I$(4,1));
this.al=Clazz.new_($I$(1,1));
this.parentDataset=null;
this.featureColours=Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$java_util_Map$java_util_Hashtable', function (aldataset, fc, seqDets) {
C$.c$$jalview_datamodel_AlignmentI$java_util_Map$java_util_Hashtable$jalview_datamodel_AlignmentI.apply(this, [aldataset, fc, seqDets, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$java_util_Map$java_util_Hashtable$jalview_datamodel_AlignmentI', function (aldataset, fc, seqDets, parentAlignment) {
C$.c$.apply(this, []);
this.parentDataset=aldataset;
if (parentAlignment != null ) {
this.parentDataset=parentAlignment.getDataset$();
if (this.parentDataset == null ) {
this.parentDataset=parentAlignment;
} else {
this.addAlignment$jalview_datamodel_AlignmentI(parentAlignment);
}}if (seqDets != null ) {
this.seqDetails=seqDets;
}if (fc != null ) {
this.featureColours=fc;
}}, 1);

Clazz.newMeth(C$, 'hasAlignments$', function () {
return this.al != null  && this.al.size$() > 0 ;
});

Clazz.newMeth(C$, 'getLastAlignment$', function () {
return (this.al == null  || this.al.size$() < 1 ) ? null : this.al.get$I(this.al.size$() - 1).al;
});

Clazz.newMeth(C$, 'getLastAlignmentSet$', function () {
return (this.al == null  || this.al.size$() < 1 ) ? null : this.al.get$I(this.al.size$() - 1);
});

Clazz.newMeth(C$, 'addAlignment$jalview_datamodel_AlignmentI', function (newal) {
if (!this.hasAlignments$()) {
this.al=Clazz.new_($I$(1,1));
}var last=this.getLastAlignmentSet$();
if (last != null ) {
System.err.println$S("Deuniquifying last alignment set.");
last.deuniquifyAlignment$();
}this.al.add$O(Clazz.new_($I$(6,1).c$$jalview_datamodel_AlignmentI,[this, null, newal]));
});

Clazz.newMeth(C$, 'addTreeFromFile$jalview_io_NewickFile', function (nf) {
var lal=this.getLastAlignmentSet$();
lal.trees.add$O(nf);
});

Clazz.newMeth(C$, 'hasSequenceAssoc$', function () {
return false;
});

Clazz.newMeth(C$, 'getLastAssociatedSequence$', function () {
return null;
});

Clazz.newMeth(C$, 'updateSetModified$Z', function (modified) {
this.getLastAlignmentSet$().updateSetModified$Z(modified);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewDataset, "AlignmentSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modified=false;
},1);

C$.$fields$=[['Z',['modified'],'O',['al','jalview.datamodel.AlignmentI','trees','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI', function (a) {
;C$.$init$.apply(this);
this.al=a;
this.trees=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'deuniquifyAlignment$', function () {
if (this.this$0.seqDetails == null  || this.this$0.seqDetails.size$() == 0 ) {
return;
}$I$(2,"deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA$Z",[this.this$0.seqDetails, this.al.getSequencesArray$(), true]);
for (var nf, $nf = this.trees.iterator$(); $nf.hasNext$()&&((nf=($nf.next$())),1);) {
var njt=Clazz.new_([this.al.getSequencesArray$(), null, nf],$I$(3,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentView$jalview_io_NewickFile);
njt.renameAssociatedNodes$();
}
});

Clazz.newMeth(C$, 'isModified$', function () {
return this.modified;
});

Clazz.newMeth(C$, 'updateSetModified$Z', function (modifiedFromAction) {
this.modified|=modifiedFromAction;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

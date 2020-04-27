(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Cache',['jalview.gui.StructureViewer','.ViewerType'],'jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI','Thread','jalview.gui.AppJmol','jalview.gui.ChimeraViewFrame','java.util.HashMap','java.util.LinkedHashMap','java.util.ArrayList']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureViewer", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ViewerType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.superposeAdded=true;
this.sview=null;
},1);

C$.$fields$=[['Z',['superposeAdded'],'O',['ssm','jalview.structure.StructureSelectionManager','sview','jalview.api.structures.JalviewStructureDisplayI']]]

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager', function (structureSelectionManager) {
;C$.$init$.apply(this);
this.ssm=structureSelectionManager;
}, 1);

Clazz.newMeth(C$, 'reconfigure$jalview_api_structures_JalviewStructureDisplayI', function (display) {
var sv=Clazz.new_(C$.c$$jalview_structure_StructureSelectionManager,[display.getBinding$().getSsm$()]);
sv.sview=display;
return sv;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
if (this.sview != null ) {
return this.sview.toString();
}return "New View";
});

Clazz.newMeth(C$, 'getViewerType$', function () {
var viewType=$I$(1,"getDefault$S$S",["STRUCTURE_DISPLAY", $I$(2).JMOL.name$()]);
return $I$(2).valueOf$S(viewType);
});

Clazz.newMeth(C$, 'setViewerType$jalview_gui_StructureViewer_ViewerType', function (type) {
$I$(1,"setProperty$S$S",["STRUCTURE_DISPLAY", type.name$()]);
});

Clazz.newMeth(C$, 'viewStructures$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel', function (pdbs, seqs, ap) {
var viewer=p$1.onlyOnePdb$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel.apply(this, [pdbs, seqs, ap]);
if (viewer != null ) {
return viewer;
}var viewerType=this.getViewerType$();
var seqsForPdbs=this.getSequencesForPdbs$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA(pdbs, seqs);
var pdbsForFile=seqsForPdbs.keySet$().toArray$OA(Clazz.array($I$(3), [seqsForPdbs.size$()]));
var theSeqs=seqsForPdbs.values$().toArray$OA(Clazz.array($I$(4), [seqsForPdbs.size$(), null]));
if (this.sview != null ) {
this.sview.setAlignAddedStructures$Z(this.superposeAdded);
Clazz.new_([((P$.StructureViewer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
for (var pdbep=0; pdbep < this.$finals$.pdbsForFile.length; pdbep++) {
var pdb=this.$finals$.pdbsForFile[pdbep];
if (!this.b$['jalview.gui.StructureViewer'].sview.addAlreadyLoadedFile$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S(this.$finals$.theSeqs[pdbep], null, this.$finals$.ap, pdb.getId$())) {
this.b$['jalview.gui.StructureViewer'].sview.addToExistingViewer$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S(pdb, this.$finals$.theSeqs[pdbep], null, this.$finals$.ap, pdb.getId$());
}}
this.b$['jalview.gui.StructureViewer'].sview.updateTitleAndMenus$();
});
})()
), Clazz.new_(P$.StructureViewer$1.$init$,[this, {theSeqs:theSeqs,ap:ap,pdbsForFile:pdbsForFile}]))],$I$(5,1).c$$Runnable).start$();
return this.sview;
}if (viewerType.equals$O($I$(2).JMOL)) {
this.sview=Clazz.new_($I$(6,1).c$$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA,[ap, this.superposeAdded, pdbsForFile, theSeqs]);
} else if (viewerType.equals$O($I$(2).CHIMERA)) {
this.sview=Clazz.new_($I$(7,1).c$$jalview_datamodel_PDBEntryA$Z$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel,[pdbsForFile, this.superposeAdded, theSeqs, ap]);
} else {
$I$(1).log.error$O("Unknown structure viewer type " + this.getViewerType$().toString());
}return this.sview;
});

Clazz.newMeth(C$, 'getSequencesForPdbs$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA', function (pdbs, seqs) {
if (pdbs == null  || seqs == null   || pdbs.length != seqs.length ) {
return null;
}var pdbsSeen=Clazz.new_($I$(8,1));
var pdbSeqs=Clazz.new_($I$(9,1));
for (var i=0; i < pdbs.length; i++) {
var pdb=pdbs[i];
var seq=seqs[i];
var pdbFile=pdb.getFile$();
if (pdbFile == null  || pdbFile.length$() == 0 ) {
pdbFile=pdb.getId$();
}if (!pdbsSeen.containsKey$O(pdbFile)) {
pdbsSeen.put$O$O(pdbFile, pdb);
pdbSeqs.put$O$O(pdb, Clazz.new_($I$(10,1)));
} else {
pdb=pdbsSeen.get$O(pdbFile);
}var seqsForPdb=pdbSeqs.get$O(pdb);
if (!seqsForPdb.contains$O(seq)) {
seqsForPdb.add$O(seq);
}}
var result=Clazz.new_($I$(9,1));
for (var entry, $entry = pdbSeqs.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var theSeqs=entry.getValue$();
result.put$O$O(entry.getKey$(), theSeqs.toArray$OA(Clazz.array($I$(4), [theSeqs.size$()])));
}
return result;
});

Clazz.newMeth(C$, 'onlyOnePdb$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel', function (pdbs, seqsForPdbs, ap) {
var seqs=Clazz.new_($I$(10,1));
if (pdbs == null  || pdbs.length == 0 ) {
return null;
}var i=0;
var firstFile=pdbs[0].getFile$();
for (var pdb, $pdb = 0, $$pdb = pdbs; $pdb<$$pdb.length&&((pdb=($$pdb[$pdb])),1);$pdb++) {
var pdbFile=pdb.getFile$();
if (pdbFile == null  || !pdbFile.equals$O(firstFile) ) {
return null;
}var pdbseq=seqsForPdbs[i++];
if (pdbseq != null ) {
seqs.add$O(pdbseq);
}}
return this.viewStructures$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel(pdbs[0], seqs.toArray$OA(Clazz.array($I$(4), [seqs.size$()])), ap);
}, p$1);

Clazz.newMeth(C$, 'viewStructures$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel', function (pdb, seqsForPdb, ap) {
if (this.sview != null ) {
this.sview.setAlignAddedStructures$Z(this.superposeAdded);
var pdbId=pdb.getId$();
if (!this.sview.addAlreadyLoadedFile$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S(seqsForPdb, null, ap, pdbId)) {
this.sview.addToExistingViewer$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S(pdb, seqsForPdb, null, ap, pdbId);
}this.sview.updateTitleAndMenus$();
this.sview.raiseViewer$();
return this.sview;
}var viewerType=this.getViewerType$();
if (viewerType.equals$O($I$(2).JMOL)) {
this.sview=Clazz.new_($I$(6,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel,[pdb, seqsForPdb, null, ap]);
} else if (viewerType.equals$O($I$(2).CHIMERA)) {
this.sview=Clazz.new_($I$(7,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel,[pdb, seqsForPdb, null, ap]);
} else {
$I$(1).log.error$O("Unknown structure viewer type " + this.getViewerType$().toString());
}return this.sview;
});

Clazz.newMeth(C$, 'createView$jalview_gui_StructureViewer_ViewerType$SA$SA$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel$jalview_datamodel_StructureViewerModel$S$java_awt_Rectangle$S', function (type, pdbf, id, sq, alignPanel, viewerData, fileloc, rect, vid) {
var useinViewerSuperpos=viewerData.isAlignWithPanel$();
var usetoColourbyseq=viewerData.isColourWithAlignPanel$();
var viewerColouring=viewerData.isColourByViewer$();
switch (type) {
case $I$(2).JMOL:
this.sview=Clazz.new_($I$(6,1).c$$SA$SA$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel$Z$Z$Z$S$java_awt_Rectangle$S,[pdbf, id, sq, alignPanel, usetoColourbyseq, useinViewerSuperpos, viewerColouring, fileloc, rect, vid]);
break;
case $I$(2).CHIMERA:
$I$(1).log.error$O("Unsupported structure viewer type " + type.toString());
break;
default:
$I$(1).log.error$O("Unknown structure viewer type " + type.toString());
}
return this.sview;
});

Clazz.newMeth(C$, 'isBusy$', function () {
if (this.sview != null ) {
if (!this.sview.hasMapping$()) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'hasPdbId$S', function (pDBid) {
if (this.sview == null ) {
return false;
}return this.sview.getBinding$().hasPdbId$S(pDBid);
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.sview != null  && this.sview.isVisible$() ;
});

Clazz.newMeth(C$, 'setSuperpose$Z', function (alignAddedStructures) {
this.superposeAdded=alignAddedStructures;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructureViewer, "ViewerType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "JMOL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CHIMERA", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.gui.SequenceRenderer','javax.swing.SwingUtilities']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewChimeraBindingModel", null, 'jalview.ext.rbvi.chimera.JalviewChimeraBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cvf','jalview.gui.ChimeraViewFrame']]]

Clazz.newMeth(C$, 'c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType', function (chimeraViewFrame, ssm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[ssm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
this.cvf=chimeraViewFrame;
}, 1);

Clazz.newMeth(C$, 'getFeatureRenderer$jalview_api_AlignmentViewPanel', function (alignment) {
var ap=(alignment == null ) ? this.cvf.getAlignmentPanel$() : alignment;
if (ap.av.isShowSequenceFeatures$()) {
return ap.getSeqPanel$().seqCanvas.fr;
}return null;
});

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel', function (alignment) {
return Clazz.new_([(alignment).av],$I$(1,1).c$$jalview_api_AlignViewportI);
});

Clazz.newMeth(C$, 'refreshGUI$', function () {
$I$(2,"invokeLater$Runnable",[((P$.JalviewChimeraBindingModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewChimeraBindingModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.JalviewChimeraBindingModel'].cvf.updateTitleAndMenus$();
this.b$['jalview.gui.JalviewChimeraBindingModel'].cvf.revalidate$();
});
})()
), Clazz.new_(P$.JalviewChimeraBindingModel$1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'updateColours$O', function (source) {
var ap=source;
if (!this.cvf.isUsedforcolourby$jalview_gui_AlignmentPanel(ap)) {
return;
}if (!this.isLoadingFromArchive$()) {
this.colourBySequence$jalview_api_AlignmentViewPanel(ap);
}});

Clazz.newMeth(C$, 'releaseReferences$O', function (svl) {
});

Clazz.newMeth(C$, 'releaseUIResources$', function () {
});

Clazz.newMeth(C$, 'refreshPdbEntries$', function () {
});

Clazz.newMeth(C$, 'sendAsynchronousCommand$S$S', function (command, progressMsg) {
var handle=progressMsg == null  ? 0 : this.cvf.startProgressBar$S(progressMsg);
$I$(2,"invokeLater$Runnable",[((P$.JalviewChimeraBindingModel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewChimeraBindingModel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['jalview.ext.rbvi.chimera.JalviewChimeraBinding'].sendChimeraCommand$S$Z.apply(this.b$['jalview.ext.rbvi.chimera.JalviewChimeraBinding'], [this.$finals$.command, false]);
} finally {
if (this.$finals$.progressMsg != null ) {
this.b$['jalview.gui.JalviewChimeraBindingModel'].cvf.stopProgressBar$S$J(null, this.$finals$.handle);
}}
});
})()
), Clazz.new_(P$.JalviewChimeraBindingModel$2.$init$,[this, {command:command,progressMsg:progressMsg,handle:handle}]))]);
});

Clazz.newMeth(C$, 'getViewer$', function () {
return this.cvf;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

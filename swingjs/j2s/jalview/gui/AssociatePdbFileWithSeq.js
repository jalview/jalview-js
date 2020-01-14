(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.datamodel.PDBEntry','jalview.structure.StructureSelectionManager','jalview.datamodel.SequenceI','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager',['jalview.datamodel.PDBEntry','.Type']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AssociatePdbFileWithSeq");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'associatePdbWithSeq$S$jalview_io_DataSourceType$jalview_datamodel_SequenceI$Z$jalview_api_StructureSelectionManagerProvider', function (choice, file, sequence, prompt, ssmp) {
var entry=Clazz.new_($I$(1));
var pdbfile=null;
pdbfile=$I$(2).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(ssmp).setMapping$Z$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType(false, Clazz.array($I$(3), -1, [sequence]), null, choice, file);
if (pdbfile == null ) {
return null;
}if (pdbfile.getId$() == null ) {
var reply=null;
if (prompt) {
reply=$I$(4).showInternalInputDialog$java_awt_Component$S$S$I($I$(5).desktop, $I$(6).getString$S("label.couldnt_find_pdb_id_in_file"), $I$(6).getString$S("label.no_pdb_id_in_file"), 3);
}if (reply == null ) {
return null;
}entry.setId$S(reply);
} else {
entry.setId$S(pdbfile.getId$());
}entry.setType$jalview_datamodel_PDBEntry_Type($I$(7).FILE);
if (pdbfile != null ) {
entry.setFile$S(choice);
sequence.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(entry);
$I$(2).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(ssmp).registerPDBEntry$jalview_datamodel_PDBEntry(entry);
}return entry;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

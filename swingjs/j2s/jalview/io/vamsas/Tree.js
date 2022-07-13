(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),p$1={},I$=[[0,'jalview.gui.TreePanel','jalview.io.NewickFile','uk.ac.vamsas.objects.core.Tree','jalview.bin.Console','jalview.io.vamsas.DatastoreItem','uk.ac.vamsas.objects.core.Provenance','uk.ac.vamsas.objects.core.Entry','uk.ac.vamsas.objects.core.Input','uk.ac.vamsas.objects.core.Param','uk.ac.vamsas.objects.core.Seg','jalview.datamodel.SeqCigar','java.util.Vector','jalview.datamodel.Sequence','java.util.Hashtable','uk.ac.vamsas.objects.core.Treenode','uk.ac.vamsas.objects.core.Vref','uk.ac.vamsas.objects.core.Newick','jalview.datamodel.SequenceI','jalview.datamodel.Alignment','jalview.datamodel.AlignmentView']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Tree", null, 'jalview.io.vamsas.DatastoreItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inputData=null;
},1);

C$.$fields$=[['S',['title'],'O',['jal','jalview.datamodel.AlignmentI','tp','jalview.gui.TreePanel','tree','uk.ac.vamsas.objects.core.Tree','alignment','uk.ac.vamsas.objects.core.Alignment','ntree','jalview.io.NewickFile','inputData','jalview.datamodel.AlignmentView']]]

Clazz.newMeth(C$, 'updateFrom$jalview_io_VamsasAppDatastore$jalview_gui_AlignFrame$uk_ac_vamsas_objects_core_Tree',  function (datastore, alignFrame, vtree) {
var toTree=Clazz.new_(C$.c$$jalview_io_VamsasAppDatastore$jalview_gui_AlignFrame$uk_ac_vamsas_objects_core_Tree,[datastore, alignFrame, vtree]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$jalview_gui_AlignFrame$uk_ac_vamsas_objects_core_Tree',  function (datastore, alignFrame, vtree) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class.apply(this,[datastore, vtree, Clazz.getClass($I$(1))]);C$.$init$.apply(this);
this.doJvUpdate$();
}, 1);

Clazz.newMeth(C$, 'getNtree',  function () {
return Clazz.new_([this.tree.getNewick$I(0).getContent$()],$I$(2,1).c$$S);
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$jalview_gui_TreePanel$jalview_datamodel_AlignmentI$uk_ac_vamsas_objects_core_Alignment',  function (datastore, tp2, jal2, alignment2) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$O$Class.apply(this,[datastore, tp2, Clazz.getClass($I$(3))]);C$.$init$.apply(this);
this.jal=jal2;
this.tp=this.jvobj;
this.alignment=alignment2;
this.tree=this.vobj;
this.doSync$();
}, 1);

Clazz.newMeth(C$, 'addFromDocument$',  function () {
this.tree=this.vobj;
var tp=this.jvobj;
var idata=this.recoverInputData$uk_ac_vamsas_objects_core_Provenance(this.tree.getProvenance$());
try {
if (idata != null  && idata[0] != null  ) {
this.inputData=idata[0];
}this.ntree=p$1.getNtree.apply(this, []);
this.title=this.tree.getNewick$I(0).getTitle$();
if (this.title == null  || this.title.length$() == 0 ) {
this.title=this.tree.getTitle$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4,"warn$S$Throwable",["Problems parsing treefile '" + this.tree.getNewick$I(0).getContent$() + "'" , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'conflict$',  function () {
$I$(4,"info$S",["Update (with conflict) from vamsas document to alignment associated tree not implemented yet."]);
});

Clazz.newMeth(C$, 'updateToDoc$',  function () {
if (this.isModifiable$S(this.tree.getModifiable$())) {
$I$(5).log.info$S("TODO: Update tree in document from jalview.");
} else {
$I$(5).log.info$S("TODO: Add the locally modified tree in Jalview as a new tree in document, leaving locked tree unchanged.");
}});

Clazz.newMeth(C$, 'updateFromDoc$',  function () {
$I$(5).log.debug$S("Update the local tree in jalview from the document.");
if (this.isModifiable$S(this.tree.getModifiable$())) {
$I$(5).log.debug$S("Update tree in document from jalview.");
} else {
$I$(5).log.debug$S("Add modified jalview tree as new tree in document.");
}});

Clazz.newMeth(C$, 'makeTreeProvenance$jalview_datamodel_AlignmentI$jalview_gui_TreePanel',  function (jal, tp) {
$I$(4,"debug$S",["Making Tree provenance for " + tp.getTitle$()]);
var prov=Clazz.new_($I$(6,1));
prov.addEntry$uk_ac_vamsas_objects_core_Entry(Clazz.new_($I$(7,1)));
prov.getEntry$I(0).setAction$S("imported " + tp.getTitle$());
prov.getEntry$I(0).setUser$S(this.provEntry.getUser$());
prov.getEntry$I(0).setApp$S(this.provEntry.getApp$());
prov.getEntry$I(0).setDate$java_util_Date(this.provEntry.getDate$());
var originalData=tp.getTree$().getOriginalData$();
if (originalData != null ) {
var vInput=Clazz.new_($I$(8,1));
var alsqrefs=this.getjv2vObjs$java_util_Vector(p$1.findAlignmentSequences$jalview_datamodel_AlignmentI$jalview_datamodel_SeqCigarA.apply(this, [jal, tp.getTree$().getOriginalData$().getSequences$()]));
var alsqs=Clazz.array(java.lang.Object, [alsqrefs.size$()]);
alsqrefs.copyInto$OA(alsqs);
vInput.setObjRef$OA(alsqs);
prov.getEntry$I(0).setAction$S("created " + tp.getTitle$());
prov.getEntry$I(0).addInput$uk_ac_vamsas_objects_core_Input(vInput);
vInput.setName$S("jalview:seqdist");
prov.getEntry$I(0).addParam$uk_ac_vamsas_objects_core_Param(Clazz.new_($I$(9,1)));
prov.getEntry$I(0).getParam$I(0).setName$S("treeType");
prov.getEntry$I(0).getParam$I(0).setType$S("utf8");
prov.getEntry$I(0).getParam$I(0).setContent$S("NJ");
var ranges=originalData.getVisibleContigs$();
var start=tp.getTree$().getOriginalData$().getAlignmentOrigin$();
for (var r=0; r < ranges.length; r+=2) {
var visSeg=Clazz.new_($I$(10,1));
visSeg.setStart$I(1 + start + ranges[r] );
visSeg.setEnd$I(start + ranges[r + 1]);
visSeg.setInclusive$Z(true);
vInput.addSeg$uk_ac_vamsas_objects_core_Seg(visSeg);
}
}$I$(4,"debug$S",["Finished Tree provenance for " + tp.getTitle$()]);
return prov;
}, p$1);

Clazz.newMeth(C$, 'findAlignmentSequences$jalview_datamodel_AlignmentI$jalview_datamodel_SeqCigarA',  function (jal, sequences) {
var tseqs=Clazz.array($I$(11), [sequences.length]);
System.arraycopy$O$I$O$I$I(sequences, 0, tseqs, 0, sequences.length);
var alsq=Clazz.new_($I$(12,1));
var jalsqs=jal.getSequences$();
{
for (var asq, $asq = jalsqs.iterator$(); $asq.hasNext$()&&((asq=($asq.next$())),1);) {
for (var t=0; t < sequences.length; t++) {
if (tseqs[t] != null  && (tseqs[t].getRefSeq$() === asq  || tseqs[t].getRefSeq$() === asq.getDatasetSequence$()  ) ) {
tseqs[t]=null;
alsq.add$O(asq);
}}
}
}if (alsq.size$() < sequences.length) {
$I$(4).warn$S("Not recovered all alignment sequences for given set of input sequence CIGARS");
}return alsq;
}, p$1);

Clazz.newMeth(C$, 'UpdateSequenceTreeMap$jalview_gui_TreePanel',  function (tp) {
if (tp == null  || this.tree == null  ) {
return;
}if (tp.getTree$() == null ) {
$I$(4,"warn$S",["Not updating SequenceTreeMap for " + this.tree.getVorbaId$()]);
return;
}var leaves=tp.getTree$().findLeaves$jalview_datamodel_SequenceNode(tp.getTree$().getTopNode$());
var tn=this.tree.getTreenode$();
var sz=tn.length;
var i=0;
while (i < sz){
var node=tn[i++];
var mappednode=p$1.findNodeSpec$S$java_util_Vector.apply(this, [node.getNodespec$(), leaves]);
if (mappednode != null  && Clazz.instanceOf(mappednode, "jalview.datamodel.SequenceNode") ) {
var leaf=mappednode;
var jvseq=null;
var vrf=0;
var refv=0;
while (jvseq == null  && vrf < node.getVrefCount$() ){
if (refv < node.getVref$I(vrf).getRefsCount$()) {
var noderef=node.getVref$I(vrf).getRefs$I(refv++);
if (Clazz.instanceOf(noderef, "uk.ac.vamsas.objects.core.AlignmentSequence")) {
jvseq=this.getvObj2jv$uk_ac_vamsas_client_Vobject(noderef);
}} else {
refv=0;
++vrf;
}}
if (Clazz.instanceOf(jvseq, "jalview.datamodel.SequenceI")) {
leaf.setElement$O(jvseq);
leaf.setPlaceholder$Z(false);
} else {
leaf.setPlaceholder$Z(true);
leaf.setElement$O(Clazz.new_([leaf.getName$(), "THISISAPLACEHLDER"],$I$(13,1).c$$S$S));
}}}
});

Clazz.newMeth(C$, 'makeTreeNodes$jalview_analysis_TreeModel$uk_ac_vamsas_objects_core_Newick',  function (treeModel, newick) {
var leaves=treeModel.findLeaves$jalview_datamodel_SequenceNode(treeModel.getTopNode$());
var tnv=Clazz.new_($I$(12,1));
var l=leaves.elements$();
var nodespecs=Clazz.new_($I$(14,1));
while (l.hasMoreElements$()){
var tnode=l.nextElement$();
if (Clazz.instanceOf(tnode, "jalview.datamodel.SequenceNode")) {
if (!(tnode).isPlaceholder$()) {
var assocseq=(tnode).element$();
if (Clazz.instanceOf(assocseq, "jalview.datamodel.SequenceI")) {
var vobj=this.getjv2vObj$O(assocseq);
if (vobj != null ) {
var node=Clazz.new_($I$(15,1));
if (newick.isRegisterable$()) {
this.cdoc.registerObject$uk_ac_vamsas_client_Vobject(newick);
node.addTreeId$O(newick);
}node.setNodespec$S(p$1.makeNodeSpec$java_util_Hashtable$jalview_datamodel_BinaryNode.apply(this, [nodespecs, tnode]));
node.setName$S(tnode.getName$());
var vr=Clazz.new_($I$(16,1));
vr.addRefs$O(vobj);
node.addVref$uk_ac_vamsas_objects_core_Vref(vr);
tnv.addElement$O(node);
} else {
System.err.println$S("WARNING: Unassociated treeNode " + tnode.element$().toString() + " " + ((tnode.getName$() != null ) ? " label " + tnode.getName$() : "") );
}}}}}
if (tnv.size$() > 0) {
var tn=Clazz.array($I$(15), [tnv.size$()]);
tnv.copyInto$OA(tn);
return tn;
}return Clazz.array($I$(15), -1, []);
});

Clazz.newMeth(C$, 'makeNodeSpec$java_util_Hashtable$jalview_datamodel_BinaryNode',  function (nodespecs, tnode) {
var nname= String.instantialize(tnode.getName$());
var nindx=nodespecs.get$O(nname);
if (nindx == null ) {
nindx=Integer.valueOf$I(1);
}nname=nindx.toString() + " " + nname ;
return nname;
}, p$1);

Clazz.newMeth(C$, 'findNodeSpec$S$java_util_Vector',  function (nodespec, leaves) {
var occurence=-1;
var nspec=nodespec.substring$I(nodespec.indexOf$I(" ") + 1);
var oval=nodespec.substring$I$I(0, nodespec.indexOf$I(" "));
try {
occurence=Integer.valueOf$S(oval).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Invalid nodespec '" + nodespec + "'" );
return null;
} else {
throw e;
}
}
var bn=null;
var nocc=0;
var en=leaves.elements$();
while (en.hasMoreElements$() && nocc < occurence ){
bn=en.nextElement$();
if (Clazz.instanceOf(bn, "jalview.datamodel.SequenceNode") && bn.getName$().equals$O(nspec) ) {
--occurence;
} else {
bn=null;
}}
return bn;
}, p$1);

Clazz.newMeth(C$, 'addToDocument$',  function () {
this.tree=Clazz.new_($I$(3,1));
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(this.tp, this.tree);
this.tree.setTitle$S(this.tp.getTitle$());
var newick=Clazz.new_($I$(17,1));
newick.setContent$S(this.tp.getTree$().print$());
newick.setTitle$S(this.tp.getTitle$());
this.tree.addNewick$uk_ac_vamsas_objects_core_Newick(newick);
this.tree.setProvenance$uk_ac_vamsas_objects_core_Provenance(p$1.makeTreeProvenance$jalview_datamodel_AlignmentI$jalview_gui_TreePanel.apply(this, [this.jal, this.tp]));
this.tree.setTreenode$uk_ac_vamsas_objects_core_TreenodeA(this.makeTreeNodes$jalview_analysis_TreeModel$uk_ac_vamsas_objects_core_Newick(this.tp.getTree$(), newick));
this.alignment.addTree$uk_ac_vamsas_objects_core_Tree(this.tree);
});

Clazz.newMeth(C$, 'recoverInputData$uk_ac_vamsas_objects_core_Provenance',  function (tp) {
var javport=null;
var jal=null;
var view=null;
for (var pe=0; pe < tp.getEntryCount$(); pe++) {
if (tp.getEntry$I(pe).getInputCount$() > 0) {
if (tp.getEntry$I(pe).getInputCount$() > 1) {
$I$(4,"warn$S",["Ignoring additional input spec in provenance entry " + tp.getEntry$I(pe).toString()]);
}var vInput=tp.getEntry$I(pe).getInput$I(0);
if (vInput.getObjRefCount$() == 0) {
if (this.tree.getV_parent$() != null  && Clazz.instanceOf(this.tree.getV_parent$(), "uk.ac.vamsas.objects.core.Alignment") ) {
javport=p$1.getViewport$uk_ac_vamsas_client_Vobject.apply(this, [this.tree.getV_parent$()]);
jal=javport.getAlignment$();
view=javport.getAlignment$().getCompactAlignment$();
}} else {
if (vInput.getObjRefCount$() == 1 && Clazz.instanceOf(vInput.getObjRef$I(0), "uk.ac.vamsas.objects.core.Alignment") ) {
javport=p$1.getViewport$uk_ac_vamsas_client_Vobject.apply(this, [vInput.getObjRef$I(0)]);
jal=javport.getAlignment$();
view=javport.getAlignment$().getCompactAlignment$();
} else if (Clazz.instanceOf(vInput.getObjRef$I(0), "uk.ac.vamsas.objects.core.AlignmentSequence")) {
javport=p$1.getViewport$uk_ac_vamsas_client_Vobject.apply(this, [(vInput.getObjRef$I(0)).getV_parent$()]);
jal=javport.getAlignment$();
var seqs=Clazz.array($I$(18), [vInput.getObjRefCount$()]);
for (var i=0, iSize=vInput.getObjRefCount$(); i < iSize; i++) {
var seq=this.getvObj2jv$uk_ac_vamsas_client_Vobject(vInput.getObjRef$I(i));
seqs[i]=seq;
}
view=Clazz.new_($I$(19,1).c$$jalview_datamodel_SequenceIA,[seqs]).getCompactAlignment$();
}}var from=1;
var to=jal.getWidth$();
var offset=0;
for (var r=0, s=vInput.getSegCount$(); r < s; r++) {
var visSeg=vInput.getSeg$I(r);
var se=this.getSegRange$uk_ac_vamsas_objects_core_Seg$Z(visSeg, true);
if (to < se[1]) {
$I$(4).warn$S("Ignoring invalid segment in InputData spec.");
} else {
if (se[0] > from) {
view.deleteRange$I$I(offset + from - 1, offset + se[0] - 2);
offset-=se[0] - from;
}from=se[1] + 1;
}}
if (from < to) {
view.deleteRange$I$I(offset + from - 1, offset + to - 1);
}return Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(20,1).c$$jalview_datamodel_CigarArray,[view]), jal]);
}}
$I$(4).debug$S("Returning null for input data recovery from provenance.");
return null;
});

Clazz.newMeth(C$, 'getViewport$uk_ac_vamsas_client_Vobject',  function (v_parent) {
if (Clazz.instanceOf(v_parent, "uk.ac.vamsas.objects.core.Alignment")) {
return this.datastore.findViewport$uk_ac_vamsas_objects_core_Alignment(v_parent);
}return null;
}, p$1);

Clazz.newMeth(C$, 'getNewickTree$',  function () {
return this.ntree;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'getInputData$',  function () {
return this.inputData;
});

Clazz.newMeth(C$, 'isValidTree$',  function () {
try {
if (this.ntree == null ) {
return false;
}this.ntree.parse$();
if (this.ntree.getTree$() != null ) {
this.ntree=p$1.getNtree.apply(this, []);
}return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4).debug$S$Throwable("Failed to parse newick tree string", e);
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

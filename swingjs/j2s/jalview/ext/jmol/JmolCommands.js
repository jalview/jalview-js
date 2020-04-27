(function(){var P$=Clazz.newPackage("jalview.ext.jmol"),I$=[[0,'jalview.renderer.seqfeatures.FeatureColourFinder','java.util.ArrayList','StringBuilder','jalview.util.Comparison','java.awt.Color','jalview.structure.StructureMappingcommandSet']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolCommands");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColourBySequenceCommand$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel', function (ssm, files, sequence, sr, viewPanel) {
var fr=viewPanel.getFeatureRenderer$();
var finder=Clazz.new_($I$(1,1).c$$jalview_api_FeatureRenderer,[fr]);
var viewport=viewPanel.getAlignViewport$();
var cs=viewport.getAlignment$().getHiddenColumns$();
var al=viewport.getAlignment$();
var cset=Clazz.new_($I$(2,1));
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var mapping=ssm.getMapping$S(files[pdbfnum]);
var command=Clazz.new_($I$(3,1));
var smc;
var str=Clazz.new_($I$(2,1));
if (mapping == null  || mapping.length < 1 ) {
continue;
}for (var s=0; s < sequence[pdbfnum].length; s++) {
for (var sp, m=0; m < mapping.length; m++) {
if (mapping[m].getSequence$() === sequence[pdbfnum][s]  && (sp=al.findIndex$jalview_datamodel_SequenceI(sequence[pdbfnum][s])) > -1 ) {
var lastPos=-2147483648;
var asp=al.getSequenceAt$I(sp);
for (var r=0; r < asp.getLength$(); r++) {
if ($I$(4,"isGap$C",[asp.getCharAt$I(r)])) {
continue;
}var pos=mapping[m].getPDBResNum$I(asp.findPosition$I(r));
if (pos == lastPos) {
continue;
}if (pos == -2147483648) {
if (command.length$() > 0 && command.charAt$I(command.length$() - 1) != ";" ) {
command.append$S(";");
}lastPos=-2147483648;
continue;
}lastPos=pos;
var col=sr.getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(sequence[pdbfnum][s], r, finder);
if (!cs.isVisible$I(r)) {
col=$I$(5).GRAY;
}var hasChain=true || mapping[m].getChain$() !== " "  ;
var chainSpec=hasChain ? ":" + mapping[m].getChain$() : "";
var newSelcom=chainSpec + "/" + (pdbfnum + 1) + ".1" + ";color[" + col.getRed$() + "," + col.getGreen$() + "," + col.getBlue$() + "]" ;
if (command.length$() > newSelcom.length$() && command.substring$I(command.length$() - newSelcom.length$()).equals$O(newSelcom) ) {
command=C$.condenseCommand$StringBuilder$I(command, pos);
continue;
}if (command.length$() > 0 && command.charAt$I(command.length$() - 1) != ";" ) {
command.append$S(";");
}if (command.length$() > 51200) {
str.add$O(command.toString());
command.setLength$I(0);
}command.append$S("select " + pos);
command.append$S(newSelcom);
}
}}
}
{
str.add$O(command.toString());
command.setLength$I(0);
}cset.add$O(Clazz.new_([Clazz.getClass(C$), files[pdbfnum], str.toArray$OA(Clazz.array(String, [str.size$()]))],$I$(6,1).c$$O$S$SA));
}
return cset.toArray$OA(Clazz.array($I$(6), [cset.size$()]));
}, 1);

Clazz.newMeth(C$, 'condenseCommand$StringBuilder$I', function (command, pos) {
var p=command.length$();
var q=p;
do {
p-=6;
if (p < 1) {
p=0;
};} while ((q=command.indexOf$S$I("select", p)) == -1 && p > 0 );
var sb=Clazz.new_([command.substring$I$I(0, q + 7)],$I$(3,1).c$$S);
command=command.delete$I$I(0, q + 7);
var start;
if (command.indexOf$S("-") > -1) {
start=command.substring$I$I(0, command.indexOf$S("-"));
} else {
start=command.substring$I$I(0, command.indexOf$S(":"));
}sb.append$S(start + "-" + pos + command.substring$I(command.indexOf$S(":")) );
return sb;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

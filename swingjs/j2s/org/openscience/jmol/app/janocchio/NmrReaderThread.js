(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.io.BufferedReader','java.io.FileReader','javax.swing.JOptionPane']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NmrReaderThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['file','java.io.File','nmr','org.openscience.jmol.app.janocchio.NMR_JmolPanel']]]

Clazz.newMeth(C$, 'c$$java_io_File$org_openscience_jmol_app_janocchio_NMR_JmolPanel', function (file, nmr) {
Clazz.super_(C$, this);
this.file=file;
this.nmr=nmr;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var inp=null;
try {
inp=Clazz.new_([Clazz.new_($I$(2,1).c$$java_io_File,[this.file])],$I$(1,1).c$$java_io_Reader);
var line;
var currentStructureFile=this.nmr.getCurrentStructureFile$();
line=inp.readLine$().trim$();
if (currentStructureFile == null ) {
var opt=$I$(3).showConfirmDialog$java_awt_Component$O$S$I(this.nmr, "No Structure File currently loaded.\nLoad Structure File " + line + "\ndefined in this NMR Data File?" , "No Structure Warning", 0);
if (opt == 0) {
this.nmr.vwr.scriptWait$S("load " + line);
} else {
return;
}this.nmr.vwr.openFile$S(line);
} else {
if (!currentStructureFile.equals$O(line)) {
var opt=$I$(3).showConfirmDialog$java_awt_Component$O$S$I(this.nmr, "This NMR Data file was saved from a different structure file from that currently loaded.\nContinue Reading Data?", "Read NMR Data Warning", 0);
if (opt == 1) {
return;
}}}var command= String.instantialize();
while ((line=inp.readLine$()).trim$().length$() != 0){
var l=line.split$S("\\s+");
var i=( new Integer(l[0])).intValue$();
var com=this.nmr.labelSetter.setLabel$I$S(i - 1, l[1]);
command=command + ";" + com ;
}
var labelArray=this.nmr.labelSetter.getLabelArray$();
this.nmr.noeTable.setLabelArray$SA(labelArray);
this.nmr.coupleTable.setLabelArray$SA(labelArray);
while ((line=inp.readLine$()).trim$().length$() != 0){
var l=line.split$S("\\s+");
command=command + ";measure " + l[0] + " " + l[1] ;
if (l[2] != null ) {
if (!l[2].equals$O("null")) {
var i=( new Integer(l[0])).intValue$();
var j=( new Integer(l[1])).intValue$();
this.nmr.noeTable.setExpNoe$S$I$I(l[2], i - 1, j - 1);
}}}
while ((line=inp.readLine$()) != null ){
if (line.trim$().length$() == 0) break;
var l=line.split$S("\\s+");
command=command + ";measure " + l[0] + " " + l[1] + " " + l[2] + " " + l[3] ;
if (l[4] != null ) {
if (!l[4].equals$O("null")) {
var i=( new Integer(l[0])).intValue$();
var j=( new Integer(l[3])).intValue$();
this.nmr.coupleTable.setExpCouple$S$I$I(l[4], i - 1, j - 1);
}}}
this.nmr.noeTable.updateTables$();
this.nmr.coupleTable.updateTables$();
this.nmr.vwr.script$S(command);
} catch (ie) {
if (Clazz.exceptionOf(ie,"Exception")){
} else {
throw ie;
}
} finally {
try {
if (inp != null ) inp.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.io.BufferedReader','java.io.StringReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoadMeasureThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['command'],'O',['nmrPanel','org.openscience.jmol.app.janocchio.NMR_JmolPanel','inp','java.io.BufferedReader']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$S', function (nmrPanel, data) {
Clazz.super_(C$, this);
this.nmrPanel=nmrPanel;
this.inp=Clazz.new_([Clazz.new_($I$(2,1).c$$S,[data])],$I$(1,1).c$$java_io_Reader);
}, 1);

Clazz.newMeth(C$, 'addCommand$I$S', function (i, l) {
this.command += ";" + this.nmrPanel.labelSetter.setLabel$I$S(i, l);
});

Clazz.newMeth(C$, 'run$', function () {
try {
if (this.setLabels$()) {
var labelArray=this.nmrPanel.labelSetter.getLabelArray$();
this.nmrPanel.noeTable.setLabelArray$SA(labelArray);
this.nmrPanel.coupleTable.setLabelArray$SA(labelArray);
}this.setCouples$();
this.setNOEs$();
this.setMore$();
this.nmrPanel.noeTable.addMol$();
this.nmrPanel.noeTable.updateTables$();
this.nmrPanel.coupleTable.addMol$();
this.nmrPanel.coupleTable.updateTables$();
this.nmrPanel.vwr.scriptWait$S(this.command);
} catch (ie) {
if (Clazz.exceptionOf(ie,"Exception")){
} else {
throw ie;
}
} finally {
try {
this.inp.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'setMore$', function () {
});

Clazz.newMeth(C$, 'setCouples$', function () {
var line;
while ((line=this.inp.readLine$()) != null ){
if (line.trim$().length$() == 0) break;
var l=line.split$S("\\s+");
var ia=( new Integer(l[0])).intValue$();
var ib=( new Integer(l[1])).intValue$();
var ic=( new Integer(l[2])).intValue$();
var id=( new Integer(l[3])).intValue$();
this.addCouple$I$I$I$I$S(ia, ib, ic, id, l[4]);
}
});

Clazz.newMeth(C$, 'addCouple$I$I$I$I$S', function (ia, ib, ic, id, exp) {
this.command += ";measure @@" + ia + " @@" + ib + " @@" + ic + " @@" + id ;
if (exp != null  && !exp.equals$O("null") ) {
this.nmrPanel.coupleTable.setExpCouple$S$I$I(exp, ia - 1, id - 1);
}});

Clazz.newMeth(C$, 'setNOEs$', function () {
var line;
while ((line=this.inp.readLine$()).trim$().length$() != 0){
var l=line.split$S("\\s+");
var ia=( new Integer(l[0])).intValue$();
var ib=( new Integer(l[1])).intValue$();
this.addNOE$I$I$S$S(ia, ib, l[2], null);
}
});

Clazz.newMeth(C$, 'addNOE$I$I$S$S', function (ia, ib, exp, expd) {
this.command += ";measure @@" + ia + " @@" + ib ;
if (exp != null  && !exp.equals$O("null") ) {
this.nmrPanel.noeTable.setExpNoe$S$I$I(exp, ia - 1, ib - 1);
}this.command=this.command + ";measure @@" + ia + " @@" + ib ;
if (exp != null ) {
this.nmrPanel.noeTable.setExpNoe$S$I$I(exp, ia - 1, ib - 1);
}if (expd != null ) {
this.nmrPanel.noeTable.setExpDist$S$I$I(expd, ia - 1, ib - 1);
}});

Clazz.newMeth(C$, 'setLabels$', function () {
var line;
while ((line=this.inp.readLine$()).trim$().length$() != 0){
var l=line.split$S("\\s+");
var i=( new Integer(l[0])).intValue$();
this.command += ";" + this.nmrPanel.labelSetter.setLabel$I$S(i - 1, l[1]);
}
return true;
});

Clazz.newMeth(C$, 'loadAndRun$S', function (structureFile) {
this.nmrPanel.runScriptWithCallback$Thread$S(this, "load \"" + structureFile + "\"" );
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

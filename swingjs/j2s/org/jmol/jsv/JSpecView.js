(function(){var P$=Clazz.newPackage("org.jmol.jsv"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.BS','javajs.util.PT','org.jmol.util.Logger','org.jmol.viewer.FileManager','org.jmol.util.Escape','javajs.util.Lst']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSpecView", null, null, 'org.jmol.api.JmolJSpecView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
});

Clazz.newMeth(C$, 'atomPicked$I', function (atomIndex) {
if (atomIndex < 0) return;
var peak=p$1.getPeakAtomRecord$I.apply(this, [atomIndex]);
if (peak != null ) p$1.sendJSpecView$S.apply(this, [peak + " src=\"JmolAtomSelect\""]);
});

Clazz.newMeth(C$, 'getPeakAtomRecord$I', function (atomIndex) {
var atoms=this.vwr.ms.at;
var iModel=atoms[atomIndex].mi;
var type=null;
switch (atoms[atomIndex].getElementNumber$()) {
case 1:
type="1HNMR";
break;
case 6:
type="13CNMR";
break;
default:
return null;
}
var peaks=this.vwr.ms.getInfo$I$S(iModel, "jdxAtomSelect_" + type);
if (peaks == null ) return null;
this.vwr.ms.htPeaks=Clazz.new_($I$(1,1));
var htPeaks=this.vwr.ms.htPeaks;
for (var i=0; i < peaks.size$(); i++) {
var peak=peaks.get$I(i);
System.out.println$S("Jmol JSpecView.java peak=" + peak);
var bsPeak=htPeaks.get$O(peak);
System.out.println$S("Jmol JSpecView.java bspeak=" + bsPeak);
if (bsPeak == null ) {
htPeaks.put$O$O(peak, bsPeak=Clazz.new_($I$(2,1)));
var satoms=$I$(3).getQuotedAttribute$S$S(peak, "atoms");
var select=$I$(3).getQuotedAttribute$S$S(peak, "select");
System.out.println$S("Jmol JSpecView.java satoms select " + satoms + " " + select );
var script="";
if (satoms != null ) script += "visible & (atomno=" + (function(a,f){return f.apply(null,a)})([satoms, ",", " or atomno="],$I$(3).rep$S$S$S) + ")" ;
 else if (select != null ) script += "visible & (" + select + ")" ;
System.out.println$S("Jmol JSpecView.java script : " + script);
bsPeak.or$javajs_util_BS(this.vwr.getAtomBitSet$O(script));
}System.out.println$S("Jmol JSpecView bsPeak now : " + bsPeak + " " + atomIndex );
if (bsPeak.get$I(atomIndex)) return peak;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'sendJSpecView$S', function (peak) {
var msg=$I$(3).getQuotedAttribute$S$S(peak, "title");
if (msg != null ) this.vwr.scriptEcho$S($I$(4).debugging ? peak : msg);
peak=this.vwr.fullName + "JSpecView: " + peak ;
$I$(4).info$S("Jmol.JSpecView.sendJSpecView Jmol>JSV " + peak);
this.vwr.sm.syncSend$S$O$I(peak, ">", 0);
}, p$1);

Clazz.newMeth(C$, 'setModel$I', function (modelIndex) {
var syncMode=("sync on".equals$O(this.vwr.ms.getInfoM$S("jmolscript")) ? 1 : this.vwr.sm.getSyncMode$());
if (syncMode != 1) return;
var peak=this.vwr.ms.getInfo$I$S(modelIndex, "jdxModelSelect");
if (peak != null ) p$1.sendJSpecView$S.apply(this, [peak + " src=\"Jmol\""]);
});

Clazz.newMeth(C$, 'getBaseModelIndex$I', function (modelIndex) {
var baseModel=this.vwr.ms.getInfo$I$S(modelIndex, "jdxBaseModel");
if (baseModel != null ) for (var i=this.vwr.ms.mc; --i >= 0; ) if (baseModel.equals$O(this.vwr.ms.getInfo$I$S(i, "jdxModelID"))) return i;

return modelIndex;
});

Clazz.newMeth(C$, 'processSync$S$I', function (script, jsvMode) {
if ($I$(4).debugging) (function(a,f){return f.apply(null,a)})(["org.jmol.jsv.JSpecView jsvMode=" + jsvMode + " script=" + script ],$I$(4).info$S);
switch (jsvMode) {
default:
return null;
case 0:
this.vwr.sm.syncSend$S$O$I(this.vwr.fullName + "JSpecView" + script.substring$I(10) , ">", 0);
return null;
case 77:
case 28:
case 35:
this.vwr.sm.syncSend$S$O$I(this.vwr.fullName + "JSpecView:" + script , ">", 0);
return null;
case 21:
if (this.vwr.isApplet) return null;
return null;
case 14:
var filename=$I$(3).getQuotedAttribute$S$S(script, "file");
var isSimulation=(filename != null  && filename.startsWith$S($I$(5).SIMULATION_PROTOCOL) );
var id=(!isSimulation || this.vwr.isApplet  ? "" : (function(a,f){return f.apply(null,a)})([filename.replace$C$C("\'", "\""), "id"],$I$(3).getQuotedAttribute$S$S));
if (isSimulation && !this.vwr.isApplet && (filename.startsWith$S($I$(5).SIMULATION_PROTOCOL + "C13/MOL=") || filename.startsWith$S($I$(5).SIMULATION_PROTOCOL + "H1/MOL=") )  ) filename=null;
 else filename=$I$(3).rep$S$S$S(filename, "#molfile", "");
var modelID=(isSimulation ? "molfile" : $I$(3).getQuotedAttribute$S$S(script, "model"));
var baseModel=$I$(3).getQuotedAttribute$S$S(script, "baseModel");
var atoms=$I$(3).getQuotedAttribute$S$S(script, "atoms");
var select=$I$(3).getQuotedAttribute$S$S(script, "select");
var script2=$I$(3).getQuotedAttribute$S$S(script, "script");
if (id == null  || id.length$() == 0 ) id=(modelID == null  ? null : (filename == null  ? "" : filename + "#") + modelID);
if ("".equals$O(baseModel)) id += ".baseModel";
var modelIndex=(id == null  ? -3 : this.vwr.getModelIndexFromId$S(id));
if (modelIndex == -2) return null;
if (modelIndex != -1 || filename == null  ) {
script="";
} else if (isSimulation && !this.vwr.isApplet ) {
return null;
} else {
if (isSimulation) filename += "#molfile";
script="load " + $I$(3).esc$S(filename);
}if (id != null ) script += ";model " + $I$(3).esc$S(id);
if (atoms != null ) script += ";select visible & (@" + $I$(3).rep$S$S$S(atoms, ",", " or @") + ")" ;
 else if (select != null ) script += ";select visible & (" + select + ")" ;
if (script2 != null ) script += ";" + script2;
return script;
case 7:
var list=(function(a,f){return f.apply(null,a)})([script.substring$I(7)],$I$(6).unescapeStringArray$S);
var peaks=Clazz.new_($I$(7,1));
var type="1HNMR";
for (var i=0; i < list.length; i++) {
if (i == 0 && list[i].indexOf$S($I$(5).SIMULATION_PROTOCOL + "C13/") >= 0 ) type="13CNMR";
peaks.addLast$O(list[i]);
}
this.vwr.ms.setInfo$I$O$O(this.vwr.am.cmi, "jdxAtomSelect_" + type, peaks);
return null;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pdb"),I$=[[0,'java.util.Hashtable','org.jmol.util.Logger','org.jmol.util.Parser','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JmolDataReader", null, 'org.jmol.adapter.readers.pdb.PdbReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['props','java.util.Map','residueNames','String[]','+atomNames']]]

Clazz.newMeth(C$, 'checkRemark$', function () {
while (true){
if (this.line.length$() < 30 || this.line.indexOf$S("Jmol") != 11 ) break;
switch ("Ppard".indexOf$S(this.line.substring$I$I(16, 17))) {
case 0:
this.props=Clazz.new_($I$(1,1));
this.asc.setInfo$S$O("jmolData", this.line);
if (!this.line.endsWith$S("#noautobond")) this.line += "#noautobond";
break;
case 1:
var pt1=this.line.indexOf$S("[");
var pt2=this.line.indexOf$S("]");
if (pt1 < 25 || pt2 <= pt1 ) return;
var name=this.line.substring$I$I(25, pt1).trim$();
this.line=this.line.substring$I$I(pt1 + 1, pt2).replace$C$C(",", " ");
var tokens=this.getTokens$();
$I$(2).info$S("reading " + name + " " + tokens.length );
var prop=Clazz.array(Float.TYPE, [tokens.length]);
for (var i=prop.length; --i >= 0; ) prop[i]=this.parseFloatStr$S(tokens[i]);

this.props.put$O$O(name, prop);
break;
case 2:
this.line=this.line.substring$I(27);
this.atomNames=this.getTokens$();
$I$(2).info$S("reading atom names " + this.atomNames.length);
break;
case 3:
this.line=this.line.substring$I(30);
this.residueNames=this.getTokens$();
$I$(2).info$S("reading residue names " + this.residueNames.length);
break;
case 4:
$I$(2).info$S(this.line);
var data=Clazz.array(Float.TYPE, [15]);
(function(a,f){return f.apply(null,a)})([this.line.substring$I(10).replace$C$C("=", " ").replace$C$C("{", " ").replace$C$C("}", " "), null, data],$I$(3).parseStringInfestedFloatArray$S$javajs_util_BS$FA);
var minXYZ=$I$(4).new3$F$F$F(data[0], data[1], data[2]);
var maxXYZ=$I$(4).new3$F$F$F(data[3], data[4], data[5]);
this.fileScaling=$I$(4).new3$F$F$F(data[6], data[7], data[8]);
this.fileOffset=$I$(4).new3$F$F$F(data[9], data[10], data[11]);
var plotScale=$I$(4).new3$F$F$F(data[12], data[13], data[14]);
if (plotScale.x <= 0 ) plotScale.x=100;
if (plotScale.y <= 0 ) plotScale.y=100;
if (plotScale.z <= 0 ) plotScale.z=100;
if (this.fileScaling.y == 0 ) this.fileScaling.y=1;
if (this.fileScaling.z == 0 ) this.fileScaling.z=1;
this.setFractionalCoordinates$Z(true);
this.latticeCells=Clazz.array(Integer.TYPE, [4]);
this.asc.xtalSymmetry=null;
this.setUnitCell$F$F$F$F$F$F(plotScale.x * 2 / (maxXYZ.x - minXYZ.x), plotScale.y * 2 / (maxXYZ.y - minXYZ.y), plotScale.z * 2 / (maxXYZ.z == minXYZ.z  ? 1 : maxXYZ.z - minXYZ.z), 90, 90, 90);
this.unitCellOffset=$I$(4).newP$javajs_util_T3(plotScale);
this.unitCellOffset.scale$F(-1);
this.getSymmetry$();
this.symmetry.toFractional$javajs_util_T3$Z(this.unitCellOffset, false);
this.unitCellOffset.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-1.0, minXYZ, this.unitCellOffset);
this.symmetry.setOffsetPt$javajs_util_T3(this.unitCellOffset);
this.asc.setInfo$S$O("jmolDataScaling", Clazz.array($I$(4), -1, [minXYZ, maxXYZ, plotScale]));
this.doApplySymmetry=true;
break;
}
break;
}
this.checkCurrentLineForScript$();
});

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
if (this.residueNames != null  && atom.index < this.residueNames.length ) atom.group3=this.residueNames[atom.index];
if (this.atomNames != null  && atom.index < this.atomNames.length ) atom.atomName=this.atomNames[atom.index];
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.asc.setCurrentModelInfo$S$O("jmolDataProperties", this.props);
this.finalizeReaderPDB$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

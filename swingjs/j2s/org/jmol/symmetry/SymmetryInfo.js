(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),I$=[[0,'javajs.util.PT','org.jmol.util.SimpleUnitCell']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SymmetryInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.latticeType="P";
},1);

C$.$fields$=[['Z',['coordinatesAreFractional','isMultiCell'],'S',['sgName','infoStr','latticeType','intlTableNo'],'O',['symmetryOperations','org.jmol.symmetry.SymmetryOperation[]','cellRange','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setSymmetryInfo$java_util_Map$FA', function (info, unitCellParams) {
this.cellRange=info.get$O("unitCellRange");
this.sgName=info.get$O("spaceGroup");
if (this.sgName == null  || this.sgName === ""  ) this.sgName="spacegroup unspecified";
this.infoStr="Spacegroup: " + this.sgName;
if ((this.latticeType=info.get$O("latticeType")) == null ) this.latticeType="P";
this.intlTableNo=info.get$O("intlTableNo");
var symmetryCount=info.containsKey$O("symmetryCount") ? (info.get$O("symmetryCount")).intValue$() : 0;
this.symmetryOperations=info.remove$O("symmetryOps");
if (this.symmetryOperations != null ) {
var c="";
var s="\nNumber of symmetry operations: " + (symmetryCount == 0 ? 1 : symmetryCount) + "\nSymmetry Operations:" ;
for (var i=0; i < symmetryCount; i++) {
var op=this.symmetryOperations[i];
s += "\n" + op.fixMagneticXYZ$javajs_util_M4$S$Z(op, op.xyz, true);
if (op.isCenteringOp) c += " (" + $I$(1,"rep$S$S$S",[$I$(1).replaceAllCharacters$S$S$S(op.xyz, "xyz", "0"), "0+", ""]) + ")" ;
}
if (c.length$() > 0) this.infoStr += "\nCentering: " + c;
this.infoStr += s;
this.infoStr += "\n";
}if (unitCellParams == null ) unitCellParams=info.get$O("unitCellParams");
if (!$I$(2).isValid$FA(unitCellParams)) return null;
this.coordinatesAreFractional=info.containsKey$O("coordinatesAreFractional") ? (info.get$O("coordinatesAreFractional")).booleanValue$() : false;
this.isMultiCell=(this.coordinatesAreFractional && this.symmetryOperations != null  );
return unitCellParams;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

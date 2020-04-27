(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'org.jmol.modelset.Atom','javajs.util.P3','org.jmol.util.C','javajs.util.V3','javajs.util.SB','org.jmol.util.Escape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Dipole");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thisID="";
this.colix=($s$[0] = 0, $s$[0]);
this.dipoleInfo="";
this.atoms=Clazz.array($I$(1), [2]);
this.coords=Clazz.array($I$(2), [2]);
},1);

C$.$fields$=[['Z',['isUserValue','visible','noCross','haveAtoms','isValid'],'F',['dipoleValue','offsetSide','offsetAngstroms'],'I',['offsetPercent','visibilityFlags','modelIndex'],'H',['mad','colix','type'],'S',['thisID','dipoleInfo'],'O',['origin','javajs.util.P3','+center','vector','javajs.util.V3','offsetPt','javajs.util.P3','atoms','org.jmol.modelset.Atom[]','coords','javajs.util.P3[]','bond','org.jmol.modelset.Bond','bsMolecule','javajs.util.BS','lstDipoles','javajs.util.Lst']]]

Clazz.newMeth(C$, 'init$I$S$S$H$H$Z', function (modelIndex, thisID, dipoleInfo, colix, mad, visible) {
this.modelIndex=modelIndex;
this.thisID=thisID;
this.dipoleInfo=dipoleInfo;
this.colix=colix;
this.mad=mad;
this.visible=visible;
this.type=0;
return this;
});

Clazz.newMeth(C$, 'setTranslucent$Z$F', function (isTranslucent, translucentLevel) {
this.colix=$I$(3).getColixTranslucent3$H$Z$F(this.colix, isTranslucent, translucentLevel);
});

Clazz.newMeth(C$, 'set$org_jmol_shapespecial_Dipole', function (d) {
this.thisID=d.thisID;
this.dipoleInfo=d.dipoleInfo;
this.dipoleValue=d.dipoleValue;
this.mad=d.mad;
this.lstDipoles=d.lstDipoles;
if (this.lstDipoles != null ) this.isValid=true;
this.offsetAngstroms=d.offsetAngstroms;
this.offsetPercent=d.offsetPercent;
this.offsetSide=d.offsetSide;
this.vector=$I$(4).newV$javajs_util_T3(d.vector);
this.origin=$I$(2).newP$javajs_util_T3(d.origin);
if (d.offsetPt != null ) {
this.origin.add$javajs_util_T3(d.offsetPt);
this.offsetPt=$I$(2).newP$javajs_util_T3(d.offsetPt);
}this.bsMolecule=d.bsMolecule;
this.haveAtoms=(d.atoms[0] != null );
if (this.haveAtoms) {
this.atoms[0]=d.atoms[0];
this.atoms[1]=d.atoms[1];
this.centerDipole$();
} else {
this.center=null;
}});

Clazz.newMeth(C$, 'set2$javajs_util_P3$javajs_util_P3', function (pt1, pt2) {
this.coords[0]=$I$(2).newP$javajs_util_T3(pt1);
this.coords[1]=$I$(2).newP$javajs_util_T3(pt2);
this.isValid=(this.coords[0].distance$javajs_util_T3(this.coords[1]) > 0.1 );
if (this.dipoleValue < 0 ) {
this.origin=$I$(2).newP$javajs_util_T3(pt2);
this.vector=$I$(4).newV$javajs_util_T3(pt1);
this.dipoleValue=-this.dipoleValue;
} else {
this.origin=$I$(2).newP$javajs_util_T3(pt1);
this.vector=$I$(4).newV$javajs_util_T3(pt2);
}this.dipoleInfo="" + this.origin + this.vector ;
this.vector.sub$javajs_util_T3(this.origin);
if (this.dipoleValue == 0 ) this.dipoleValue=this.vector.length$();
 else this.vector.scale$F(this.dipoleValue / this.vector.length$());
this.type=1;
}, p$1);

Clazz.newMeth(C$, 'setValue$F', function (value) {
var d=this.dipoleValue;
this.dipoleValue=value;
if (value == 0 ) this.isValid=false;
if (this.vector == null ) return;
this.vector.scale$F(this.dipoleValue / this.vector.length$());
if (d * this.dipoleValue < 0 ) this.origin.sub$javajs_util_T3(this.vector);
});

Clazz.newMeth(C$, 'set2Value$javajs_util_P3$javajs_util_P3$F', function (pt1, pt2, value) {
this.dipoleValue=value;
this.atoms[0]=null;
p$1.set2$javajs_util_P3$javajs_util_P3.apply(this, [pt1, pt2]);
});

Clazz.newMeth(C$, 'setPtVector$javajs_util_P3$javajs_util_V3', function (pt1, dipole) {
this.setValue$F(dipole.length$());
var pt2=$I$(2).newP$javajs_util_T3(pt1);
pt2.add$javajs_util_T3(dipole);
p$1.set2$javajs_util_P3$javajs_util_P3.apply(this, [pt1, pt2]);
this.type=5;
});

Clazz.newMeth(C$, 'set2AtomValue$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F', function (atom1, atom2, value) {
this.setValue$F(value);
p$1.set2$javajs_util_P3$javajs_util_P3.apply(this, [atom1, atom2]);
this.offsetSide=0.4;
this.mad=10;
this.atoms[0]=atom1;
this.atoms[1]=atom2;
this.haveAtoms=true;
this.centerDipole$();
});

Clazz.newMeth(C$, 'centerDipole$', function () {
this.isValid=(this.atoms[0] !== this.atoms[1]  && this.dipoleValue != 0  );
if (!this.isValid) return;
var f=this.atoms[0].distance$javajs_util_T3(this.atoms[1]) / (2 * this.dipoleValue) - 0.5;
this.origin.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f, this.vector, this.atoms[0]);
this.center=Clazz.new_($I$(2,1));
this.center.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, this.vector, this.origin);
this.bond=this.atoms[0].getBond$org_jmol_modelset_Atom(this.atoms[1]);
this.type=(this.bond == null  ? 2 : 3);
});

Clazz.newMeth(C$, 'isBondType$', function () {
return (this.type == 2 || this.type == 3 );
});

Clazz.newMeth(C$, 'getShapeState$', function () {
if (!this.isValid) return "";
var s=Clazz.new_($I$(5,1));
s.append$S("dipole ID ").append$S(this.thisID);
if (this.lstDipoles != null ) s.append$S(" all ").append$S($I$(6).eBS$javajs_util_BS(this.bsMolecule));
 else if (this.haveAtoms) s.append$S(" ({").appendI$I(this.atoms[0].i).append$S("}) ({").appendI$I(this.atoms[1].i).append$S("})");
 else if (this.coords[0] == null ) return "";
 else s.append$S(" ").append$S($I$(6).eP$javajs_util_T3(this.coords[0])).append$S(" ").append$S($I$(6).eP$javajs_util_T3(this.coords[1]));
if (this.isUserValue) s.append$S(" value ").appendF$F(this.dipoleValue);
if (this.mad != 10) s.append$S(" width ").appendF$F(this.mad / 1000.0);
if (this.offsetAngstroms != 0 ) s.append$S(" offset ").appendF$F(this.offsetAngstroms);
 else if (this.offsetPercent != 0) s.append$S(" offset ").appendI$I(this.offsetPercent);
if (this.offsetSide != 0.4 ) s.append$S(" offsetSide ").appendF$F(this.offsetSide);
if (this.offsetPt != null ) s.append$S(" offset ").append$S($I$(6).eP$javajs_util_T3(this.offsetPt));
if (this.noCross) s.append$S(" nocross");
if (!this.visible) s.append$S(" off");
s.append$S(";\n");
return s.toString();
});

Clazz.newMeth(C$, 'setOffsetPt$javajs_util_P3', function (pt) {
if (this.offsetPt != null ) this.origin.sub$javajs_util_T3(this.offsetPt);
this.offsetPt=pt;
this.origin.add$javajs_util_T3(pt);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

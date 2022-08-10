(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),I$=[[0,'org.jmol.util.C']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BackboneRenderer", null, 'org.jmol.renderbio.BioShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isDataFrame']]]

Clazz.newMeth(C$, 'renderBioShape$org_jmol_shapebio_BioShape', function (bioShape) {
var checkPass2=(!this.isExport && !this.vwr.gdata.isPass2 );
this.isDataFrame=this.vwr.ms.isJmolDataFrameForModel$I(bioShape.modelIndex);
var n=this.monomerCount;
var atoms=this.ms.at;
for (var i=this.bsVisible.nextSetBit$I(0); i >= 0; i=this.bsVisible.nextSetBit$I(i + 1)) {
var atomA=atoms[this.leadAtomIndices[i]];
var cA=this.colixes[i];
this.mad=this.mads[i];
var i1=(i + 1) % n;
var atomB=atoms[this.leadAtomIndices[i1]];
var cB=this.colixes[i1];
if (atomA.nBackbonesDisplayed > 0 && atomB.nBackbonesDisplayed > 0  && !this.ms.isAtomHidden$I(atomB.i)  && (this.isDataFrame || atomA.distanceSquared$javajs_util_T3(atomB) < 100  ) ) {
cA=$I$(1).getColixInherited$H$H(cA, atomA.colixAtom);
cB=$I$(1).getColixInherited$H$H(cB, atomB.colixAtom);
if (!checkPass2 || this.setBioColix$H(cA) || this.setBioColix$H(cB)  ) this.drawSegmentAB$org_jmol_modelset_Atom$org_jmol_modelset_Atom$H$H$F(atomA, atomB, cA, cB, 100);
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

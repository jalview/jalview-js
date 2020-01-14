(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.modelset.Group']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Chain", null, null, 'org.jmol.modelset.Structure');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.model=null;
this.chainID=0;
this.chainNo=0;
this.groups=null;
this.groupCount=0;
this.selectedGroupCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelset_Model$I$I', function (model, chainID, chainNo) {
C$.$init$.apply(this);
this.model=model;
this.chainID=chainID;
this.chainNo=chainNo;
this.groups=Clazz.array($I$(1), [16]);
}, 1);

Clazz.newMeth(C$, 'getIDStr$', function () {
return (this.chainID == 0 ? "" : this.chainID < 256 ? "" + String.fromCharCode(this.chainID) : this.model.ms.vwr.getChainIDStr$I(this.chainID));
});

Clazz.newMeth(C$, 'calcSelectedGroupsCount$javajs_util_BS', function (bsSelected) {
this.selectedGroupCount=0;
for (var i=0; i < this.groupCount; i++) this.groups[i].selectedIndex=(this.groups[i].isSelected$javajs_util_BS(bsSelected) ? this.selectedGroupCount++ : -1);

});

Clazz.newMeth(C$, 'fixIndices$I$javajs_util_BS', function (atomsDeleted, bsDeleted) {
for (var i=0; i < this.groupCount; i++) this.groups[i].fixIndices$I$javajs_util_BS(atomsDeleted, bsDeleted);

});

Clazz.newMeth(C$, 'setAtomBits$javajs_util_BS', function (bs) {
for (var i=0; i < this.groupCount; i++) this.groups[i].setAtomBits$javajs_util_BS(bs);

});

Clazz.newMeth(C$, 'setAtomBitsAndClear$javajs_util_BS$javajs_util_BS', function (bs, bsOut) {
for (var i=0; i < this.groupCount; i++) this.groups[i].setAtomBitsAndClear$javajs_util_BS$javajs_util_BS(bs, bsOut);

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[[0,'java.util.TreeMap','java.util.HashSet','ext.edu.ucsf.rbvi.strucviz2.ChimUtils',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],'ext.edu.ucsf.rbvi.strucviz2.ChimeraChain','java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraModel", null, null, 'ext.edu.ucsf.rbvi.strucviz2.ChimeraStructuralObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modelColor=null;
this.userData=null;
this.selected=false;
},1);

C$.$fields$=[['Z',['selected'],'I',['modelNumber','subModelNumber'],'S',['name'],'O',['type','ext.edu.ucsf.rbvi.strucviz2.StructureManager.ModelType','modelColor','java.awt.Color','userData','java.lang.Object','chainMap','java.util.TreeMap','funcResidues','java.util.HashSet']]]

Clazz.newMeth(C$, 'c$$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType$I$I', function (name, type, modelNumber, subModelNumber) {
;C$.$init$.apply(this);
this.name=name;
this.type=type;
this.modelNumber=modelNumber;
this.subModelNumber=subModelNumber;
this.chainMap=Clazz.new_($I$(1,1));
this.funcResidues=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (inputLine) {
;C$.$init$.apply(this);
this.name=$I$(3).parseModelName$S(inputLine);
if (this.name.startsWith$S("smiles")) {
this.type=$I$(4).SMILES;
} else {
this.type=$I$(4).PDB_MODEL;
}this.modelNumber=$I$(3).parseModelNumber$S(inputLine)[0];
this.subModelNumber=$I$(3).parseModelNumber$S(inputLine)[1];
this.chainMap=Clazz.new_($I$(1,1));
this.funcResidues=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue', function (residue) {
residue.setChimeraModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(this);
var chainId=residue.getChainId$();
if (chainId != null ) {
this.addResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue(chainId, residue);
} else {
this.addResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue("_", residue);
}});

Clazz.newMeth(C$, 'addResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue', function (chainId, residue) {
var chain=null;
if (!this.chainMap.containsKey$O(chainId)) {
chain=Clazz.new_($I$(5,1).c$$I$I$S,[this.modelNumber, this.subModelNumber, chainId]);
chain.setChimeraModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(this);
this.chainMap.put$O$O(chainId, chain);
} else {
chain=this.chainMap.get$O(chainId);
}chain.addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue(residue);
});

Clazz.newMeth(C$, 'getChimeraModel$', function () {
return this;
});

Clazz.newMeth(C$, 'getModelColor$', function () {
return this.modelColor;
});

Clazz.newMeth(C$, 'setModelColor$java_awt_Color', function (color) {
this.modelColor=color;
});

Clazz.newMeth(C$, 'getModelName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setModelName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getModelNumber$', function () {
return this.modelNumber;
});

Clazz.newMeth(C$, 'setModelNumber$I', function (modelNumber) {
this.modelNumber=modelNumber;
});

Clazz.newMeth(C$, 'getSubModelNumber$', function () {
return this.subModelNumber;
});

Clazz.newMeth(C$, 'setSubModelNumber$I', function (subModelNumber) {
this.subModelNumber=subModelNumber;
});

Clazz.newMeth(C$, 'getModelType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setModelType$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType', function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getFuncResidues$', function () {
return this.funcResidues;
});

Clazz.newMeth(C$, 'setFuncResidues$java_util_List', function (residues) {
for (var residue, $residue = residues.iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (residue.indexOf$S("-") > 0) {
this.funcResidues.addAll$java_util_Collection(chain.getResidueRange$S(residue));
} else {
this.funcResidues.add$O(chain.getResidue$S(residue));
}}
}
});

Clazz.newMeth(C$, 'getUserData$', function () {
return this.userData;
});

Clazz.newMeth(C$, 'setUserData$O', function (data) {
this.userData=data;
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
this.selected=selected;
});

Clazz.newMeth(C$, 'getChildren$', function () {
return Clazz.new_([this.chainMap.values$()],$I$(6,1).c$$java_util_Collection);
});

Clazz.newMeth(C$, 'getChains$', function () {
return this.chainMap.values$();
});

Clazz.newMeth(C$, 'getChainCount$', function () {
return this.chainMap.size$();
});

Clazz.newMeth(C$, 'getChainNames$', function () {
return this.chainMap.keySet$();
});

Clazz.newMeth(C$, 'getResidues$', function () {
var residues=Clazz.new_($I$(6,1));
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
residues.addAll$java_util_Collection(chain.getResidues$());
}
return residues;
});

Clazz.newMeth(C$, 'getResidueCount$', function () {
var count=0;
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
count+=chain.getResidueCount$();
}
return count;
});

Clazz.newMeth(C$, 'getChain$S', function (chain) {
if (this.chainMap.containsKey$O(chain)) {
return this.chainMap.get$O(chain);
}return null;
});

Clazz.newMeth(C$, 'getResidue$S$S', function (chainId, index) {
if (this.chainMap.containsKey$O(chainId)) {
return this.chainMap.get$O(chainId).getResidue$S(index);
}return null;
});

Clazz.newMeth(C$, 'hasSelectedChildren$', function () {
if (this.selected) {
return true;
} else {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (chain.hasSelectedChildren$()) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'getSelectedResidues$', function () {
var residueList=Clazz.new_($I$(6,1));
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (this.selected) {
residueList.addAll$java_util_Collection(chain.getSelectedResidues$());
} else {
residueList.addAll$java_util_Collection(this.getResidues$());
}}
return residueList;
});

Clazz.newMeth(C$, 'toSpec$', function () {
if (this.subModelNumber == 0) {
return ("#" + this.modelNumber);
}return ("#" + this.modelNumber + "." + this.subModelNumber );
});

Clazz.newMeth(C$, 'toString', function () {
var modelName="";
if (this.getChainCount$() > 0) {
modelName="Model " + this.toSpec$() + " " + this.name + " (" + this.getChainCount$() + " chains, " + this.getResidueCount$() + " residues)" ;
} else if (this.getResidueCount$() > 0) {
modelName="Model " + this.toSpec$() + " " + this.name + " (" + this.getResidueCount$() + " residues)" ;
} else {
modelName="Model " + this.toSpec$() + " " + this.name + "" ;
}var networkNames=Clazz.new_($I$(2,1));
var nodeNames=Clazz.new_($I$(2,1));
var edgeNames=Clazz.new_($I$(2,1));
var cytoName=" [";
if (networkNames.size$() > 0) {
if (networkNames.size$() == 1) {
cytoName += "Network {";
} else if (networkNames.size$() > 1) {
cytoName += "Networks {";
}for (var cName, $cName = networkNames.iterator$(); $cName.hasNext$()&&((cName=($cName.next$())),1);) {
cytoName += cName + ",";
}
cytoName=cytoName.substring$I$I(0, cytoName.length$() - 1) + "}, ";
}if (nodeNames.size$() > 0) {
if (nodeNames.size$() == 1) {
cytoName += "Node {";
} else if (nodeNames.size$() > 1) {
cytoName += "Nodes {";
}for (var cName, $cName = nodeNames.iterator$(); $cName.hasNext$()&&((cName=($cName.next$())),1);) {
cytoName += cName + ",";
}
cytoName=cytoName.substring$I$I(0, cytoName.length$() - 1) + "}, ";
}if (edgeNames.size$() > 0) {
if (edgeNames.size$() == 1) {
cytoName += "Edge {";
} else if (edgeNames.size$() > 1) {
cytoName += "Edges {";
}for (var cName, $cName = edgeNames.iterator$(); $cName.hasNext$()&&((cName=($cName.next$())),1);) {
cytoName += cName + ",";
}
cytoName=cytoName.substring$I$I(0, cytoName.length$() - 1) + "}, ";
}if (cytoName.endsWith$S(", ")) {
cytoName=cytoName.substring$I$I(0, cytoName.length$() - 2);
}cytoName += "]";
var nodeName=modelName + cytoName;
if (nodeName.length$() > 100) {
nodeName=nodeName.substring$I$I(0, 100) + "...";
}return nodeName;
});

Clazz.newMeth(C$, 'equals$O', function (otherChimeraModel) {
if (!(Clazz.instanceOf(otherChimeraModel, "ext.edu.ucsf.rbvi.strucviz2.ChimeraModel"))) {
return false;
}var otherCM=(otherChimeraModel);
return this.name.equals$O(otherCM.name) && this.modelNumber == otherCM.modelNumber  && this.type === otherCM.type  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashCode=1;
hashCode=hashCode * 37 + this.name.hashCode$();
hashCode=hashCode * 37 + this.type.hashCode$();
hashCode=(hashCode * 37) + this.modelNumber;
return hashCode;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

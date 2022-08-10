(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AtomSpec");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modelNo','pdbResNum','atomIndex'],'S',['pdbFile','chain']]]

Clazz.newMeth(C$, 'fromChimeraAtomspec$S',  function (spec) {
var modelSeparatorPos=spec.indexOf$S(":");
if (modelSeparatorPos == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
}var hashPos=spec.indexOf$S("#");
if (hashPos == -1 && modelSeparatorPos != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
}var modelSubmodel=spec.substring$I$I(hashPos + 1, modelSeparatorPos);
var modelId=0;
try {
var subModelPos=modelSubmodel.indexOf$S(".");
modelId=(Integer.valueOf$S(subModelPos > 0 ? modelSubmodel.substring$I$I(0, subModelPos) : modelSubmodel)).$c();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var atomsAndChain=spec.substring$I(modelSeparatorPos + 1);
var tokens=atomsAndChain.split$S("\\.");
var atoms=tokens.length == 1 ? atomsAndChain : (tokens[0]);
var resNum=0;
try {
resNum=Integer.parseInt$S(atoms);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
} else {
throw e;
}
}
var chainId=tokens.length == 1 ? "" : (tokens[1]);
return Clazz.new_(C$.c$$I$S$I$I,[modelId, chainId, resNum, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I',  function (pdbFile, chain, resNo, atomNo) {
;C$.$init$.apply(this);
this.pdbFile=pdbFile;
this.chain=chain;
this.pdbResNum=resNo;
this.atomIndex=atomNo;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I$I',  function (modelId, chainId, resNo, atomNo) {
;C$.$init$.apply(this);
this.modelNo=modelId;
this.chain=chainId;
this.pdbResNum=resNo;
this.atomIndex=atomNo;
}, 1);

Clazz.newMeth(C$, 'getPdbFile$',  function () {
return this.pdbFile;
});

Clazz.newMeth(C$, 'getChain$',  function () {
return this.chain;
});

Clazz.newMeth(C$, 'getPdbResNum$',  function () {
return this.pdbResNum;
});

Clazz.newMeth(C$, 'getAtomIndex$',  function () {
return this.atomIndex;
});

Clazz.newMeth(C$, 'getModelNumber$',  function () {
return this.modelNo;
});

Clazz.newMeth(C$, 'setPdbFile$S',  function (file) {
this.pdbFile=file;
});

Clazz.newMeth(C$, 'toString',  function () {
return "pdbFile: " + this.pdbFile + ", chain: " + this.chain + ", res: " + this.pdbResNum + ", atom: " + this.atomIndex ;
});

Clazz.newMeth(C$, 'fromChimeraXAtomspec$S',  function (spec) {
var modelSeparatorPos=spec.indexOf$S("/");
if (modelSeparatorPos == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
}var hashPos=spec.indexOf$S("#");
if (hashPos == -1 && modelSeparatorPos != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
}var modelSubmodel=spec.substring$I$I(hashPos + 1, modelSeparatorPos);
var modelId=0;
try {
var subModelPos=modelSubmodel.indexOf$S(".");
modelId=(Integer.valueOf$S(subModelPos > 0 ? modelSubmodel.substring$I$I(0, subModelPos) : modelSubmodel)).$c();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var atomsAndChain=spec.substring$I(modelSeparatorPos + 1);
var tokens=atomsAndChain.split$S("\\:");
var atoms=tokens.length == 1 ? atomsAndChain : (tokens[1]);
var resNum=0;
try {
resNum=Integer.parseInt$S(atoms);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
} else {
throw e;
}
}
var chainId=tokens.length == 1 ? "" : (tokens[0]);
return Clazz.new_(C$.c$$I$S$I$I,[modelId, chainId, resNum, 0]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

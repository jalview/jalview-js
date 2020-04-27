(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AtomSpec");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modelNo','pdbResNum','atomIndex'],'S',['pdbFile','chain']]]

Clazz.newMeth(C$, 'fromChimeraAtomspec$S', function (spec) {
var colonPos=spec.indexOf$S(":");
if (colonPos == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
}var hashPos=spec.indexOf$S("#");
if (hashPos == -1 && colonPos != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
}var modelSubmodel=spec.substring$I$I(hashPos + 1, colonPos);
var dotPos=modelSubmodel.indexOf$S(".");
var modelId=0;
try {
modelId=(Integer.valueOf$S(dotPos == -1 ? modelSubmodel : modelSubmodel.substring$I$I(0, dotPos))).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var residueChain=spec.substring$I(colonPos + 1);
dotPos=residueChain.indexOf$S(".");
var resNum=0;
try {
resNum=Integer.parseInt$S(dotPos == -1 ? residueChain : residueChain.substring$I$I(0, dotPos));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[spec]);
} else {
throw e;
}
}
var chainId=dotPos == -1 ? "" : residueChain.substring$I(dotPos + 1);
return Clazz.new_(C$.c$$I$S$I$I,[modelId, chainId, resNum, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I', function (pdbFile, chain, resNo, atomNo) {
;C$.$init$.apply(this);
this.pdbFile=pdbFile;
this.chain=chain;
this.pdbResNum=resNo;
this.atomIndex=atomNo;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I$I', function (modelId, chainId, resNo, atomNo) {
;C$.$init$.apply(this);
this.modelNo=modelId;
this.chain=chainId;
this.pdbResNum=resNo;
this.atomIndex=atomNo;
}, 1);

Clazz.newMeth(C$, 'getPdbFile$', function () {
return this.pdbFile;
});

Clazz.newMeth(C$, 'getChain$', function () {
return this.chain;
});

Clazz.newMeth(C$, 'getPdbResNum$', function () {
return this.pdbResNum;
});

Clazz.newMeth(C$, 'getAtomIndex$', function () {
return this.atomIndex;
});

Clazz.newMeth(C$, 'getModelNumber$', function () {
return this.modelNo;
});

Clazz.newMeth(C$, 'setPdbFile$S', function (file) {
this.pdbFile=file;
});

Clazz.newMeth(C$, 'toString', function () {
return "pdbFile: " + this.pdbFile + ", chain: " + this.chain + ", res: " + this.pdbResNum + ", atom: " + this.atomIndex ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[[0,'fr.orsay.lri.varna.models.treealign.RNANodeValue','java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNANodeValue2", null, null, 'fr.orsay.lri.varna.models.treealign.GraphvizDrawableNodeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.singleNode=true;
},1);

C$.$fields$=[['Z',['singleNode'],'O',['node','fr.orsay.lri.varna.models.treealign.RNANodeValue','nodes','java.util.List']]]

Clazz.newMeth(C$, 'c$$Z', function (singleNode) {
;C$.$init$.apply(this);
this.singleNode=singleNode;
if (singleNode) {
this.node=Clazz.new_($I$(1,1));
} else {
this.nodes=Clazz.new_($I$(2,1));
}}, 1);

Clazz.newMeth(C$, 'getNode$', function () {
if (this.singleNode) {
return this.node;
} else {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNANodeValue2WrongTypeException')));
}});

Clazz.newMeth(C$, 'setNode$fr_orsay_lri_varna_models_treealign_RNANodeValue', function (node) {
if (this.singleNode) {
this.node=node;
} else {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNANodeValue2WrongTypeException')));
}});

Clazz.newMeth(C$, 'getNodes$', function () {
if (!this.singleNode) {
return this.nodes;
} else {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNANodeValue2WrongTypeException')));
}});

Clazz.newMeth(C$, 'computeSequence$', function () {
if (!this.singleNode) {
var n=this.nodes.size$();
var sequence=Clazz.array(Character.TYPE, [n]);
for (var i=0; i < n; i++) {
sequence[i]=this.nodes.get$I(i).getLeftNucleotide$().charAt$I(0);
}
return sequence;
} else {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNANodeValue2WrongTypeException')));
}});

Clazz.newMeth(C$, 'setNodes$java_util_List', function (nodes) {
if (!this.singleNode) {
this.nodes=nodes;
} else {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNANodeValue2WrongTypeException')));
}});

Clazz.newMeth(C$, 'isSingleNode$', function () {
return this.singleNode;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.singleNode) {
return this.node.toString();
} else {
var s="";
for (var node, $node = this.nodes.iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (s !== "" ) {
s += " ";
}s += node.toString();
}
return s;
}});

Clazz.newMeth(C$, 'toGraphvizNodeName$', function () {
if (this.singleNode) {
return this.node.toGraphvizNodeName$();
} else {
var s="";
for (var node, $node = this.nodes.iterator$(); $node.hasNext$()&&((node=($node.next$())),1);) {
if (s !== "" ) {
s += " ";
}s += node.toGraphvizNodeName$();
}
return s;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

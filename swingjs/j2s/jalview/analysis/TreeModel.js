(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'jalview.analysis.SequenceIdMatcher','java.util.Vector','jalview.datamodel.Sequence','jalview.io.NewickFile','jalview.datamodel.SequenceI','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeModel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasDistances=true;
this.hasBootstrap=false;
this.hasRootDistance=true;
},1);

C$.$fields$=[['Z',['hasDistances','hasBootstrap','hasRootDistance'],'D',['maxDistValue','maxheight'],'I',['noseqs','ycount'],'O',['sequences','jalview.datamodel.SequenceI[]','seqData','jalview.datamodel.AlignmentView','top','jalview.datamodel.SequenceNode','node','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentView$jalview_io_NewickFile',  function (seqs, odata, treefile) {
C$.c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceNode$Z$Z$Z.apply(this, [seqs, treefile.getTree$(), treefile.HasDistances$(), treefile.HasBootstrap$(), treefile.HasRootDistance$()]);
this.seqData=odata;
this.associateLeavesToSequences$jalview_datamodel_SequenceIA(seqs);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_analysis_TreeBuilder',  function (tree) {
C$.c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceNode$Z$Z$Z.apply(this, [tree.getSequences$(), tree.getTopNode$(), tree.hasDistances$(), tree.hasBootstrap$(), tree.hasRootDistance$()]);
this.seqData=tree.getOriginalData$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceNode$Z$Z$Z',  function (seqs, root, hasDist, hasBoot, hasRootDist) {
;C$.$init$.apply(this);
this.sequences=seqs;
this.top=root;
this.hasDistances=hasDist;
this.hasBootstrap=hasBoot;
this.hasRootDistance=hasRootDist;
this.maxheight=this.findHeight$jalview_datamodel_SequenceNode(this.top);
}, 1);

Clazz.newMeth(C$, 'associateLeavesToSequences$jalview_datamodel_SequenceIA',  function (seqs) {
var algnIds=Clazz.new_($I$(1,1).c$$jalview_datamodel_SequenceIA,[seqs]);
var leaves=this.findLeaves$jalview_datamodel_SequenceNode(this.top);
var i=0;
var namesleft=seqs.length;
var j;
var nam;
var realnam;
var one2many=Clazz.new_($I$(2,1));
while (i < leaves.size$()){
j=leaves.elementAt$I(i++);
realnam=j.getName$();
nam=null;
if (namesleft > -1) {
nam=algnIds.findIdMatch$S(realnam);
}if (nam != null ) {
j.setElement$O(nam);
if (one2many.contains$O(nam)) {
} else {
one2many.addElement$O(nam);
--namesleft;
}} else {
j.setElement$O(Clazz.new_($I$(3,1).c$$S$S,[realnam, "THISISAPLACEHLDER"]));
j.setPlaceholder$Z(true);
}}
});

Clazz.newMeth(C$, 'print$',  function () {
var fout=Clazz.new_([this.getTopNode$()],$I$(4,1).c$$jalview_datamodel_SequenceNode);
return fout.print$Z$Z$Z(this.hasBootstrap$(), this.hasDistances$(), this.hasRootDistance$());
});

Clazz.newMeth(C$, 'updatePlaceHolders$java_util_List',  function (list) {
var leaves=this.findLeaves$jalview_datamodel_SequenceNode(this.top);
var sz=leaves.size$();
var seqmatcher=null;
var i=0;
while (i < sz){
var leaf=leaves.elementAt$I(i++);
if (list.contains$O(leaf.element$())) {
leaf.setPlaceholder$Z(false);
} else {
if (seqmatcher == null ) {
var seqs=Clazz.array($I$(5), [list.size$()]);
for (var j=0; j < seqs.length; j++) {
seqs[j]=list.get$I(j);
}
seqmatcher=Clazz.new_($I$(1,1).c$$jalview_datamodel_SequenceIA,[seqs]);
}var nam=seqmatcher.findIdMatch$S(leaf.getName$());
if (nam != null ) {
if (!leaf.isPlaceholder$()) {
}leaf.setPlaceholder$Z(false);
leaf.setElement$O(nam);
} else {
if (!leaf.isPlaceholder$()) {
leaf.setElement$O(Clazz.new_([leaf.getName$(), "THISISAPLACEHLDER"],$I$(3,1).c$$S$S));
}leaf.setPlaceholder$Z(true);
}}}
});

Clazz.newMeth(C$, 'renameAssociatedNodes$',  function () {
this.applyToNodes$jalview_datamodel_NodeTransformI(((P$.TreeModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreeModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.datamodel.NodeTransformI', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'transform$jalview_datamodel_BinaryNode',  function (nd) {
var el=nd.element$();
if (el != null  && Clazz.instanceOf(el, "jalview.datamodel.SequenceI") ) {
nd.setName$S((el).getName$());
}});
})()
), Clazz.new_(P$.TreeModel$1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'findLeaves$jalview_datamodel_SequenceNode',  function (nd) {
var leaves=Clazz.new_($I$(2,1));
this.findLeaves$jalview_datamodel_SequenceNode$java_util_Vector(nd, leaves);
return leaves;
});

Clazz.newMeth(C$, 'findLeaves$jalview_datamodel_SequenceNode$java_util_Vector',  function (nd, leaves) {
if (nd == null ) {
return leaves;
}if ((nd.left$() == null ) && (nd.right$() == null ) ) {
leaves.addElement$O(nd);
return leaves;
} else {
this.findLeaves$jalview_datamodel_SequenceNode$java_util_Vector(nd.left$(), leaves);
this.findLeaves$jalview_datamodel_SequenceNode$java_util_Vector(nd.right$(), leaves);
}return leaves;
});

Clazz.newMeth(C$, 'printNode$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return;
}if ((nd.left$() == null ) && (nd.right$() == null ) ) {
System.out.println$S("Leaf = " + (nd.element$()).getName$());
System.out.println$S("Dist " + new Double(nd.dist).toString());
System.out.println$S("Boot " + nd.getBootstrap$());
} else {
System.out.println$S("Dist " + new Double(nd.dist).toString());
this.printNode$jalview_datamodel_SequenceNode(nd.left$());
this.printNode$jalview_datamodel_SequenceNode(nd.right$());
}});

Clazz.newMeth(C$, 'getMaxHeight$',  function () {
return this.maxheight;
});

Clazz.newMeth(C$, 'groupNodes$F',  function (threshold) {
var groups=Clazz.new_($I$(6,1));
this._groupNodes$java_util_List$jalview_datamodel_SequenceNode$F(groups, this.getTopNode$(), threshold);
return groups;
});

Clazz.newMeth(C$, '_groupNodes$java_util_List$jalview_datamodel_SequenceNode$F',  function (groups, nd, threshold) {
if (nd == null ) {
return;
}if ((nd.height / this.maxheight) > threshold ) {
groups.add$O(nd);
} else {
this._groupNodes$java_util_List$jalview_datamodel_SequenceNode$F(groups, nd.left$(), threshold);
this._groupNodes$java_util_List$jalview_datamodel_SequenceNode$F(groups, nd.right$(), threshold);
}});

Clazz.newMeth(C$, 'findHeight$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return this.maxheight;
}if ((nd.left$() == null ) && (nd.right$() == null ) ) {
nd.height=(nd.parent$()).height + nd.dist;
if (nd.height > this.maxheight ) {
return nd.height;
} else {
return this.maxheight;
}} else {
if (nd.parent$() != null ) {
nd.height=(nd.parent$()).height + nd.dist;
} else {
this.maxheight=0;
nd.height=0.0;
}this.maxheight=this.findHeight$jalview_datamodel_SequenceNode((nd.left$()));
this.maxheight=this.findHeight$jalview_datamodel_SequenceNode((nd.right$()));
}return this.maxheight;
});

Clazz.newMeth(C$, 'printN$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return;
}if ((nd.left$() != null ) && (nd.right$() != null ) ) {
this.printN$jalview_datamodel_SequenceNode(nd.left$());
this.printN$jalview_datamodel_SequenceNode(nd.right$());
} else {
System.out.println$S(" name = " + (nd.element$()).getName$());
}System.out.println$S(" dist = " + new Double(nd.dist).toString() + " " + nd.count + " " + new Double(nd.height).toString() );
});

Clazz.newMeth(C$, 'reCount$jalview_datamodel_SequenceNode',  function (nd) {
this.ycount=0;
this._reCount$jalview_datamodel_SequenceNode(nd);
});

Clazz.newMeth(C$, '_reCount$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return;
}if ((nd.left$() != null ) && (nd.right$() != null ) ) {
this._reCount$jalview_datamodel_SequenceNode(nd.left$());
this._reCount$jalview_datamodel_SequenceNode(nd.right$());
var l=nd.left$();
var r=nd.right$();
nd.count=l.count + r.count;
nd.ycount=(l.ycount + r.ycount) / 2;
} else {
nd.count=1;
nd.ycount=this.ycount++;
}});

Clazz.newMeth(C$, 'swapNodes$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return;
}var tmp=nd.left$();
nd.setLeft$jalview_datamodel_BinaryNode(nd.right$());
nd.setRight$jalview_datamodel_BinaryNode(tmp);
});

Clazz.newMeth(C$, 'changeDirection$jalview_datamodel_SequenceNode$jalview_datamodel_SequenceNode',  function (nd, dir) {
if (nd == null ) {
return;
}if (nd.parent$() !== this.top ) {
this.changeDirection$jalview_datamodel_SequenceNode$jalview_datamodel_SequenceNode(nd.parent$(), nd);
var tmp=nd.parent$();
if (dir === nd.left$() ) {
nd.setParent$jalview_datamodel_BinaryNode(dir);
nd.setLeft$jalview_datamodel_BinaryNode(tmp);
} else if (dir === nd.right$() ) {
nd.setParent$jalview_datamodel_BinaryNode(dir);
nd.setRight$jalview_datamodel_BinaryNode(tmp);
}} else {
if (dir === nd.left$() ) {
nd.setParent$jalview_datamodel_BinaryNode(nd.left$());
if (this.top.left$() === nd ) {
nd.setRight$jalview_datamodel_BinaryNode(this.top.right$());
} else {
nd.setRight$jalview_datamodel_BinaryNode(this.top.left$());
}} else {
nd.setParent$jalview_datamodel_BinaryNode(nd.right$());
if (this.top.left$() === nd ) {
nd.setLeft$jalview_datamodel_BinaryNode(this.top.right$());
} else {
nd.setLeft$jalview_datamodel_BinaryNode(this.top.left$());
}}}});

Clazz.newMeth(C$, 'getTopNode$',  function () {
return this.top;
});

Clazz.newMeth(C$, 'hasDistances$',  function () {
return this.hasDistances;
});

Clazz.newMeth(C$, 'hasBootstrap$',  function () {
return this.hasBootstrap;
});

Clazz.newMeth(C$, 'hasRootDistance$',  function () {
return this.hasRootDistance;
});

Clazz.newMeth(C$, 'applyToNodes$jalview_datamodel_NodeTransformI',  function (nodeTransformI) {
for (var nodes=this.node.elements$(); nodes.hasMoreElements$(); nodeTransformI.transform$jalview_datamodel_BinaryNode(nodes.nextElement$())) {
;}
});

Clazz.newMeth(C$, 'getOriginalData$',  function () {
return this.seqData;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

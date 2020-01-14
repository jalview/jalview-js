(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),p$1={},I$=[[0,'fr.orsay.lri.varna.applications.fragseq.FragSeqNode','java.util.TreeSet','java.util.Hashtable',['fr.orsay.lri.varna.applications.fragseq.FragSeqTreeModel','.SORT_MODE'],'java.util.ArrayList','java.io.File','fr.orsay.lri.varna.applications.fragseq.FragSeqFileModel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FragSeqTreeModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.DefaultTreeModel', 'javax.swing.event.TreeWillExpandListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._rootIDs=null;
this._rootFolders=null;
this._folders=null;
this._folderPathToFolderNode=null;
this._idsToNode=null;
this._pathToIDFileNodes=null;
this._mode=null;
this._f=null;
this._isExpanded=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._rootIDs=Clazz.new_($I$(1).c$$O,["IDs"]);
this._rootFolders=Clazz.new_($I$(1).c$$O,["Folders"]);
this._folders=Clazz.new_($I$(2));
this._folderPathToFolderNode=Clazz.new_($I$(3));
this._idsToNode=Clazz.new_($I$(3));
this._pathToIDFileNodes=Clazz.new_($I$(3));
this._mode=$I$(4).PATH;
this._f=((P$.FragSeqTreeModel$1||
(function(){var C$=Clazz.newClass(P$, "FragSeqTreeModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FilenameFilter', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$java_io_File$S','accept$'], function (dir, name) {
return name.toLowerCase$().endsWith$S(".dbn") || name.toLowerCase$().endsWith$S(".ct") || name.toLowerCase$().endsWith$S(".bpseq") || name.toLowerCase$().endsWith$S(".rnaml")  ;
});
})()
), Clazz.new_(P$.FragSeqTreeModel$1.$init$, [this, null]));
this._isExpanded=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$javax_swing_tree_TreeNode.apply(this, [Clazz.new_($I$(1).c$$O,["Folders"])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode', function (t) {
C$.superclazz.c$$javax_swing_tree_TreeNode.apply(this, [t]);
C$.$init$.apply(this);
this.setRoot$javax_swing_tree_TreeNode(this._rootFolders);
}, 1);

Clazz.newMeth(C$, 'getPathViewRoot$', function () {
return this._rootFolders;
});

Clazz.newMeth(C$, 'getIDViewRoot$', function () {
return this._rootIDs;
});

Clazz.newMeth(C$, 'switchToIDView$', function () {
if (this._mode !== $I$(4).ID ) {
this.setRoot$javax_swing_tree_TreeNode(this._rootIDs);
}this._mode=$I$(4).ID;
});

Clazz.newMeth(C$, 'removeAllNodes$java_util_ArrayList', function (toBeRemoved) {
for (var leafNode, $leafNode = toBeRemoved.iterator$(); $leafNode.hasNext$()&&((leafNode=($leafNode.next$())),1);) {
var parent=leafNode.getParent$();
parent.remove$javax_swing_tree_MutableTreeNode(leafNode);
if (parent.getChildCount$() == 0) {
parent.removeFromParent$();
this._folderPathToFolderNode.remove$O(parent);
if (Clazz.instanceOf(parent.getUserObject$(), "java.lang.String")) {
var path=parent.getUserObject$().toString();
}} else {
this.reload$javax_swing_tree_TreeNode(parent);
}}
}, p$1);

Clazz.newMeth(C$, 'getNodeForId$S', function (id) {
if (!this._idsToNode.containsKey$O(id)) {
var idNode=Clazz.new_($I$(1).c$$O,[id]);
this._idsToNode.put$TK$TV(id, idNode);
this._rootIDs.add$javax_swing_tree_MutableTreeNode(idNode);
}var idNode=this._idsToNode.get$O(id);
return idNode;
});

Clazz.newMeth(C$, 'removeFolder$S', function (path) {
var toBeRemoved=Clazz.new_($I$(5));
var en=this._folderPathToFolderNode.get$O(path).children$();
while (en.hasMoreElements$()){
var n=en.nextElement$();
toBeRemoved.add$TE(n);
}
p$1.removeAllNodes$java_util_ArrayList.apply(this, [toBeRemoved]);
this._folders.remove$O(path);
});

Clazz.newMeth(C$, 'insertGroupNode$S$java_util_TreeSet', function (crit, t) {
var groupNode=Clazz.new_($I$(1).c$$O,[crit]);
var parent=this.getRoot$();
var pos=t.headSet$TE(crit).size$();
parent.insert$javax_swing_tree_MutableTreeNode$I(groupNode, pos);
this.reload$javax_swing_tree_TreeNode(groupNode);
return groupNode;
});

Clazz.newMeth(C$, 'insertFileNode$fr_orsay_lri_varna_applications_fragseq_FragSeqNode$fr_orsay_lri_varna_applications_fragseq_FragSeqFileModel', function (parent, m) {
var leafNode=Clazz.new_($I$(1).c$$O,[m]);
parent.add$javax_swing_tree_MutableTreeNode(leafNode);
});

Clazz.newMeth(C$, 'addFolder$S', function (path) {
var groupNode=null;
try {
if (!this._folders.contains$O(path)) {
var dir=Clazz.new_($I$(6).c$$S,[path]);
if (dir.isDirectory$()) {
path=dir.getCanonicalPath$();
this._folders.add$TE(path);
groupNode=this.insertGroupNode$S$java_util_TreeSet(path, this._folders);
this._folderPathToFolderNode.put$TK$TV(path, groupNode);
for (var f, $f = 0, $$f = dir.listFiles$java_io_FilenameFilter(this._f); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
p$1.addFile$S$S.apply(this, [path, f.getCanonicalPath$()]);
}
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return groupNode;
});

Clazz.newMeth(C$, 'addFile$S$S', function (folder, path) {
System.out.println$S("  => " + path);
var m=Clazz.new_($I$(7).c$$S$S,[folder, path]);
this.addFolder$S(folder);
this.insertFileNode$fr_orsay_lri_varna_applications_fragseq_FragSeqNode$fr_orsay_lri_varna_applications_fragseq_FragSeqFileModel(this._folderPathToFolderNode.get$O(folder), m);
}, p$1);

Clazz.newMeth(C$, 'getRoot$', function () {
return C$.superclazz.prototype.getRoot$.apply(this, []);
});

Clazz.newMeth(C$, 'getFolders$', function () {
var result=Clazz.new_($I$(5).c$$java_util_Collection,[this._folders]);
return result;
});

Clazz.newMeth(C$, 'getFileNameFilter$', function () {
return this._f;
});

Clazz.newMeth(C$, 'setFileNameFilter$java_io_FilenameFilter', function (f) {
this._f=f;
});

Clazz.newMeth(C$, 'isExpanded$fr_orsay_lri_varna_applications_fragseq_FragSeqNode', function (n) {
if (this._isExpanded.containsKey$O(n)) {
return (this._isExpanded.get$O(n)).booleanValue$();
} else return false;
});

Clazz.newMeth(C$, 'treeWillExpand$javax_swing_event_TreeExpansionEvent', function (event) {
if (Clazz.instanceOf(event.getSource$(), "fr.orsay.lri.varna.applications.fragseq.FragSeqTree")) {
var tree=event.getSource$();
var t=event.getPath$();
var n=t.getLastPathComponent$();
this._isExpanded.put$TK$TV(n, new Boolean(true));
var o=n.getUserObject$();
if (Clazz.instanceOf(o, "fr.orsay.lri.varna.applications.fragseq.FragSeqFileModel")) {
var f=o;
if (!f._cached) {
var path=f.getPath$();
if (!this._pathToIDFileNodes.containsKey$O(path)) {
this._pathToIDFileNodes.put$TK$TV(path, Clazz.new_($I$(5)));
}var nodesForID=this._pathToIDFileNodes.get$O(path);
for (var m, $m = f.getModels$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
n.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(1).c$$O,[m]));
var nid=this.getNodeForId$S(m.getID$());
nid.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(1).c$$O,[m]));
nodesForID.add$TE(nid);
}
}}}});

Clazz.newMeth(C$, 'treeWillCollapse$javax_swing_event_TreeExpansionEvent', function (event) {
var t=event.getPath$();
var n=t.getLastPathComponent$();
this._isExpanded.put$TK$TV(n, new Boolean(false));
});
;
(function(){var C$=Clazz.newClass(P$.FragSeqTreeModel, "SORT_MODE", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PATH", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ID", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06

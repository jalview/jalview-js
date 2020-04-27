(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.newGUI"),p$1={},I$=[[0,'java.util.TreeSet','java.util.Hashtable','java.util.ArrayList',['fr.orsay.lri.varna.applications.newGUI.VARNAGUITreeModel','.SORT_MODE'],'javax.swing.tree.DefaultMutableTreeNode','java.io.File','fr.orsay.lri.varna.applications.newGUI.VARNAGUIModel']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAGUITreeModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.DefaultTreeModel');
C$.$classes$=[['SORT_MODE',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._folders=Clazz.new_($I$(1,1));
this._ids=Clazz.new_($I$(1,1));
this._criterionToFiles=Clazz.new_($I$(2,1));
this._criterionToNodes=Clazz.new_($I$(2,1));
this._fileNodes=Clazz.new_($I$(3,1));
this._mode=$I$(4).PATH;
this._f=((P$.VARNAGUITreeModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUITreeModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FilenameFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'accept$java_io_File$S', function (dir, name) {
return name.toLowerCase$().endsWith$S(".dbn") || name.toLowerCase$().endsWith$S(".ct") || name.toLowerCase$().endsWith$S(".bpseq") || name.toLowerCase$().endsWith$S(".rnaml")  ;
});
})()
), Clazz.new_(P$.VARNAGUITreeModel$1.$init$,[this, null]));
},1);

C$.$fields$=[['O',['_folders','java.util.TreeSet','+_ids','_criterionToFiles','java.util.Hashtable','+_criterionToNodes','_fileNodes','java.util.ArrayList','_mode','fr.orsay.lri.varna.applications.newGUI.VARNAGUITreeModel.SORT_MODE','_f','java.io.FilenameFilter']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$javax_swing_tree_TreeNode.apply(this,[Clazz.new_($I$(5,1).c$$O,["Folders"])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'removeFolder$S', function (path) {
if (this._mode === $I$(4).PATH ) {
var pos=this._folders.headSet$O(path).size$();
var parent=this.getRoot$().getChildAt$I(pos);
parent.removeAllChildren$();
this.reload$javax_swing_tree_TreeNode(parent);
this.getRoot$().remove$javax_swing_tree_MutableTreeNode(parent);
this._criterionToNodes.remove$O(path);
this._criterionToFiles.remove$O(path);
} else if (this._mode === $I$(4).ID ) {
var toBeRemoved=Clazz.new_($I$(3,1));
for (var leafNode, $leafNode = this._fileNodes.iterator$(); $leafNode.hasNext$()&&((leafNode=($leafNode.next$())),1);) {
var m=leafNode.getUserObject$();
if (m.getFolder$().equals$O(path)) {
toBeRemoved.add$O(leafNode);
}}
for (var leafNode, $leafNode = toBeRemoved.iterator$(); $leafNode.hasNext$()&&((leafNode=($leafNode.next$())),1);) {
this._fileNodes.remove$O(leafNode);
var parent=leafNode.getParent$();
parent.remove$javax_swing_tree_MutableTreeNode(leafNode);
}
}this._folders.remove$O(path);
});

Clazz.newMeth(C$, 'insertGroupNode$S$java_util_TreeSet', function (crit, t) {
var groupNode=Clazz.new_($I$(5,1).c$$O,[crit]);
var parent=this.getRoot$();
var pos=t.headSet$O(crit).size$();
parent.insert$javax_swing_tree_MutableTreeNode$I(groupNode, pos);
this.reload$javax_swing_tree_TreeNode(groupNode);
return groupNode;
});

Clazz.newMeth(C$, 'insertLeafNode$javax_swing_tree_DefaultMutableTreeNode$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel$java_util_TreeSet', function (parent, m, t) {
var leafNode=Clazz.new_($I$(5,1).c$$O,[m]);
var pos=t.headSet$O(m).size$();
parent.insert$javax_swing_tree_MutableTreeNode$I(leafNode, pos);
this._fileNodes.add$O(leafNode);
});

Clazz.newMeth(C$, 'addFolder$S', function (path) {
var groupNode=null;
try {
if (!this._folders.contains$O(path)) {
System.out.println$S("Folder: " + path);
var dir=Clazz.new_($I$(6,1).c$$S,[path]);
if (dir.isDirectory$()) {
path=dir.getCanonicalPath$();
this._folders.add$O(path);
if (this._mode === $I$(4).PATH ) {
System.out.println$S("  Adding: " + path);
groupNode=this.insertGroupNode$S$java_util_TreeSet(path, this._folders);
this._criterionToNodes.put$O$O(path, groupNode);
this._criterionToFiles.put$O$O(path, Clazz.new_($I$(1,1)));
}for (var f, $f = 0, $$f = dir.listFiles$java_io_FilenameFilter(this._f); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
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
var m=Clazz.new_($I$(7,1).c$$S$S,[folder, path]);
if (this._mode === $I$(4).PATH ) {
this.addFolder$S(folder);
this.insertLeafNode$javax_swing_tree_DefaultMutableTreeNode$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel$java_util_TreeSet(this._criterionToNodes.get$O(folder), m, this._criterionToFiles.get$O(folder));
} else if (this._mode === $I$(4).ID ) {
var id=m.getID$();
if (!this._criterionToNodes.containsKey$O(id)) {
this._criterionToNodes.put$O$O(id, this.insertGroupNode$S$java_util_TreeSet(id, this._ids));
}this.insertLeafNode$javax_swing_tree_DefaultMutableTreeNode$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel$java_util_TreeSet(this._criterionToNodes.get$O(id), m, this._criterionToFiles.get$O(id));
}}, p$1);

Clazz.newMeth(C$, 'getRoot$', function () {
return C$.superclazz.prototype.getRoot$.apply(this, []);
});

Clazz.newMeth(C$, 'getFolders$', function () {
var result=Clazz.new_($I$(3,1).c$$java_util_Collection,[this._folders]);
return result;
});

Clazz.newMeth(C$, 'getFileNameFilter$', function () {
return this._f;
});

Clazz.newMeth(C$, 'setFileNameFilter$java_io_FilenameFilter', function (f) {
this._f=f;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.VARNAGUITreeModel, "SORT_MODE", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PATH", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ID", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

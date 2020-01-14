(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[[0,'javax.swing.tree.TreePath']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TreeSelectionEvent", null, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.paths=null;
this.areNew=null;
this.oldLeadSelectionPath=null;
this.newLeadSelectionPath=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_tree_TreePathA$ZA$javax_swing_tree_TreePath$javax_swing_tree_TreePath', function (source, paths, areNew, oldLeadSelectionPath, newLeadSelectionPath) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
this.paths=paths;
this.areNew=areNew;
this.oldLeadSelectionPath=oldLeadSelectionPath;
this.newLeadSelectionPath=newLeadSelectionPath;
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_tree_TreePath$Z$javax_swing_tree_TreePath$javax_swing_tree_TreePath', function (source, path, isNew, oldLeadSelectionPath, newLeadSelectionPath) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
this.paths=Clazz.array($I$(1), [1]);
this.paths[0]=path;
this.areNew=Clazz.array(Boolean.TYPE, [1]);
this.areNew[0]=isNew;
this.oldLeadSelectionPath=oldLeadSelectionPath;
this.newLeadSelectionPath=newLeadSelectionPath;
}, 1);

Clazz.newMeth(C$, 'getPaths$', function () {
var numPaths;
var retPaths;
numPaths=this.paths.length;
retPaths=Clazz.array($I$(1), [numPaths]);
System.arraycopy$O$I$O$I$I(this.paths, 0, retPaths, 0, numPaths);
return retPaths;
});

Clazz.newMeth(C$, 'getPath$', function () {
return this.paths[0];
});

Clazz.newMeth(C$, 'isAddedPath$', function () {
return this.areNew[0];
});

Clazz.newMeth(C$, 'isAddedPath$javax_swing_tree_TreePath', function (path) {
for (var counter=this.paths.length - 1; counter >= 0; counter--) if (this.paths[counter].equals$O(path)) return this.areNew[counter];

throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["path is not a path identified by the TreeSelectionEvent"]);
});

Clazz.newMeth(C$, 'isAddedPath$I', function (index) {
if (this.paths == null  || index < 0  || index >= this.paths.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index is beyond range of added paths identified by TreeSelectionEvent"]);
}return this.areNew[index];
});

Clazz.newMeth(C$, 'getOldLeadSelectionPath$', function () {
return this.oldLeadSelectionPath;
});

Clazz.newMeth(C$, 'getNewLeadSelectionPath$', function () {
return this.newLeadSelectionPath;
});

Clazz.newMeth(C$, 'cloneWithSource$O', function (newSource) {
return Clazz.new_(C$.c$$O$javax_swing_tree_TreePathA$ZA$javax_swing_tree_TreePath$javax_swing_tree_TreePath,[newSource, this.paths, this.areNew, this.oldLeadSelectionPath, this.newLeadSelectionPath]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

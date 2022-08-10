(function(){var P$=Clazz.newPackage("jalview.datamodel");
/*c*/var C$=Clazz.newClass(P$, "BinaryNode");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bootstrap'],'S',['name'],'O',['element','java.lang.Object','left','jalview.datamodel.BinaryNode','+right','+parent']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.left=this.right=this.parent=null;
this.bootstrap=0;
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_datamodel_BinaryNode$S',  function (element, parent, name) {
;C$.$init$.apply(this);
this.element=element;
this.parent=parent;
this.name=name;
this.left=this.right=null;
}, 1);

Clazz.newMeth(C$, 'element$',  function () {
return this.element;
});

Clazz.newMeth(C$, 'setElement$O',  function (v) {
return this.element=v;
});

Clazz.newMeth(C$, 'left$',  function () {
return this.left;
});

Clazz.newMeth(C$, 'setLeft$jalview_datamodel_BinaryNode',  function (n) {
return this.left=n;
});

Clazz.newMeth(C$, 'right$',  function () {
return this.right;
});

Clazz.newMeth(C$, 'setRight$jalview_datamodel_BinaryNode',  function (n) {
return this.right=n;
});

Clazz.newMeth(C$, 'parent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'setParent$jalview_datamodel_BinaryNode',  function (n) {
return this.parent=n;
});

Clazz.newMeth(C$, 'isLeaf$',  function () {
return (this.left == null ) && (this.right == null ) ;
});

Clazz.newMeth(C$, 'SetChildren$jalview_datamodel_BinaryNode$jalview_datamodel_BinaryNode',  function (leftchild, rightchild) {
if (leftchild != null ) {
this.setLeft$jalview_datamodel_BinaryNode(leftchild);
leftchild.detach$();
leftchild.setParent$jalview_datamodel_BinaryNode(this);
}if (rightchild != null ) {
this.setRight$jalview_datamodel_BinaryNode(rightchild);
rightchild.detach$();
rightchild.setParent$jalview_datamodel_BinaryNode(this);
}});

Clazz.newMeth(C$, 'detach$',  function () {
if (this.parent != null ) {
if (this.parent.left === this ) {
this.parent.left=null;
} else {
if (this.parent.right === this ) {
this.parent.right=null;
}}}this.parent=null;
return this;
});

Clazz.newMeth(C$, 'ascendLeft$',  function () {
var c=this;
do {
c=c.parent$();
} while ((c != null ) && (c.left$() != null ) && !c.left$().isLeaf$()  );
return c;
});

Clazz.newMeth(C$, 'ascendRight$',  function () {
var c=this;
do {
c=c.parent$();
} while ((c != null ) && (c.right$() != null ) && !c.right$().isLeaf$()  );
return c;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setBootstrap$I',  function (boot) {
this.bootstrap=boot;
});

Clazz.newMeth(C$, 'getBootstrap$',  function () {
return this.bootstrap;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

(function(){var P$=Clazz.newPackage("sun.util.resources"),I$=[[0,'java.util.HashSet','java.util.concurrent.atomic.AtomicMarkableReference','java.util.Collections',['sun.util.resources.ParallelListResourceBundle','.KeySet'],'java.util.concurrent.ConcurrentHashMap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParallelListResourceBundle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.ResourceBundle');
C$.$classes$=[['KeySet',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parallelContents=Clazz.new_($I$(2,1).c$$O$Z,[null, false]);
},1);

C$.$fields$=[['O',['lookup','java.util.concurrent.ConcurrentMap','keyset','java.util.Set','parallelContents','java.util.concurrent.atomic.AtomicMarkableReference']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'setParallelContents$sun_util_resources_OpenListResourceBundle', function (rb) {
if (rb == null ) {
this.parallelContents.compareAndSet$O$O$Z$Z(null, null, false, true);
} else {
this.parallelContents.compareAndSet$O$O$Z$Z(null, rb.getContents$(), false, false);
}});

Clazz.newMeth(C$, 'areParallelContentsComplete$', function () {
if (this.parallelContents.isMarked$()) {
return true;
}var done=Clazz.array(Boolean.TYPE, [1]);
var data=this.parallelContents.get$ZA(done);
return data != null  || done[0] ;
});

Clazz.newMeth(C$, 'handleGetObject$S', function (key) {
if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.loadLookupTablesIfNecessary$();
return this.lookup.get$O(key);
});

Clazz.newMeth(C$, 'getKeys$', function () {
return $I$(3,"enumeration$java_util_Collection",[this.keySet$()]);
});

Clazz.newMeth(C$, 'containsKey$S', function (key) {
return this.keySet$().contains$O(key);
});

Clazz.newMeth(C$, 'handleKeySet$', function () {
this.loadLookupTablesIfNecessary$();
return this.lookup.keySet$();
});

Clazz.newMeth(C$, 'keySet$', function () {
var ks;
while ((ks=this.keyset) == null ){
ks=Clazz.new_([this.handleKeySet$(), this.parent],$I$(4,1).c$$java_util_Set$java_util_ResourceBundle);
{
if (this.keyset == null ) {
this.keyset=ks;
}}}
return ks;
});

Clazz.newMeth(C$, 'resetKeySet$', function () {
this.keyset=null;
});

Clazz.newMeth(C$, 'loadLookupTablesIfNecessary$', function () {
var map=this.lookup;
if (map == null ) {
map=Clazz.new_($I$(5,1));
for (var item, $item = 0, $$item = this.getContents$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) {
map.put$O$O(item[0], item[1]);
}
}var data=this.parallelContents.getReference$();
if (data != null ) {
for (var item, $item = 0, $$item = data; $item<$$item.length&&((item=($$item[$item])),1);$item++) {
map.putIfAbsent$O$O(item[0], item[1]);
}
this.parallelContents.set$O$Z(null, true);
}if (this.lookup == null ) {
{
if (this.lookup == null ) {
this.lookup=map;
}}}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParallelListResourceBundle, "KeySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['set','java.util.Set','parent','java.util.ResourceBundle']]]

Clazz.newMeth(C$, 'c$$java_util_Set$java_util_ResourceBundle', function (set, parent) {
Clazz.super_(C$, this);
this.set=set;
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'contains$O', function (o) {
if (this.set.contains$O(o)) {
return true;
}return (this.parent != null ) ? this.parent.containsKey$S(o) : false;
});

Clazz.newMeth(C$, 'iterator$', function () {
if (this.parent == null ) {
return this.set.iterator$();
}return ((P$.ParallelListResourceBundle$KeySet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParallelListResourceBundle$KeySet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.itr=this.b$['sun.util.resources.ParallelListResourceBundle.KeySet'].set.iterator$();
},1);

C$.$fields$=[['Z',['usingParent'],'O',['itr','java.util.Iterator']]]

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.itr.hasNext$()) {
return true;
}if (!this.usingParent) {
var nextset=Clazz.new_([this.b$['sun.util.resources.ParallelListResourceBundle.KeySet'].parent.keySet$()],$I$(1,1).c$$java_util_Collection);
nextset.removeAll$java_util_Collection(this.b$['sun.util.resources.ParallelListResourceBundle.KeySet'].set);
this.itr=nextset.iterator$();
this.usingParent=true;
}return this.itr.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
if (this.hasNext$()) {
return this.itr.next$();
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.ParallelListResourceBundle$KeySet$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'size$', function () {
if (this.parent == null ) {
return this.set.size$();
}var allset=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.set]);
allset.addAll$java_util_Collection(this.parent.keySet$());
return allset.size$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

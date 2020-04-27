(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.Hashtable','java.util.Collections','jalview.util.CaseInsensitiveString']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDBEntry", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Type',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['file','type','id'],'O',['properties','java.util.Hashtable']]]

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.datamodel.PDBEntry")) ) {
return false;
}if (obj === this ) {
return true;
}var o=obj;
var idMatches=this.id == o.id || (this.id != null  && this.id.equalsIgnoreCase$S(o.id) ) ;
var fileMatches=this.file == o.file || (this.file != null  && this.file.equals$O(o.file) ) ;
var typeMatches=this.type == o.type || (this.type != null  && this.type.equals$O(o.type) ) ;
if (idMatches && fileMatches && typeMatches  ) {
return this.properties === o.properties  || (this.properties != null  && this.properties.equals$O(o.properties) ) ;
}return false;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$jalview_datamodel_PDBEntry_Type$S', function (pdbId, chain, type, filePath) {
;C$.$init$.apply(this);
this.init$S$S$jalview_datamodel_PDBEntry_Type$S(pdbId, chain, type, filePath);
}, 1);

Clazz.newMeth(C$, 'init$S$S$jalview_datamodel_PDBEntry_Type$S', function (pdbId, chain, entryType, filePath) {
this.id=pdbId;
this.type=entryType == null  ? null : entryType.toString();
this.file=filePath;
this.setChainCode$S(chain);
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry', function (entry) {
;C$.$init$.apply(this);
this.file=entry.file;
this.type=entry.type;
this.id=entry.id;
if (entry.properties != null ) {
this.properties=entry.properties.clone$();
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_DBRefEntry', function (dbr) {
;C$.$init$.apply(this);
if (!"PDB".equals$O(dbr.getSource$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid source: " + dbr.getSource$()]);
}var pdbId=dbr.getAccessionId$();
var chainCode=null;
if (pdbId.length$() == 5) {
var chain=pdbId.charAt$I(4);
if (("a" <= chain && chain <= "z" ) || ("A" <= chain && chain <= "Z" ) ) {
pdbId=pdbId.substring$I$I(0, 4);
chainCode=String.valueOf$C(chain);
}}this.init$S$S$jalview_datamodel_PDBEntry_Type$S(pdbId, chainCode, null, null);
}, 1);

Clazz.newMeth(C$, 'setFile$S', function (f) {
this.file=f;
});

Clazz.newMeth(C$, 'getFile$', function () {
return this.file;
});

Clazz.newMeth(C$, 'setType$S', function (t) {
this.type=t;
});

Clazz.newMeth(C$, 'setType$jalview_datamodel_PDBEntry_Type', function (type) {
this.type=type == null  ? null : type.toString();
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setId$S', function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setProperty$S$O', function (key, value) {
if (this.properties == null ) {
this.properties=Clazz.new_($I$(1,1));
}this.properties.put$O$O(key, value);
});

Clazz.newMeth(C$, 'getProperty$S', function (key) {
return this.properties == null  ? null : this.properties.get$O(key);
});

Clazz.newMeth(C$, 'getProperties$', function () {
if (this.properties == null ) {
return $I$(2).emptyEnumeration$();
}return this.properties.keys$();
});

Clazz.newMeth(C$, 'getChainCode$', function () {
return (this.properties == null  || this.properties.get$O("chain_code") == null  ) ? null : this.properties.get$O("chain_code").toString();
});

Clazz.newMeth(C$, 'setChainCode$S', function (chainCode) {
if (chainCode == null ) {
this.deleteProperty$S("chain_code");
} else {
this.setProperty$S$O("chain_code", Clazz.new_($I$(3,1).c$$S,[chainCode]));
}});

Clazz.newMeth(C$, 'deleteProperty$S', function (key) {
var result=null;
if (this.properties != null ) {
result=this.properties.remove$O(key);
}return result;
});

Clazz.newMeth(C$, 'toString', function () {
return this.id;
});

Clazz.newMeth(C$, 'getProps$', function () {
return this.properties;
});

Clazz.newMeth(C$, 'setProps$java_util_Hashtable', function (props) {
this.properties=props;
});

Clazz.newMeth(C$, 'updateFrom$jalview_datamodel_PDBEntry', function (newEntry) {
if (this.equals$O(newEntry)) {
return true;
}var newId=newEntry.getId$();
if (newId == null  || this.getId$() == null  ) {
return false;
}if (!this.getId$().equalsIgnoreCase$S(newId)) {
return false;
}var newFile=newEntry.getFile$();
if (newFile != null  && this.getFile$() != null   && !newFile.equals$O(this.getFile$()) ) {
return false;
}var newChain=newEntry.getChainCode$();
if (newChain != null  && newChain.length$() > 0  && this.getChainCode$() != null   && this.getChainCode$().length$() > 0  && !this.getChainCode$().equalsIgnoreCase$S(newChain) ) {
return false;
}var newType=newEntry.getType$();
if (this.getFile$() == null  && newFile != null  ) {
this.setFile$S(newFile);
this.setType$S(newType);
}if (this.getType$() == null  && newType != null  ) {
this.setType$S(newType);
}if (newChain != null  && newChain.length$() > 0  && !newChain.equalsIgnoreCase$S(this.getChainCode$()) ) {
this.setChainCode$S(newChain);
}var newProps=newEntry.getProperties$();
while (newProps.hasMoreElements$()){
var key=newProps.nextElement$();
var value=newEntry.getProperty$S(key);
if (!value.equals$O(this.getProperty$S(key))) {
this.setProperty$S$O(key, value);
}}
return true;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.PDBEntry, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['ext','format']]]

Clazz.newMeth(C$, 'c$$S$S', function (fmt, ex) {
;C$.$init$.apply(this);
this.format=fmt;
this.ext=ex;
}, 1);

Clazz.newMeth(C$, 'getFormat$', function () {
return this.format;
});

Clazz.newMeth(C$, 'getExtension$', function () {
return this.ext;
});

Clazz.newMeth(C$, 'getType$S', function (value) {
for (var t, $t = 0, $$t = C$.values$(); $t<$$t.length&&((t=($$t[$t])),1);$t++) {
if (t.toString().equalsIgnoreCase$S(value)) {
return t;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'matches$S', function (t) {
return (this.toString().equalsIgnoreCase$S(t));
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$S, "PDB", 0, ["pdb", "pdb"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "MMCIF", 1, ["mmcif", "cif"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "FILE", 2, ["?", "?"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

(function(){var P$=Clazz.newPackage("org.jmol.export"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UseTable", null, 'java.util.Hashtable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.term="\u0000";
},1);

C$.$fields$=[['C',['term'],'I',['iObj'],'S',['keyword']]]

Clazz.newMeth(C$, 'c$$S', function (keyword) {
Clazz.super_(C$, this);
this.keyword=keyword;
this.term=keyword.charAt$I(keyword.length$() - 1);
}, 1);

Clazz.newMeth(C$, 'getDef$S', function (key) {
if (this.containsKey$O(key)) return this.keyword + this.get$O(key) + this.term ;
var id="_" + (this.iObj++);
this.put$O$O(key, id);
return id;
});

Clazz.newMeth(C$, 'getDefRet$S$SA', function (key, ret) {
if ((ret[0]=this.get$O(key)) != null ) return true;
this.put$O$O(key, ret[0]="_" + key.charAt$I(0) + (this.iObj++) );
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

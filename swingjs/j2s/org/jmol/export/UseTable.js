(function(){var P$=Clazz.newPackage("org.jmol.export"),I$=[];
var C$=Clazz.newClass(P$, "UseTable", null, 'java.util.Hashtable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iObj=0;
this.keyword=null;
this.term='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.term="\u0000";
}, 1);

Clazz.newMeth(C$, 'c$$S', function (keyword) {
Clazz.super_(C$, this,1);
this.keyword=keyword;
this.term=keyword.charAt$I(keyword.length$() - 1);
}, 1);

Clazz.newMeth(C$, 'getDef$S', function (key) {
if (this.containsKey$O(key)) return this.keyword + this.get$O(key) + this.term ;
var id="_" + (this.iObj++);
this.put$TK$TV(key, id);
return id;
});

Clazz.newMeth(C$, 'getDefRet$S$SA', function (key, ret) {
if ((ret[0]=this.get$O(key)) != null ) return true;
this.put$TK$TV(key, ret[0]="_" + key.charAt$I(0) + (this.iObj++) );
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

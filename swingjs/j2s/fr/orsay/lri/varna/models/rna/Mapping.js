(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.Hashtable']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Mapping", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._mapping=Clazz.new_($I$(1,1));
this._invMapping=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['_mapping','java.util.Hashtable','+_invMapping']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addCouple$I$I', function (i, j) {
if (this._mapping.containsKey$O(new Integer(i)) || this._invMapping.containsKey$O(new Integer(j)) ) {
throw Clazz.new_(Clazz.load('fr.orsay.lri.varna.exceptions.MappingException').c$$I,[1]);
}this._mapping.put$O$O( new Integer(i),  new Integer(j));
this._invMapping.put$O$O( new Integer(j),  new Integer(i));
});

Clazz.newMeth(C$, 'getPartner$I', function (i) {
if (!this._mapping.containsKey$O(new Integer(i))) return -1;
 else return (this._mapping.get$O(new Integer(i))).valueOf();
});

Clazz.newMeth(C$, 'getAncestor$I', function (j) {
if (!this._invMapping.containsKey$O(new Integer(j))) return -1;
 else return (this._invMapping.get$O(new Integer(j))).valueOf();
});

Clazz.newMeth(C$, 'getSourceElems$', function () {
var elems=Clazz.array(Integer.TYPE, [this._mapping.size$()]);
var en=this._mapping.keys$();
var i=0;
while (en.hasMoreElements$()){
var a=(en.nextElement$()).valueOf();
elems[i]=a;
i++;
}
return elems;
});

Clazz.newMeth(C$, 'getTargetElems$', function () {
var elems=Clazz.array(Integer.TYPE, [this._invMapping.size$()]);
var en=this._invMapping.keys$();
var i=0;
while (en.hasMoreElements$()){
var a=(en.nextElement$()).valueOf();
elems[i]=a;
i++;
}
return elems;
});

Clazz.newMeth(C$, 'readMappingFromAlignment$S$S', function (m, n) {
var map=Clazz.new_(C$);
if (m.length$() != n.length$()) {
throw Clazz.new_(Clazz.load('fr.orsay.lri.varna.exceptions.MappingException').c$$I,[2]);
}var i=0;
var j=0;
for (var k=0; k < m.length$(); k++) {
var a=m.charAt$I(k);
var b=n.charAt$I(k);
if ((a != "-") && (a != ":") && (b != "-") && (b != ":")  ) {
map.addCouple$I$I(i, j);
}if ((a != "-") && (a != ":") ) {
j++;
}if ((b != "-") && (b != ":") ) {
i++;
}}
return map;
}, 1);

Clazz.newMeth(C$, 'DefaultMapping$I$I', function (n, m) {
var map=Clazz.new_(C$);
try {
for (var i=0; i < Math.min(n, m); i++) {
map.addCouple$I$I(i, i);
}
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.MappingException")){
e.printStackTrace$();
} else {
throw e;
}
}
return map;
}, 1);

Clazz.newMeth(C$, 'DefaultOutermostMapping$I$I', function (n, m) {
var map=Clazz.new_(C$);
try {
var k=Math.min(n, m);
var i=0;
var j=0;
var pile=true;
while (i <= (k - 1) - j){
if (pile) {
map.addCouple$I$I(i, i);
i++;
} else {
map.addCouple$I$I(n - 1 - j , m - 1 - j );
j++;
}pile=!pile;
}
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.MappingException")){
e.printStackTrace$();
} else {
throw e;
}
}
return map;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var en=this._mapping.keys$();
var tmp="";
var l1=0;
var l2=0;
var maxIndex=0;
while (en.hasMoreElements$()){
var i=en.nextElement$();
var j=this._mapping.get$O(i);
l1=Math.max(l1, (i).valueOf());
l2=Math.max(l2, (j).valueOf());
tmp += "(" + i + "," + j + ")" ;
}
maxIndex=Math.max(maxIndex, Math.max(l1, l2));
var tmp1="";
var tmp2="";
en=this._mapping.keys$();
var i=l1;
var j=l2;
while (en.hasMoreElements$()){
var a=en.nextElement$();
var b=this._mapping.get$O(a);
while ((a).valueOf() < i ){
tmp1='x' + tmp1;
tmp2='-' + tmp2;
i--;
}
while ((b).valueOf() < j ){
tmp1='-' + tmp1;
tmp2='x' + tmp2;
j--;
}
tmp1='|' + tmp1;
tmp2='|' + tmp2;
i--;
j--;
}
return tmp + "\n" + tmp1 + "\n" + tmp2 ;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

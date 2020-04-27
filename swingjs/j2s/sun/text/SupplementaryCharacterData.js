(function(){var P$=Clazz.newPackage("sun.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SupplementaryCharacterData", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataTable','int[]']]]

Clazz.newMeth(C$, 'c$$IA', function (table) {
;C$.$init$.apply(this);
this.dataTable=table;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
Clazz.assert(C$, this, function(){return index >= 65536 && index <= 1114111 }, function(){return "Invalid code point:" + Integer.toHexString$I(index)});
var i=0;
var j=this.dataTable.length - 1;
var k;
for (; ; ) {
k=((i + j)/2|0);
var start=this.dataTable[k] >> 8;
var end=this.dataTable[k + 1] >> 8;
if (index < start) {
j=k;
} else if (index > (end - 1)) {
i=k;
} else {
var v=this.dataTable[k] & 255;
return (v == 255) ? -1 : v;
}}
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.dataTable;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

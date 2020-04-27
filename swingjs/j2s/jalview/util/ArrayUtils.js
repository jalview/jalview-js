(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ArrayUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'reverseIntArray$IA', function (arr) {
if (arr != null ) {
var last=arr.length - 1;
for (var k=0; k < (arr.length/2|0); k++) {
var temp=arr[k];
arr[k]=arr[last - k];
arr[last - k]=temp;
}
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

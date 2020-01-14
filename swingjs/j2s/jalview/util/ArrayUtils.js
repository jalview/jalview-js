(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "ArrayUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

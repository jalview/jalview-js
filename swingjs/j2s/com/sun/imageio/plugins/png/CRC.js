(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CRC");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.crc=-1;
},1);

C$.$fields$=[['I',['crc']]
,['O',['crcTable','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
this.crc=-1;
});

Clazz.newMeth(C$, 'update$BA$I$I',  function (data, off, len) {
for (var n=0; n < len; n++) {
this.crc=C$.crcTable[(this.crc ^ data[off + n]) & 255] ^ (this.crc >>> 8);
}
});

Clazz.newMeth(C$, 'update$I',  function (data) {
this.crc=C$.crcTable[(this.crc ^ data) & 255] ^ (this.crc >>> 8);
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.crc ^ -1;
});

C$.$static$=function(){C$.$static$=0;
C$.crcTable=Clazz.array(Integer.TYPE, [256]);
{
for (var n=0; n < 256; n++) {
var c=n;
for (var k=0; k < 8; k++) {
if ((c & 1) == 1) {
c=-306674912 ^ (c >>> 1);
} else {
c>>>=1;
}C$.crcTable[n]=c;
}
}
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

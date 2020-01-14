(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "BC");
C$.fracIEEE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'bytesToFloat$BA$I$Z', function (bytes, j, isBigEndian) {
return C$.intToFloat$I(C$.bytesToInt$BA$I$Z(bytes, j, isBigEndian));
}, 1);

Clazz.newMeth(C$, 'bytesToShort$BA$I$Z', function (bytes, j, isBigEndian) {
var n=(isBigEndian ? (bytes[j + 1] & 255) | (bytes[j] & 255) << 8 : (bytes[j++] & 255) | (bytes[j++] & 255) << 8);
return (n > 32767 ? n - 65536 : n);
}, 1);

Clazz.newMeth(C$, 'bytesToInt$BA$I$Z', function (bytes, j, isBigEndian) {
var n=(isBigEndian ? (bytes[j + 3] & 255) | (bytes[j + 2] & 255) << 8 | (bytes[j + 1] & 255) << 16 | (bytes[j] & 255) << 24 : (bytes[j++] & 255) | (bytes[j++] & 255) << 8 | (bytes[j++] & 255) << 16 | (bytes[j++] & 255) << 24);
return ((n|0) ||n);
}, 1);

Clazz.newMeth(C$, 'intToSignedInt$I', function (n) {
return (n ||n);
}, 1);

Clazz.newMeth(C$, 'intToFloat$I', function (x) {
return Float.intBitsToFloat$I(x);
}, 1);

Clazz.newMeth(C$, 'bytesToDoubleToFloat$BA$I$Z', function (bytes, j, isBigEndian) {
{
if (C$.fracIEEE == null ) C$.setFracIEEE$();
{
var b1, b2, b3, b4, b5;
if (isBigEndian) { b1 = bytes[j] & 0xFF;
b2 = bytes[j + 1] & 0xFF;
b3 = bytes[j + 2] & 0xFF;
b4 = bytes[j + 3] & 0xFF;
b5 = bytes[j + 4] & 0xFF;
} else { b1 = bytes[j + 7] & 0xFF;
b2 = bytes[j + 6] & 0xFF;
b3 = bytes[j + 5] & 0xFF;
b4 = bytes[j + 4] & 0xFF;
b5 = bytes[j + 3] & 0xFF;
} var s = ((b1 & 0x80) == 0 ? 1 : -1);
var e = (((b1 & 0x7F) << 4) | (b2 >> 4)) - 1026;
b2 = (b2 & 0xF) | 0x10;
return s * (C$.shiftIEEE$D$I(b2, e) +C$.shiftIEEE$D$I(b3, e - 8) + C$.shiftIEEE$D$I(b4, e - 16) + C$.shiftIEEE$D$I(b5, e - 24));
}
}}, 1);

Clazz.newMeth(C$, 'setFracIEEE$', function () {
C$.fracIEEE=Clazz.array(Float.TYPE, [270]);
for (var i=0; i < 270; i++) C$.fracIEEE[i]=Math.pow(2, i - 141);

}, 1);

Clazz.newMeth(C$, 'shiftIEEE$D$I', function (f, i) {
if (f == 0  || i < -140 ) return 0;
if (i > 128) return 3.4028235E38;
return f * C$.fracIEEE[i + 140];
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

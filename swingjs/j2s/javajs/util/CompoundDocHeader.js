(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "CompoundDocHeader");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cd=null;
this.magicNumbers=null;
this.uniqueID16=null;
this.revNumber=0;
this.verNumber=0;
this.sectorPower=0;
this.shortSectorPower=0;
this.unused=null;
this.nSATsectors=0;
this.SID_DIR_start=0;
this.minBytesStandardStream=0;
this.SID_SSAT_start=0;
this.nSSATsectors=0;
this.SID_MSAT_next=0;
this.nAdditionalMATsectors=0;
this.MSAT0=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.magicNumbers=Clazz.array(Byte.TYPE, [8]);
this.uniqueID16=Clazz.array(Byte.TYPE, [16]);
this.unused=Clazz.array(Byte.TYPE, [10]);
this.MSAT0=Clazz.array(Integer.TYPE, [109]);
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_CompoundDocument', function (compoundDocument) {
C$.$init$.apply(this);
this.cd=compoundDocument;
}, 1);

Clazz.newMeth(C$, 'readData$', function () {
try {
this.cd.readByteArray$BA$I$I(this.magicNumbers, 0, 8);
if ((this.magicNumbers[0] & 255) != 208 || (this.magicNumbers[1] & 255) != 207  || (this.magicNumbers[2] & 255) != 17  || (this.magicNumbers[3] & 255) != 224  || (this.magicNumbers[4] & 255) != 161  || (this.magicNumbers[5] & 255) != 177  || (this.magicNumbers[6] & 255) != 26  || (this.magicNumbers[7] & 255) != 225 ) return false;
this.cd.readByteArray$BA$I$I(this.uniqueID16, 0, 16);
this.revNumber=($b$[0] = this.cd.readByte$(), $b$[0]);
this.cd.readByte$();
this.verNumber=($b$[0] = this.cd.readByte$(), $b$[0]);
this.cd.readByte$();
var b1=($b$[0] = this.cd.readByte$(), $b$[0]);
var b2=($b$[0] = this.cd.readByte$(), $b$[0]);
this.cd.isBigEndian=(b1 == -1 && b2 == -2 );
this.sectorPower=this.cd.readShort$();
this.shortSectorPower=this.cd.readShort$();
this.cd.readByteArray$BA$I$I(this.unused, 0, 10);
this.nSATsectors=this.cd.readInt$();
this.SID_DIR_start=this.cd.readInt$();
this.cd.readByteArray$BA$I$I(this.unused, 0, 4);
this.minBytesStandardStream=this.cd.readInt$();
this.SID_SSAT_start=this.cd.readInt$();
this.nSSATsectors=this.cd.readInt$();
this.SID_MSAT_next=this.cd.readInt$();
this.nAdditionalMATsectors=this.cd.readInt$();
for (var i=0; i < 109; i++) this.MSAT0[i]=this.cd.readInt$();

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
return false;
} else {
throw e;
}
}
return true;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

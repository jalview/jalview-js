(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.Deflate']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Deflater", null, 'swingjs.jzlib.ZStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.finished=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.finished=false;
}, 1);

Clazz.newMeth(C$, 'init$I$I$Z', function (level, bits, nowrap) {
if (bits == 0) bits=15;
this.finished=false;
this.setAdler32$();
this.dstate=Clazz.new_($I$(1).c$$swingjs_jzlib_ZStream,[this]);
this.dstate.deflateInit2$I$I(level, nowrap ? -bits : bits);
return this;
});

Clazz.newMeth(C$, 'deflate$I', function (flush) {
if (this.dstate == null ) {
return -2;
}var ret=this.dstate.deflate$I(flush);
if (ret == 1) this.finished=true;
return ret;
});

Clazz.newMeth(C$, 'end$', function () {
this.finished=true;
if (this.dstate == null ) return -2;
var ret=this.dstate.deflateEnd$();
this.dstate=null;
this.free$();
return ret;
});

Clazz.newMeth(C$, 'params$I$I', function (level, strategy) {
if (this.dstate == null ) return -2;
return this.dstate.deflateParams$I$I(level, strategy);
});

Clazz.newMeth(C$, 'setDictionary$BA$I', function (dictionary, dictLength) {
if (this.dstate == null ) return -2;
return this.dstate.deflateSetDictionary$BA$I(dictionary, dictLength);
});

Clazz.newMeth(C$, 'finished$', function () {
return this.finished;
});

Clazz.newMeth(C$, 'finish$', function () {
});

Clazz.newMeth(C$, 'getBytesRead$', function () {
return this.dstate.getBytesRead$();
});

Clazz.newMeth(C$, 'getBytesWritten$', function () {
return this.dstate.getBytesWritten$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

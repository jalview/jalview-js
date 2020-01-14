(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.Adler32']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ZStream");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next_in=null;
this.next_in_index=0;
this.avail_in=0;
this.total_in=0;
this.next_out=null;
this.next_out_index=0;
this.avail_out=0;
this.total_out=0;
this.msg=null;
this.dstate=null;
this.istate=null;
this.data_type=0;
this.checksum=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setAdler32$', function () {
this.checksum=Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'inflate$I', function (f) {
if (this.istate == null ) return -2;
return this.istate.inflate$I(f);
});

Clazz.newMeth(C$, 'deflate$I', function (flush) {
if (this.dstate == null ) {
return -2;
}return this.dstate.deflate$I(flush);
});

Clazz.newMeth(C$, 'flush_pending$', function () {
var len=this.dstate.pending;
if (len > this.avail_out) len=this.avail_out;
if (len == 0) return;
System.arraycopy$O$I$O$I$I(this.dstate.pending_buf, this.dstate.pending_out, this.next_out, this.next_out_index, len);
this.next_out_index+=len;
this.dstate.pending_out+=len;
this.total_out+=len;
this.avail_out-=len;
this.dstate.pending-=len;
if (this.dstate.pending == 0) {
this.dstate.pending_out=0;
}});

Clazz.newMeth(C$, 'read_buf$BA$I$I', function (buf, start, size) {
var len=this.avail_in;
if (len > size) len=size;
if (len == 0) return 0;
this.avail_in-=len;
if (this.dstate.wrap != 0) {
this.checksum.update$BA$I$I(this.next_in, this.next_in_index, len);
}System.arraycopy$O$I$O$I$I(this.next_in, this.next_in_index, buf, start, len);
this.next_in_index+=len;
this.total_in+=len;
return len;
});

Clazz.newMeth(C$, 'getAdler$', function () {
return this.checksum.getValue$();
});

Clazz.newMeth(C$, 'free$', function () {
this.next_in=null;
this.next_out=null;
this.msg=null;
});

Clazz.newMeth(C$, 'setOutput$BA$I$I', function (buf, off, len) {
this.next_out=buf;
this.next_out_index=off;
this.avail_out=len;
});

Clazz.newMeth(C$, 'setInput$BA$I$I$Z', function (buf, off, len, append) {
if (len <= 0 && append  && this.next_in != null  ) return;
if (this.avail_in > 0 && append ) {
var tmp=Clazz.array(Byte.TYPE, [this.avail_in + len]);
System.arraycopy$O$I$O$I$I(this.next_in, this.next_in_index, tmp, 0, this.avail_in);
System.arraycopy$O$I$O$I$I(buf, off, tmp, this.avail_in, len);
this.next_in=tmp;
this.next_in_index=0;
this.avail_in+=len;
} else {
this.next_in=buf;
this.next_in_index=off;
this.avail_in=len;
}});

Clazz.newMeth(C$, 'getAvailIn$', function () {
return this.avail_in;
});

Clazz.newMeth(C$, 'getTotalOut$', function () {
return this.total_out;
});

Clazz.newMeth(C$, 'getTotalIn$', function () {
return this.total_in;
});

Clazz.newMeth(C$, 'getBytes$S', function (s) {
try {
return s.getBytes$S("UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

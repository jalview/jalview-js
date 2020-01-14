(function(){var P$=java.io,p$1={},I$=[[0,'org.apache.harmony.luni.util.Msg','StringBuilder','java.util.stream.StreamSupport','java.util.Spliterators']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BufferedReader", null, 'java.io.Reader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$in=null;
this.buf=null;
this.marklimit=0;
this.count=0;
this.markpos=0;
this.pos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.marklimit=-1;
this.markpos=-1;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader', function ($in) {
C$.superclazz.c$$O.apply(this, [$in]);
C$.$init$.apply(this);
this.$in=$in;
this.buf=Clazz.array(Character.TYPE, [8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$I', function ($in, size) {
C$.superclazz.c$$O.apply(this, [$in]);
C$.$init$.apply(this);
if (size > 0) {
this.$in=$in;
this.buf=Clazz.array(Character.TYPE, [size]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("K0058")]);
}}, 1);

Clazz.newMeth(C$, 'close$', function () {
{
if (p$1.isOpen.apply(this, [])) {
this.$in.close$();
this.buf=null;
}}});

Clazz.newMeth(C$, 'fillbuf', function () {
if (this.markpos == -1 || (this.pos - this.markpos >= this.marklimit) ) {
var result=this.$in.read$CA$I$I(this.buf, 0, this.buf.length);
if (result > 0) {
this.markpos=-1;
this.pos=0;
this.count=result == -1 ? 0 : result;
}return result;
}if (this.markpos == 0 && this.marklimit > this.buf.length ) {
var newLength=this.buf.length * 2;
if (newLength > this.marklimit) {
newLength=this.marklimit;
}var newbuf=Clazz.array(Character.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.buf, 0, newbuf, 0, this.buf.length);
this.buf=newbuf;
} else if (this.markpos > 0) {
System.arraycopy$O$I$O$I$I(this.buf, this.markpos, this.buf, 0, this.buf.length - this.markpos);
}this.pos-=this.markpos;
this.count=this.markpos=0;
var charsread=this.$in.read$CA$I$I(this.buf, this.pos, this.buf.length - this.pos);
this.count=charsread == -1 ? this.pos : this.pos + charsread;
return charsread;
}, p$1);

Clazz.newMeth(C$, 'isOpen', function () {
return this.buf != null ;
}, p$1);

Clazz.newMeth(C$, 'mark$I', function (readlimit) {
if (readlimit >= 0) {
{
if (p$1.isOpen.apply(this, [])) {
this.marklimit=readlimit;
this.markpos=this.pos;
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}});

Clazz.newMeth(C$, 'markSupported$', function () {
return true;
});

Clazz.newMeth(C$, 'read$', function () {
{
if (p$1.isOpen.apply(this, [])) {
if (this.pos < this.count || p$1.fillbuf.apply(this, []) != -1 ) {
return this.buf[this.pos++].$c();
}return -1;
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}});

Clazz.newMeth(C$, 'read$CA$I$I', function (buffer, offset, length) {
{
if (!p$1.isOpen.apply(this, [])) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}if (offset < 0 || offset > buffer.length - length  || length < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (length == 0) {
return 0;
}var required;
if (this.pos < this.count) {
var copylength=this.count - this.pos >= length ? length : this.count - this.pos;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, buffer, offset, copylength);
this.pos+=copylength;
if (copylength == length || !this.$in.ready$() ) {
return copylength;
}offset+=copylength;
required=length - copylength;
} else {
required=length;
}while (true){
var read;
if (this.markpos == -1 && required >= this.buf.length ) {
read=this.$in.read$CA$I$I(buffer, offset, required);
if (read == -1) {
return required == length ? -1 : length - required;
}} else {
if (p$1.fillbuf.apply(this, []) == -1) {
return required == length ? -1 : length - required;
}read=this.count - this.pos >= required ? required : this.count - this.pos;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, buffer, offset, read);
this.pos+=read;
}required-=read;
if (required == 0) {
return length;
}if (!this.$in.ready$()) {
return length - required;
}offset+=read;
}
}});

Clazz.newMeth(C$, 'readLine$', function () {
{
if (p$1.isOpen.apply(this, [])) {
if ((this.pos >= this.count) && (p$1.fillbuf.apply(this, []) == -1) ) {
return null;
}for (var charPos=this.pos; charPos < this.count; charPos++) {
var ch=this.buf[charPos];
if (ch > "\r") continue;
if (ch == "\n") {
var res= String.instantialize(this.buf, this.pos, charPos - this.pos);
this.pos=charPos + 1;
return res;
} else if (ch == "\r") {
var res= String.instantialize(this.buf, this.pos, charPos - this.pos);
this.pos=charPos + 1;
if (((this.pos < this.count) || (p$1.fillbuf.apply(this, []) != -1) ) && (this.buf[this.pos] == "\n") ) {
this.pos++;
}return res;
}}
var eol="\u0000";
var result=Clazz.new_($I$(2).c$$I,[80]);
result.append$CA$I$I(this.buf, this.pos, this.count - this.pos);
this.pos=this.count;
while (true){
if (this.pos >= this.count) {
if (eol == "\n") {
return result.toString();
}if (p$1.fillbuf.apply(this, []) == -1) {
return result.length$() > 0 || eol != "\u0000"  ? result.toString() : null;
}}for (var charPos=this.pos; charPos < this.count; charPos++) {
if (eol == "\u0000") {
if ((this.buf[charPos] == "\n" || this.buf[charPos] == "\r" )) {
eol=this.buf[charPos];
}} else if (eol == "\r" && (this.buf[charPos] == "\n") ) {
if (charPos > this.pos) {
result.append$CA$I$I(this.buf, this.pos, charPos - this.pos - 1 );
}this.pos=charPos + 1;
return result.toString();
} else if (eol != "\u0000") {
if (charPos > this.pos) {
result.append$CA$I$I(this.buf, this.pos, charPos - this.pos - 1 );
}this.pos=charPos;
return result.toString();
}}
if (eol == "\u0000") {
result.append$CA$I$I(this.buf, this.pos, this.count - this.pos);
} else {
result.append$CA$I$I(this.buf, this.pos, this.count - this.pos - 1 );
}this.pos=this.count;
}
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}});

Clazz.newMeth(C$, 'ready$', function () {
{
if (p$1.isOpen.apply(this, [])) {
return ((this.count - this.pos) > 0) || this.$in.ready$() ;
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}});

Clazz.newMeth(C$, 'reset$', function () {
{
if (p$1.isOpen.apply(this, [])) {
if (this.markpos != -1) {
this.pos=this.markpos;
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005c")]);
}} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}}});

Clazz.newMeth(C$, 'skip$J', function (amount) {
if (amount >= 0) {
{
if (p$1.isOpen.apply(this, [])) {
if (amount < 1) {
return 0;
}if (this.count - this.pos >= amount) {
this.pos+=amount;
return amount;
}var read=this.count - this.pos;
this.pos=this.count;
while (read < amount){
if (p$1.fillbuf.apply(this, []) == -1) {
return read;
}if (this.count - this.pos >= amount - read) {
this.pos+=amount - read;
return amount;
}read+=(this.count - this.pos);
this.pos=this.count;
}
return amount;
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005b")]);
}}throw Clazz.new_(Clazz.load('IllegalArgumentException'));
});

Clazz.newMeth(C$, 'lines$', function () {
var iter=((P$.BufferedReader$1||
(function(){var C$=Clazz.newClass(P$, "BufferedReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nextLine=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nextLine=null;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.nextLine != null ) {
return true;
} else {
try {
this.nextLine=this.b$['java.io.BufferedReader'].readLine$.apply(this.b$['java.io.BufferedReader'], []);
return (this.nextLine != null );
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'next$', function () {
if (this.nextLine != null  || this.hasNext$() ) {
var line=this.nextLine;
this.nextLine=null;
return line;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});
})()
), Clazz.new_(P$.BufferedReader$1.$init$, [this, null]));
return $I$(3).stream$java_util_Spliterator$Z($I$(4).spliteratorUnknownSize$java_util_Iterator$I(iter, 272), false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

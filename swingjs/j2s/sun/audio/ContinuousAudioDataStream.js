(function(){var P$=Clazz.newPackage("sun.audio"),I$=[];
var C$=Clazz.newClass(P$, "ContinuousAudioDataStream", null, 'sun.audio.AudioDataStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$sun_audio_AudioData', function (data) {
C$.superclazz.c$$sun_audio_AudioData.apply(this, [data]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'read$', function () {
var i=C$.superclazz.prototype.read$.apply(this, []);
if (i == -1) {
this.reset$();
i=C$.superclazz.prototype.read$.apply(this, []);
}return i;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (ab, i1, j) {
var k;
for (k=0; k < j; ) {
var i2=C$.superclazz.prototype.read$BA$I$I.apply(this, [ab, i1 + k, j - k]);
if (i2 >= 0) k+=i2;
 else this.reset$();
}
return k;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.util.regex.Pattern','sun.security.util.Debug','sun.security.provider.SecureRandom','sun.security.jca.Providers','sun.security.jca.GetInstance','java.security.SecureRandomSpi','java.security.AccessController','java.security.Security',['java.security.SecureRandom','.StrongPatternHolder']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecureRandom", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Random');
C$.$classes$=[['StrongPatternHolder',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.provider=null;
this.secureRandomSpi=null;
this.digest=null;
},1);

C$.$fields$=[['I',['randomBytesUsed'],'J',['counter'],'S',['algorithm'],'O',['provider','java.security.Provider','secureRandomSpi','java.security.SecureRandomSpi','state','byte[]','digest','java.security.MessageDigest','randomBytes','byte[]']]
,['Z',['skipDebug'],'O',['pdebug','sun.security.util.Debug','seedGenerator','java.security.SecureRandom']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$J.apply(this,[0]);C$.$init$.apply(this);
p$1.getDefaultPRNG$Z$BA.apply(this, [false, null]);
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (seed) {
;C$.superclazz.c$$J.apply(this,[0]);C$.$init$.apply(this);
p$1.getDefaultPRNG$Z$BA.apply(this, [true, seed]);
}, 1);

Clazz.newMeth(C$, 'getDefaultPRNG$Z$BA', function (setSeed, seed) {
var prng=C$.getPrngAlgorithm$();
if (prng == null ) {
prng="SHA1PRNG";
this.secureRandomSpi=Clazz.new_($I$(3,1));
this.provider=$I$(4).getSunProvider$();
if (setSeed) {
this.secureRandomSpi.engineSetSeed$BA(seed);
}} else {
try {
var random=C$.getInstance$S(prng);
this.secureRandomSpi=random.getSecureRandomSpi$();
this.provider=random.getProvider$();
if (setSeed) {
this.secureRandomSpi.engineSetSeed$BA(seed);
}} catch (nsae) {
if (Clazz.exceptionOf(nsae,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[nsae]);
} else {
throw nsae;
}
}
}if (this.getClass$() === Clazz.getClass(C$) ) {
this.algorithm=prng;
}}, p$1);

Clazz.newMeth(C$, 'c$$java_security_SecureRandomSpi$java_security_Provider', function (secureRandomSpi, provider) {
C$.c$$java_security_SecureRandomSpi$java_security_Provider$S.apply(this, [secureRandomSpi, provider, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_SecureRandomSpi$java_security_Provider$S', function (secureRandomSpi, provider, algorithm) {
;C$.superclazz.c$$J.apply(this,[0]);C$.$init$.apply(this);
this.secureRandomSpi=secureRandomSpi;
this.provider=provider;
this.algorithm=algorithm;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("SecureRandom." + algorithm + " algorithm from: " + this.provider.getName$() );
}}, 1);

Clazz.newMeth(C$, 'getInstance$S', function (algorithm) {
var instance=$I$(5,"getInstance$S$Class$S",["SecureRandom", Clazz.getClass($I$(6)), algorithm]);
return Clazz.new_(C$.c$$java_security_SecureRandomSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S', function (algorithm, provider) {
var instance=$I$(5,"getInstance$S$Class$S$S",["SecureRandom", Clazz.getClass($I$(6)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_SecureRandomSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider', function (algorithm, provider) {
var instance=$I$(5,"getInstance$S$Class$S$java_security_Provider",["SecureRandom", Clazz.getClass($I$(6)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_SecureRandomSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getSecureRandomSpi$', function () {
return this.secureRandomSpi;
});

Clazz.newMeth(C$, 'getProvider$', function () {
return this.provider;
});

Clazz.newMeth(C$, 'getAlgorithm$', function () {
return (this.algorithm != null ) ? this.algorithm : "unknown";
});

Clazz.newMeth(C$, 'setSeed$BA', function (seed) {
this.secureRandomSpi.engineSetSeed$BA(seed);
});

Clazz.newMeth(C$, 'setSeed$J', function (seed) {
if (seed != 0) {
this.secureRandomSpi.engineSetSeed$BA(C$.longToByteArray$J(seed));
}});

Clazz.newMeth(C$, 'nextBytes$BA', function (bytes) {
this.secureRandomSpi.engineNextBytes$BA(bytes);
});

Clazz.newMeth(C$, 'next$I', function (numBits) {
var numBytes=((numBits + 7)/8|0);
var b=Clazz.array(Byte.TYPE, [numBytes]);
var next=0;
this.nextBytes$BA(b);
for (var i=0; i < numBytes; i++) {
next=(next << 8) + (b[i] & 255);
}
return next >>> (numBytes * 8 - numBits);
});

Clazz.newMeth(C$, 'getSeed$I', function (numBytes) {
if (C$.seedGenerator == null ) {
C$.seedGenerator=Clazz.new_(C$);
}return C$.seedGenerator.generateSeed$I(numBytes);
}, 1);

Clazz.newMeth(C$, 'generateSeed$I', function (numBytes) {
return this.secureRandomSpi.engineGenerateSeed$I(numBytes);
});

Clazz.newMeth(C$, 'longToByteArray$J', function (l) {
var retVal=Clazz.array(Byte.TYPE, [8]);
for (var i=0; i < 8; i++) {
retVal[i]=(l|0);
l>>=8;
}
return retVal;
}, 1);

Clazz.newMeth(C$, 'getPrngAlgorithm$', function () {
for (var p, $p = $I$(4).getProviderList$().providers$().iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
for (var s, $s = p.getServices$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
if (s.getType$().equals$O("SecureRandom")) {
return s.getAlgorithm$();
}}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getInstanceStrong$', function () {
var property=$I$(7,"doPrivileged$java_security_PrivilegedAction",[((P$.SecureRandom$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecureRandom$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
return $I$(8).getProperty$S("securerandom.strongAlgorithms");
});
})()
), Clazz.new_(P$.SecureRandom$1.$init$,[this, null]))]);
if ((property == null ) || (property.length$() == 0) ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["Null/empty securerandom.strongAlgorithms Security Property"]);
}var remainder=property;
while (remainder != null ){
var m;
if ((m=$I$(9).pattern.matcher$CharSequence(remainder)).matches$()) {
var alg=m.group$I(1);
var prov=m.group$I(3);
try {
if (prov == null ) {
return C$.getInstance$S(alg);
} else {
return C$.getInstance$S$S(alg, prov);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException") || Clazz.exceptionOf(e,"java.security.NoSuchProviderException")){
} else {
throw e;
}
}
remainder=m.group$I(5);
} else {
remainder=null;
}}
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["No strong SecureRandom impls available: " + property]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.pdebug=$I$(2).getInstance$S$S("provider", "Provider");
C$.skipDebug=$I$(2,"isOn$S",["engine="]) && !$I$(2).isOn$S("securerandom") ;
C$.seedGenerator=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SecureRandom, "StrongPatternHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['pattern','java.util.regex.Pattern']]]

C$.$static$=function(){C$.$static$=0;
C$.pattern=$I$(1,"compile$S",["\\s*([\\S&&[^:,]]*)(\\:([\\S&&[^,]]*))?\\s*(\\,(.*))?"]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

(function(){var P$=Clazz.newPackage("jalview.json.binding.biojs"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Objects','jalview.util.JSONUtils','jalview.json.binding.biojs.BioJSReleasePojo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BioJSRepositoryPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
this.latestReleaseVersion=null;
this.releases=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.releases=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (jsonString) {
C$.$init$.apply(this);
try {
p$1.parse$S.apply(this, [jsonString]);
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$S', function (jsonString) {
$I$(2).requireNonNull$TT$S(jsonString, "Supplied jsonString must not be null");
var JsonObj=$I$(3).parse$S(jsonString);
this.description=JsonObj.get$O("description");
this.latestReleaseVersion=JsonObj.get$O("latestReleaseVersion");
var repositoriesJsonArray=JsonObj.get$O("releases");
for (var repoIter=repositoriesJsonArray.iterator$(); repoIter.hasNext$(); ) {
var repoObj=repoIter.next$();
var repo=Clazz.new_($I$(4));
repo.setType$S(repoObj.get$O("type"));
repo.setUrl$S(repoObj.get$O("url"));
repo.setVersion$S(repoObj.get$O("version"));
this.getReleases$().add$TE(repo);
}
}, p$1);

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getLatestReleaseVersion$', function () {
return this.latestReleaseVersion;
});

Clazz.newMeth(C$, 'setLatestReleaseVersion$S', function (latestReleaseVersion) {
this.latestReleaseVersion=latestReleaseVersion;
});

Clazz.newMeth(C$, 'getReleases$', function () {
return this.releases;
});

Clazz.newMeth(C$, 'setReleases$java_util_Collection', function (releases) {
this.releases=releases;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

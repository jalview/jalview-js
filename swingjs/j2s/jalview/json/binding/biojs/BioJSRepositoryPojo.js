(function(){var P$=Clazz.newPackage("jalview.json.binding.biojs"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Objects','jalview.util.JSONUtils','jalview.json.binding.biojs.BioJSReleasePojo']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BioJSRepositoryPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.releases=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['description','latestReleaseVersion'],'O',['releases','java.util.Collection']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (jsonString) {
;C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'parse$S',  function (jsonString) {
$I$(2).requireNonNull$O$S(jsonString, "Supplied jsonString must not be null");
var JsonObj=$I$(3).parse$S(jsonString);
this.description=JsonObj.get$O("description");
this.latestReleaseVersion=JsonObj.get$O("latestReleaseVersion");
var repositoriesJsonArray=JsonObj.get$O("releases");
for (var repoIter=repositoriesJsonArray.iterator$(); repoIter.hasNext$(); ) {
var repoObj=repoIter.next$();
var repo=Clazz.new_($I$(4,1));
repo.setType$S(repoObj.get$O("type"));
repo.setUrl$S(repoObj.get$O("url"));
repo.setVersion$S(repoObj.get$O("version"));
this.getReleases$().add$O(repo);
}
}, p$1);

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getLatestReleaseVersion$',  function () {
return this.latestReleaseVersion;
});

Clazz.newMeth(C$, 'setLatestReleaseVersion$S',  function (latestReleaseVersion) {
this.latestReleaseVersion=latestReleaseVersion;
});

Clazz.newMeth(C$, 'getReleases$',  function () {
return this.releases;
});

Clazz.newMeth(C$, 'setReleases$java_util_Collection',  function (releases) {
this.releases=releases;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1

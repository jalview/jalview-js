(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequencePojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['order','start','end'],'S',['seq','name','type','id']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S$S$S', function (start, end, id, name, seq) {
;C$.$init$.apply(this);
this.id=id;
this.name=name;
this.seq=seq;
}, 1);

Clazz.newMeth(C$, 'getSeq$', function () {
return this.seq;
});

Clazz.newMeth(C$, 'setSeq$S', function (seq) {
this.seq=seq;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (start) {
this.start=start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (end) {
this.end=end;
});

Clazz.newMeth(C$, 'getOrder$', function () {
return this.order;
});

Clazz.newMeth(C$, 'setOrder$I', function (order) {
this.order=order;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
this.type=type;
});
C$.$getAnn$ = function(){ return [
[['seq','String',null,['com.github.reinert.jjschema.Attributes']],['required="true" minLength="3" maxLength="2147483647" description="Sequence residue characters. An aligned sequence may contain <br>one of the following gap characters &#x201c;.&#x201d;, &#x201c;-&#x201d; or &#x201c;&nbsp;&#x201d;" ']],
  [['name','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="Sequence name" ']],
  [['type','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Sequence type" enums={"DNA"  "RNA"  "Protein"  } ']],
  [['id','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="Unique identifier for a given Sequence" ']],
  [['order','int',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="The order/position of a sequence in the alignment space" ']],
  [['start','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="The index of the sequence’s first residue in its source database, <br>using a one-based numbering index system" ']],
  [['end','.',null,['com.github.reinert.jjschema.Attributes']],['required="true" description="The index of the sequence’s last residue in its source database, <br>using a one-based numbering index system" ']],
  [['M:getSeq','String'],['@XmlElement']],
  [['M:getName','String'],['@XmlElement']],
  [['M:getId','String'],['@XmlElement']],
  [['M:getStart','int'],['@XmlElement']],
  [['M:getEnd','int'],['@XmlElement']],
  [['M:getOrder','int'],['@XmlElement']],
  [['M:getType','String'],['@XmlElement']]]}
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1

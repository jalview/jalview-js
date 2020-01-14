(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'jalview.util.Comparison','jalview.datamodel.features.SequenceFeatures','jalview.datamodel.DBRefEntry','jalview.datamodel.SequenceFeature','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.PDBEntry','java.util.Vector','StringBuffer','java.util.Arrays','jalview.datamodel.Mapping','jalview.datamodel.SequenceCursor','jalview.datamodel.Range','jalview.analysis.AlignSeq','java.util.BitSet','java.util.ArrayList','jalview.util.StringUtils',['jalview.datamodel.Sequence','.DBModList'],'java.util.Collections','jalview.util.DBRefUtils','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Sequence", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.datamodel.ASequence', 'jalview.datamodel.SequenceI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.datasetSequence=null;
this.name=null;
this.sequence=null;
this.description=null;
this.start=0;
this.end=0;
this.pdbIds=null;
this.vamsasId=null;
this.dbrefs=null;
this.refModCount=0;
this.rna=null;
this.annotation=null;
this.sequenceFeatureStore=null;
this.cursor=null;
this.changeCount=0;
this._isNa=false;
this._seqhash=0;
this.primaryRefs=null;
this.tmpList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.refModCount=0;
this._seqhash=0;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$I', function (name, sequence, start, end) {
C$.c$.apply(this, []);
this.initSeqAndName$S$CA$I$I(name, sequence.toCharArray$(), start, end);
}, 1);

Clazz.newMeth(C$, 'c$$S$CA$I$I', function (name, sequence, start, end) {
C$.c$.apply(this, []);
this.initSeqAndName$S$CA$I$I(name, sequence, start, end);
}, 1);

Clazz.newMeth(C$, 'initSeqAndName$S$CA$I$I', function (name2, sequence2, start2, end2) {
this.name=name2;
this.sequence=sequence2;
this.start=start2;
this.end=end2;
this.parseId$();
this.checkValidRange$();
});

Clazz.newMeth(C$, 'parseId$', function () {
if (this.name == null ) {
System.err.println$S("POSSIBLE IMPLEMENTATION ERROR: null sequence name passed to constructor.");
this.name="";
}var slashPos=this.name.lastIndexOf$I("/");
if (slashPos > -1 && slashPos < this.name.length$() - 1 ) {
var suffix=this.name.substring$I(slashPos + 1);
var range=suffix.split$S("-");
if (range.length == 2) {
try {
var from=(Integer.valueOf$S(range[0])).intValue$();
var to=(Integer.valueOf$S(range[1])).intValue$();
if (from > 0 && to >= from ) {
this.name=this.name.substring$I$I(0, slashPos);
this.setStart$I(from);
this.setEnd$I(to);
this.checkValidRange$();
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}}});

Clazz.newMeth(C$, 'checkValidRange$', function () {
{
var endRes=0;
for (var j=0; j < this.sequence.length; j++) {
if (!$I$(1).isGap$C(this.sequence[j])) {
endRes++;
}}
if (endRes > 0) {
endRes+=this.start - 1;
}if (this.end < endRes) {
this.end=endRes;
}}});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.sequenceFeatureStore=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, sequence) {
C$.c$$S$S$I$I.apply(this, [name, sequence, 1, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI', function (seq) {
C$.c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA.apply(this, [seq, seq.getAnnotation$()]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA', function (seq, alAnnotation) {
C$.c$.apply(this, []);
this.initSeqFrom$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA(seq, alAnnotation);
}, 1);

Clazz.newMeth(C$, 'initSeqFrom$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA', function (seq, alAnnotation) {
var oseq=seq.getSequence$();
this.initSeqAndName$S$CA$I$I(seq.getName$(), oseq, seq.getStart$(), seq.getEnd$());
this.description=seq.getDescription$();
if (seq !== this.datasetSequence ) {
this.setDatasetSequence$jalview_datamodel_SequenceI(seq.getDatasetSequence$());
}if (this.datasetSequence == null ) {
var dbr=seq.getDBRefs$();
if (dbr != null ) {
for (var i=0, n=dbr.size$(); i < n; i++) {
this.addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_($I$(3).c$$jalview_api_DBRefEntryI,[dbr.get$I(i)]));
}
}for (var sf, $sf = seq.getSequenceFeatures$().iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
this.addSequenceFeature$jalview_datamodel_SequenceFeature(Clazz.new_($I$(4).c$$jalview_datamodel_SequenceFeature,[sf]));
}
}if (seq.getAnnotation$() != null ) {
var sqann=seq.getAnnotation$();
for (var i=0; i < sqann.length; i++) {
if (sqann[i] == null ) {
continue;
}var found=(alAnnotation == null );
if (!found) {
for (var apos=0; !found && apos < alAnnotation.length ; apos++) {
found=(alAnnotation[apos] === sqann[i] );
}
}if (found) {
var newann=Clazz.new_($I$(5).c$$jalview_datamodel_AlignmentAnnotation,[sqann[i]]);
this.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(newann);
}}
}if (seq.getAllPDBEntries$() != null ) {
var ids=seq.getAllPDBEntries$();
for (var pdb, $pdb = ids.iterator$(); $pdb.hasNext$()&&((pdb=($pdb.next$())),1);) {
this.addPDBId$jalview_datamodel_PDBEntry(Clazz.new_($I$(6).c$$jalview_datamodel_PDBEntry,[pdb]));
}
}});

Clazz.newMeth(C$, 'setSequenceFeatures$java_util_List', function (features) {
if (this.datasetSequence != null ) {
this.datasetSequence.setSequenceFeatures$java_util_List(features);
return;
}this.sequenceFeatureStore=Clazz.new_($I$(2).c$$java_util_List,[features]);
});

Clazz.newMeth(C$, 'addSequenceFeature$jalview_datamodel_SequenceFeature', function (sf) {
if (sf.getType$() == null ) {
System.err.println$S("SequenceFeature type may not be null: " + sf.toString());
return false;
}if (this.datasetSequence != null ) {
return this.datasetSequence.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}return this.sequenceFeatureStore.add$jalview_datamodel_SequenceFeature(sf);
});

Clazz.newMeth(C$, 'deleteFeature$jalview_datamodel_SequenceFeature', function (sf) {
if (this.datasetSequence != null ) {
this.datasetSequence.deleteFeature$jalview_datamodel_SequenceFeature(sf);
} else {
this.sequenceFeatureStore.delete$jalview_datamodel_SequenceFeature(sf);
}});

Clazz.newMeth(C$, 'getSequenceFeatures$', function () {
if (this.datasetSequence != null ) {
return this.datasetSequence.getSequenceFeatures$();
}return this.sequenceFeatureStore.getAllFeatures$SA([]);
});

Clazz.newMeth(C$, 'getFeatures$', function () {
return this.datasetSequence != null  ? this.datasetSequence.getFeatures$() : this.sequenceFeatureStore;
});

Clazz.newMeth(C$, 'addPDBId$jalview_datamodel_PDBEntry', function (entry) {
if (this.pdbIds == null ) {
this.pdbIds=Clazz.new_($I$(7));
this.pdbIds.add$TE(entry);
return true;
}for (var pdbe, $pdbe = this.pdbIds.iterator$(); $pdbe.hasNext$()&&((pdbe=($pdbe.next$())),1);) {
if (pdbe.updateFrom$jalview_datamodel_PDBEntry(entry)) {
return false;
}}
this.pdbIds.addElement$TE(entry);
return true;
});

Clazz.newMeth(C$, 'setPDBId$java_util_Vector', function (id) {
this.pdbIds=id;
});

Clazz.newMeth(C$, 'getAllPDBEntries$', function () {
return this.pdbIds == null  ? Clazz.new_($I$(7)) : this.pdbIds;
});

Clazz.newMeth(C$, 'getDisplayId$Z', function (jvsuffix) {
var result=Clazz.new_($I$(8).c$$S,[this.name]);
if (jvsuffix) {
result.append$S("/" + this.start + "-" + this.end );
}return result.toString();
});

Clazz.newMeth(C$, 'setName$S', function (theName) {
this.name=theName;
this.parseId$();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setStart$I', function (start) {
this.start=start;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setEnd$I', function (end) {
this.end=end;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.sequence.length;
});

Clazz.newMeth(C$, 'setSequence$S', function (seq) {
this.sequence=seq.toCharArray$();
this.checkValidRange$();
this.sequenceChanged$();
});

Clazz.newMeth(C$, 'getSequenceAsString$', function () {
return  String.instantialize(this.sequence);
});

Clazz.newMeth(C$, 'getSequenceAsString$I$I', function (start, end) {
return  String.instantialize(this.getSequence$I$I(start, end));
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence == null  ? null : $I$(9).copyOf$CA$I(this.sequence, this.sequence.length);
});

Clazz.newMeth(C$, 'getSequence$I$I', function (start, end) {
if (start < 0) {
start=0;
}if (start >= this.sequence.length) {
return Clazz.array(Character.TYPE, [0]);
}if (end >= this.sequence.length) {
end=this.sequence.length;
}var reply=Clazz.array(Character.TYPE, [end - start]);
System.arraycopy$O$I$O$I$I(this.sequence, start, reply, 0, end - start);
return reply;
});

Clazz.newMeth(C$, 'getSubSequence$I$I', function (start, end) {
if (start < 0) {
start=0;
}var seq=this.getSequence$I$I(start, end);
if (seq.length == 0) {
return null;
}var nstart=this.findPosition$I(start);
var nend=this.findPosition$I(end) - 1;
var nseq=Clazz.new_(C$.c$$S$CA$I$I,[this.getName$(), seq, nstart, nend]);
nseq.setDescription$S(this.description);
if (this.datasetSequence != null ) {
nseq.setDatasetSequence$jalview_datamodel_SequenceI(this.datasetSequence);
} else {
nseq.setDatasetSequence$jalview_datamodel_SequenceI(this);
}return nseq;
});

Clazz.newMeth(C$, 'getCharAt$I', function (i) {
if (i >= 0 && i < this.sequence.length ) {
return this.sequence[i];
} else {
return " ";
}});

Clazz.newMeth(C$, 'setDescription$S', function (desc) {
this.description=desc;
});

Clazz.newMeth(C$, 'setGeneLoci$S$S$S$jalview_util_MapList', function (speciesId, assemblyId, chromosomeId, map) {
this.addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_($I$(3).c$$S$S$S$jalview_datamodel_Mapping,[speciesId, assemblyId, "chromosome" + ":" + chromosomeId , Clazz.new_($I$(10).c$$jalview_util_MapList,[map])]));
});

Clazz.newMeth(C$, 'getGeneLoci$', function () {
var refs=this.getDBRefs$();
if (refs != null ) {
for (var ref, $ref = refs.iterator$(); $ref.hasNext$()&&((ref=($ref.next$())),1);) {
if (ref.isChromosome$()) {
return ((P$.Sequence$1||
(function(){var C$=Clazz.newClass(P$, "Sequence$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.datamodel.GeneLociI', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSpeciesId$', function () {
return this.$finals$.ref.getSource$();
});

Clazz.newMeth(C$, 'getAssemblyId$', function () {
return this.$finals$.ref.getVersion$();
});

Clazz.newMeth(C$, 'getChromosomeId$', function () {
return this.$finals$.ref.getAccessionId$().substring$I("chromosome".length$() + 1);
});

Clazz.newMeth(C$, 'getMap$', function () {
return this.$finals$.ref.getMap$().getMap$();
});
})()
), Clazz.new_(P$.Sequence$1.$init$, [this, {ref: ref}]));
}}
}return null;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'findIndex$I', function (pos) {
if (this.isValidCursor$jalview_datamodel_SequenceCursor(this.cursor)) {
return this.findIndex$I$jalview_datamodel_SequenceCursor(pos, this.cursor);
}var j=this.start;
var i=0;
var startColumn=0;
while ((i < this.sequence.length) && (j <= this.end) && (j <= pos)  ){
if (!$I$(1).isGap$C(this.sequence[i])) {
if (j == this.start) {
startColumn=i;
}j++;
}i++;
}
if (j == this.end && j < pos ) {
return this.end + 1;
}this.updateCursor$I$I$I(pos, i, startColumn);
return i;
});

Clazz.newMeth(C$, 'updateCursor$I$I$I', function (residuePos, column, startColumn) {
var endColumn=this.isValidCursor$jalview_datamodel_SequenceCursor(this.cursor) ? this.cursor.lastColumnPosition : 0;
if (residuePos == this.end) {
endColumn=column;
}this.cursor=Clazz.new_($I$(11).c$$jalview_datamodel_SequenceI$I$I$I$I$I,[this, residuePos, column, startColumn, endColumn, this.changeCount]);
});

Clazz.newMeth(C$, 'findIndex$I$jalview_datamodel_SequenceCursor', function (pos, curs) {
if (!this.isValidCursor$jalview_datamodel_SequenceCursor(curs)) {
return this.findIndex$I(pos);
}if (curs.residuePosition == pos) {
return curs.columnPosition;
}var col=curs.columnPosition - 1;
var newPos=curs.residuePosition;
var delta=newPos > pos ? -1 : 1;
while (newPos != pos){
col+=delta;
if (col < 0) {
break;
}if (col == this.sequence.length) {
col--;
break;
}if (!$I$(1).isGap$C(this.sequence[col])) {
newPos+=delta;
}}
col++;
if (newPos == pos) {
this.updateCursor$I$I$I(pos, col, curs.firstColumnPosition);
}return col;
});

Clazz.newMeth(C$, 'findPosition$I', function (column) {
if (this.isValidCursor$jalview_datamodel_SequenceCursor(this.cursor)) {
return this.findPosition$I$jalview_datamodel_SequenceCursor(column + 1, this.cursor);
}var firstResidueColumn=0;
var lastPosFound=0;
var lastPosFoundColumn=0;
var seqlen=this.sequence.length;
if (seqlen > 0 && !$I$(1).isGap$C(this.sequence[0]) ) {
lastPosFound=this.start;
lastPosFoundColumn=0;
}var j=0;
var pos=this.start;
while (j < column && j < seqlen ){
if (!$I$(1).isGap$C(this.sequence[j])) {
lastPosFound=pos;
lastPosFoundColumn=j;
if (pos == this.start) {
firstResidueColumn=j;
}pos++;
}j++;
}
if (j < seqlen && !$I$(1).isGap$C(this.sequence[j]) ) {
lastPosFound=pos;
lastPosFoundColumn=j;
if (pos == this.start) {
firstResidueColumn=j;
}}if (lastPosFound != 0) {
this.updateCursor$I$I$I(lastPosFound, lastPosFoundColumn + 1, firstResidueColumn + 1);
}return pos;
});

Clazz.newMeth(C$, 'isValidCursor$jalview_datamodel_SequenceCursor', function (curs) {
if (curs == null  || curs.sequence !== this   || curs.token != this.changeCount ) {
return false;
}if (curs.columnPosition < 0 || curs.columnPosition > this.sequence.length ) {
return false;
}if (curs.residuePosition < this.start || curs.residuePosition > this.end ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'findPosition$I$jalview_datamodel_SequenceCursor', function (col, curs) {
if (!this.isValidCursor$jalview_datamodel_SequenceCursor(curs)) {
return this.findPosition$I(col - 1);
}if (curs.columnPosition == col) {
this.cursor=curs;
return curs.residuePosition;
}if (curs.lastColumnPosition > 0 && curs.lastColumnPosition < col ) {
return this.end + 1;
}if (curs.firstColumnPosition > 0 && curs.firstColumnPosition > col ) {
return this.start;
}var firstResidueColumn=curs.firstColumnPosition;
var column=curs.columnPosition - 1;
var newPos=curs.residuePosition;
var delta=curs.columnPosition > col ? -1 : 1;
var gapped=false;
var lastFoundPosition=curs.residuePosition;
var lastFoundPositionColumn=curs.columnPosition;
while (column != col - 1){
column+=delta;
if (column < 0 || column == this.sequence.length ) {
break;
}gapped=$I$(1).isGap$C(this.sequence[column]);
if (!gapped) {
newPos+=delta;
lastFoundPosition=newPos;
lastFoundPositionColumn=column + 1;
if (lastFoundPosition == this.start) {
firstResidueColumn=column + 1;
}}}
if (this.cursor == null  || lastFoundPosition != this.cursor.residuePosition ) {
this.updateCursor$I$I$I(lastFoundPosition, lastFoundPositionColumn, firstResidueColumn);
}if (delta > 0 && (gapped || column >= this.sequence.length ) ) {
newPos++;
}return newPos;
});

Clazz.newMeth(C$, 'findPositions$I$I', function (fromColumn, toColumn) {
if (toColumn < fromColumn || fromColumn < 1 ) {
return null;
}var firstPosition=0;
var col=fromColumn - 1;
var length=this.sequence.length;
while (col < length && col < toColumn ){
if (!$I$(1).isGap$C(this.sequence[col])) {
firstPosition=this.findPosition$I(col++);
break;
}col++;
}
if (firstPosition == 0) {
return null;
}var lastPosition=firstPosition;
while (col < length && col < toColumn ){
if (!$I$(1).isGap$C(this.sequence[col++])) {
lastPosition++;
}}
return Clazz.new_($I$(12).c$$I$I,[firstPosition, lastPosition]);
});

Clazz.newMeth(C$, 'gapMap$', function () {
var seq=$I$(13).extractGaps$S$S($I$(1).GapChars,  String.instantialize(this.sequence));
var map=Clazz.array(Integer.TYPE, [seq.length$()]);
var j=0;
var p=0;
while (j < this.sequence.length){
if (!$I$(1).isGap$C(this.sequence[j])) {
map[p++]=j;
}j++;
}
return map;
});

Clazz.newMeth(C$, 'gapBitset$', function () {
var gaps=Clazz.new_($I$(14).c$$I,[this.sequence.length]);
var j=0;
while (j < this.sequence.length){
if ($I$(1).isGap$C(this.sequence[j])) {
gaps.set$I(j);
}j++;
}
return gaps;
});

Clazz.newMeth(C$, 'findPositionMap$', function () {
var map=Clazz.array(Integer.TYPE, [this.sequence.length]);
var j=0;
var pos=this.start;
var seqlen=this.sequence.length;
while ((j < seqlen)){
map[j]=pos;
if (!$I$(1).isGap$C(this.sequence[j])) {
pos++;
}j++;
}
return map;
});

Clazz.newMeth(C$, 'getInsertions$', function () {
var map=Clazz.new_($I$(15));
var lastj=-1;
var j=0;
var seqlen=this.sequence.length;
while ((j < seqlen)){
if ($I$(1).isGap$C(this.sequence[j])) {
if (lastj == -1) {
lastj=j;
}} else {
if (lastj != -1) {
map.add$TE(Clazz.array(Integer.TYPE, -1, [lastj, j - 1]));
lastj=-1;
}}j++;
}
if (lastj != -1) {
map.add$TE(Clazz.array(Integer.TYPE, -1, [lastj, j - 1]));
lastj=-1;
}return map;
});

Clazz.newMeth(C$, 'getInsertionsAsBits$', function () {
var map=Clazz.new_($I$(14));
var lastj=-1;
var j=0;
var seqlen=this.sequence.length;
while ((j < seqlen)){
if ($I$(1).isGap$C(this.sequence[j])) {
if (lastj == -1) {
lastj=j;
}} else {
if (lastj != -1) {
map.set$I$I(lastj, j);
lastj=-1;
}}j++;
}
if (lastj != -1) {
map.set$I$I(lastj, j);
lastj=-1;
}return map;
});

Clazz.newMeth(C$, 'deleteChars$I$I', function (i, j) {
var newstart=this.start;
var newend=this.end;
if (i >= this.sequence.length || i < 0 ) {
return;
}var tmp=$I$(16).deleteChars$CA$I$I(this.sequence, i, j);
var createNewDs=false;
var startIndex=this.findIndex$I(this.start) - 1;
var endIndex=this.findIndex$I(this.end) - 1;
var startDeleteColumn=-1;
var deleteCount=0;
for (var s=i; s < j && s < this.sequence.length ; s++) {
if ($I$(1).isGap$C(this.sequence[s])) {
continue;
}deleteCount++;
if (startDeleteColumn == -1) {
startDeleteColumn=this.findPosition$I(s) - this.start;
}if (createNewDs) {
newend--;
} else {
if (startIndex == s) {
newstart=this.findPosition$I(j);
break;
} else {
if (endIndex < j) {
newend=this.findPosition$I(i - 1);
if ($I$(1).isGap$C(this.sequence[i - 1])) {
newend--;
}break;
} else {
createNewDs=true;
newend--;
}}}}
if (createNewDs && this.datasetSequence != null  ) {
var ds=Clazz.new_(C$.c$$jalview_datamodel_SequenceI,[this.datasetSequence]);
ds.deleteChars$I$I(startDeleteColumn, startDeleteColumn + deleteCount);
this.datasetSequence=ds;
}this.start=newstart;
this.end=newend;
this.sequence=tmp;
this.sequenceChanged$();
});

Clazz.newMeth(C$, 'insertCharAt$I$I$C', function (i, length, c) {
var tmp=Clazz.array(Character.TYPE, [this.sequence.length + length]);
if (i >= this.sequence.length) {
System.arraycopy$O$I$O$I$I(this.sequence, 0, tmp, 0, this.sequence.length);
i=this.sequence.length;
} else {
System.arraycopy$O$I$O$I$I(this.sequence, 0, tmp, 0, i);
}var index=i;
while (length > 0){
tmp[index++]=c;
length--;
}
if (i < this.sequence.length) {
System.arraycopy$O$I$O$I$I(this.sequence, i, tmp, index, this.sequence.length - i);
}this.sequence=tmp;
this.sequenceChanged$();
});

Clazz.newMeth(C$, 'insertCharAt$I$C', function (i, c) {
this.insertCharAt$I$I$C(i, 1, c);
});

Clazz.newMeth(C$, 'getVamsasId$', function () {
return this.vamsasId;
});

Clazz.newMeth(C$, 'setVamsasId$S', function (id) {
this.vamsasId=id;
});

Clazz.newMeth(C$, 'setDBRefs$jalview_datamodel_Sequence_DBModList', function (newDBrefs) {
if (this.dbrefs == null  && this.datasetSequence != null   && this !== this.datasetSequence  ) {
this.datasetSequence.setDBRefs$jalview_datamodel_Sequence_DBModList(newDBrefs);
return;
}this.dbrefs=newDBrefs;
this.refModCount=0;
});

Clazz.newMeth(C$, 'getDBRefs$', function () {
if (this.dbrefs == null  && this.datasetSequence != null   && this !== this.datasetSequence  ) {
return this.datasetSequence.getDBRefs$();
}return this.dbrefs;
});

Clazz.newMeth(C$, 'addDBRef$jalview_datamodel_DBRefEntry', function (entry) {
if (this.datasetSequence != null ) {
this.datasetSequence.addDBRef$jalview_datamodel_DBRefEntry(entry);
return;
}if (this.dbrefs == null ) {
this.dbrefs=Clazz.new_($I$(17), [this, null]);
}for (var ib=0, nb=this.dbrefs.size$(); ib < nb; ib++) {
if (this.dbrefs.get$I(ib).updateFrom$jalview_api_DBRefEntryI(entry)) {
return;
}}
this.dbrefs.add$TE(entry);
});

Clazz.newMeth(C$, 'setDatasetSequence$jalview_datamodel_SequenceI', function (seq) {
if (seq === this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Implementation Error: self reference passed to SequenceI.setDatasetSequence"]);
}if (seq != null  && seq.getDatasetSequence$() != null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Implementation error: cascading dataset sequences are not allowed."]);
}this.datasetSequence=seq;
});

Clazz.newMeth(C$, 'getDatasetSequence$', function () {
return this.datasetSequence;
});

Clazz.newMeth(C$, 'getAnnotation$', function () {
return this.annotation == null  ? null : this.annotation.toArray$TTA(Clazz.array($I$(5), [this.annotation.size$()]));
});

Clazz.newMeth(C$, 'hasAnnotation$jalview_datamodel_AlignmentAnnotation', function (ann) {
return this.annotation == null  ? false : this.annotation.contains$O(ann);
});

Clazz.newMeth(C$, 'addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation', function (annotation) {
if (this.annotation == null ) {
this.annotation=Clazz.new_($I$(7));
}if (!this.annotation.contains$O(annotation)) {
this.annotation.addElement$TE(annotation);
}annotation.setSequenceRef$jalview_datamodel_SequenceI(this);
});

Clazz.newMeth(C$, 'removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation', function (annotation) {
if (this.annotation != null ) {
this.annotation.removeElement$O(annotation);
if (this.annotation.size$() == 0) {
this.annotation=null;
}}});

Clazz.newMeth(C$, 'isValidDatasetSequence', function () {
if (this.datasetSequence != null ) {
return false;
}for (var i=0; i < this.sequence.length; i++) {
if ($I$(1).isGap$C(this.sequence[i])) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'deriveSequence$', function () {
var seq=null;
if (this.datasetSequence == null ) {
if (p$1.isValidDatasetSequence.apply(this, [])) {
seq=Clazz.new_(C$.c$$S$S$I$I,[this.getName$(), "", 1, -1]);
seq.setDatasetSequence$jalview_datamodel_SequenceI(this);
seq.initSeqFrom$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA(this, this.getAnnotation$());
return seq;
} else {
this.createDatasetSequence$();
}}return Clazz.new_(C$.c$$jalview_datamodel_SequenceI,[this]);
});

Clazz.newMeth(C$, 'isProtein$', function () {
if (this.datasetSequence != null ) {
return this.datasetSequence.isProtein$();
}if (this._seqhash != this.sequence.hashCode$()) {
this._seqhash=this.sequence.hashCode$();
this._isNa=$I$(1).isNucleotide$jalview_datamodel_SequenceI(this);
}return !this._isNa;
});

Clazz.newMeth(C$, 'createDatasetSequence$', function () {
if (this.datasetSequence == null ) {
var dsseq=Clazz.new_(C$.c$$S$S$I$I,[this.getName$(), $I$(13).extractGaps$S$S($I$(1).GapChars, this.getSequenceAsString$()), this.getStart$(), this.getEnd$()]);
this.datasetSequence=dsseq;
dsseq.setDescription$S(this.description);
dsseq.sequenceFeatureStore=this.sequenceFeatureStore;
this.sequenceFeatureStore=null;
dsseq.dbrefs=this.dbrefs;
this.dbrefs=null;
dsseq.pdbIds=this.pdbIds;
this.pdbIds=null;
this.datasetSequence.updatePDBIds$();
if (this.annotation != null ) {
for (var aa, $aa = this.annotation.iterator$(); $aa.hasNext$()&&((aa=($aa.next$())),1);) {
var _aa=Clazz.new_($I$(5).c$$jalview_datamodel_AlignmentAnnotation,[aa]);
_aa.sequenceRef=this.datasetSequence;
_aa.adjustForAlignment$();
this.datasetSequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(_aa);
}
}}return this.datasetSequence;
});

Clazz.newMeth(C$, 'setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA', function (annotations) {
if (this.annotation != null ) {
this.annotation.removeAllElements$();
}if (annotations != null ) {
for (var i=0; i < annotations.length; i++) {
if (annotations[i] != null ) {
this.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(annotations[i]);
}}
}});

Clazz.newMeth(C$, 'getAnnotation$S', function (label) {
if (this.annotation == null  || this.annotation.size$() == 0 ) {
return null;
}var subset=Clazz.new_($I$(7));
var e=this.annotation.elements$();
while (e.hasMoreElements$()){
var ann=e.nextElement$();
if (ann.label != null  && ann.label.equals$O(label) ) {
subset.addElement$TE(ann);
}}
if (subset.size$() == 0) {
return null;
}var anns=Clazz.array($I$(5), [subset.size$()]);
var i=0;
e=subset.elements$();
while (e.hasMoreElements$()){
anns[i++]=e.nextElement$();
}
subset.removeAllElements$();
return anns;
});

Clazz.newMeth(C$, 'updatePDBIds$', function () {
if (this.datasetSequence != null ) {
return this.datasetSequence.updatePDBIds$();
}if (this.dbrefs == null  || this.dbrefs.size$() == 0 ) {
return false;
}var added=false;
for (var ib=0, nb=this.dbrefs.size$(); ib < nb; ib++) {
var dbr=this.dbrefs.get$I(ib);
if ("PDB".equals$O(dbr.getSource$())) {
var pdbe=Clazz.new_($I$(6).c$$jalview_datamodel_DBRefEntry,[dbr]);
added|=this.addPDBId$jalview_datamodel_PDBEntry(pdbe);
}}
return added;
});

Clazz.newMeth(C$, 'transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping', function (entry, mp) {
if (this.datasetSequence != null ) {
this.datasetSequence.transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(entry, mp);
return;
}if (entry.getDatasetSequence$() != null ) {
this.transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(entry.getDatasetSequence$(), mp);
return;
}if (entry.getSequenceFeatures$() != null ) {
var sfs=entry.getSequenceFeatures$();
for (var feature, $feature = sfs.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
var sf=(mp != null ) ? mp.locateFeature$jalview_datamodel_SequenceFeature(feature) : Clazz.array($I$(4), -1, [Clazz.new_($I$(4).c$$jalview_datamodel_SequenceFeature,[feature])]);
if (sf != null ) {
for (var sfi=0; sfi < sf.length; sfi++) {
this.addSequenceFeature$jalview_datamodel_SequenceFeature(sf[sfi]);
}
}}
}if (entry.getAllPDBEntries$() != null ) {
var e=entry.getAllPDBEntries$().elements$();
while (e.hasMoreElements$()){
var pdb=e.nextElement$();
this.addPDBId$jalview_datamodel_PDBEntry(pdb);
}
}var entryRefs=entry.getDBRefs$();
if (entryRefs != null ) {
for (var r=0, n=entryRefs.size$(); r < n; r++) {
var newref=Clazz.new_($I$(3).c$$jalview_api_DBRefEntryI,[entryRefs.get$I(r)]);
if (newref.getMap$() != null  && mp != null  ) {
}this.addDBRef$jalview_datamodel_DBRefEntry(newref);
}
}});

Clazz.newMeth(C$, 'setRNA$fr_orsay_lri_varna_models_rna_RNA', function (r) {
this.rna=r;
});

Clazz.newMeth(C$, 'getRNA$', function () {
return this.rna;
});

Clazz.newMeth(C$, 'getAlignmentAnnotations$S$S', function (calcId, label) {
var result=Clazz.new_($I$(15));
if (this.annotation != null ) {
for (var ann, $ann = this.annotation.iterator$(); $ann.hasNext$()&&((ann=($ann.next$())),1);) {
if (ann.calcId != null  && ann.calcId.equals$O(calcId)  && ann.label != null   && ann.label.equals$O(label) ) {
result.add$TE(ann);
}}
}return result;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getDisplayId$Z(false);
});

Clazz.newMeth(C$, 'getPDBEntry$S', function (pdbIdStr) {
if (this.getDatasetSequence$() != null ) {
return this.getDatasetSequence$().getPDBEntry$S(pdbIdStr);
}if (this.pdbIds == null ) {
return null;
}var entries=this.getAllPDBEntries$();
for (var entry, $entry = entries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getId$().equalsIgnoreCase$S(pdbIdStr)) {
return entry;
}}
return null;
});

Clazz.newMeth(C$, 'getPrimaryDBRefs$', function () {
if (this.datasetSequence != null ) {
return this.datasetSequence.getPrimaryDBRefs$();
}if (this.dbrefs == null  || this.dbrefs.size$() == 0 ) {
return $I$(18).emptyList$();
}{
if (this.refModCount == this.dbrefs.getModCount$() && this.primaryRefs != null  ) {
return this.primaryRefs;
}this.refModCount=this.dbrefs.getModCount$();
var primaries=(this.primaryRefs == null  ? (this.primaryRefs=Clazz.new_($I$(15))) : this.primaryRefs);
primaries.clear$();
if (this.tmpList == null ) {
this.tmpList=Clazz.new_($I$(15));
this.tmpList.add$TE(null);
}for (var i=0, n=this.dbrefs.size$(); i < n; i++) {
var ref=this.dbrefs.get$I(i);
if (!ref.isPrimaryCandidate$()) {
continue;
}if (ref.hasMap$()) {
var mp=ref.getMap$().getMap$();
if (mp.getFromLowest$() > this.start || mp.getFromHighest$() < this.end ) {
continue;
}}if ("PDB".equals$O(ref.getCanonicalSourceName$())) {
var pdbentry=this.getPDBEntry$S(ref.getAccessionId$());
if (pdbentry == null  || pdbentry.getFile$() == null  ) {
continue;
}} else {
this.tmpList.set$I$TE(0, ref);
var res=$I$(19).selectDbRefs$Z$java_util_List(!this.isProtein$(), this.tmpList);
if (res == null  || res.get$I(0) !== this.tmpList.get$I(0)  ) {
continue;
}}primaries.add$TE(ref);
}
$I$(19).ensurePrimaries$jalview_datamodel_SequenceI$java_util_List(this, primaries);
return primaries;
}});

Clazz.newMeth(C$, 'findFeatures$I$I$SA', function (fromColumn, toColumn, types) {
var startPos=this.findPosition$I(fromColumn - 1);
var endPos=fromColumn == toColumn ? startPos : this.findPosition$I(toColumn - 1);
var result=this.getFeatures$().findFeatures$I$I$SA(startPos, endPos, types);
if (this.datasetSequence != null ) {
result=this.datasetSequence.getFeatures$().findFeatures$I$I$SA(startPos, endPos, types);
} else {
result=this.sequenceFeatureStore.findFeatures$I$I$SA(startPos, endPos, types);
}var endColumnIsGapped=toColumn > 0 && toColumn <= this.sequence.length  && $I$(1).isGap$C(this.sequence[toColumn - 1]) ;
if (endPos > this.end || endColumnIsGapped ) {
var it=result.listIterator$();
while (it.hasNext$()){
var sf=it.next$();
var sfBegin=sf.getBegin$();
var sfEnd=sf.getEnd$();
var featureStartColumn=this.findIndex$I(sfBegin);
if (featureStartColumn > toColumn) {
it.remove$();
} else if (featureStartColumn < fromColumn) {
var featureEndColumn=sfEnd == sfBegin ? featureStartColumn : this.findIndex$I(sfEnd);
if (featureEndColumn < fromColumn) {
it.remove$();
} else if (featureEndColumn > toColumn && sf.isContactFeature$() ) {
it.remove$();
}}}
}return result;
});

Clazz.newMeth(C$, 'sequenceChanged$', function () {
this.changeCount++;
});

Clazz.newMeth(C$, 'replace$C$C', function (c1, c2) {
if (c1 == c2) {
return 0;
}var count=0;
{
for (var c=0; c < this.sequence.length; c++) {
if (this.sequence[c] == c1) {
this.sequence[c]=c2;
count++;
}}
}if (count > 0) {
this.sequenceChanged$();
}return count;
});

Clazz.newMeth(C$, 'getSequenceStringFromIterator$java_util_Iterator', function (it) {
var newSequence=Clazz.new_($I$(20));
while (it.hasNext$()){
var block=it.next$();
if (it.hasNext$()) {
newSequence.append$CA(this.getSequence$I$I(block[0], block[1] + 1));
} else {
newSequence.append$CA(this.getSequence$I$I(block[0], block[1]));
}}
return newSequence.toString();
});

Clazz.newMeth(C$, 'firstResidueOutsideIterator$java_util_Iterator', function (regions) {
var start=0;
if (!regions.hasNext$()) {
return this.findIndex$I(this.getStart$()) - 1;
}var hideStart=this.getLength$();
var hideEnd=-1;
var foundStart=false;
for (var i=this.getStart$(); i <= this.getEnd$() && (!foundStart) ; i++) {
var p=this.findIndex$I(i) - 1;
while (hideEnd < p && regions.hasNext$() ){
var region=regions.next$();
hideStart=region[0];
hideEnd=region[1];
}
if (hideEnd < p) {
hideStart=this.getLength$();
}if (p < hideStart) {
start=p;
foundStart=true;
}}
if (foundStart) {
return start;
}return 0;
});
;
(function(){var C$=Clazz.newClass(P$.Sequence, "DBModList", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.ArrayList');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getModCount$', function () {
return this.modCount;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

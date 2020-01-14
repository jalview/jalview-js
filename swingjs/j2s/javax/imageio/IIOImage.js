(function(){var P$=Clazz.newPackage("javax.imageio"),I$=[];
var C$=Clazz.newClass(P$, "IIOImage");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
this.raster=null;
this.thumbnails=null;
this.metadata=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.thumbnails=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata', function (image, thumbnails, metadata) {
C$.$init$.apply(this);
if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}this.image=image;
this.raster=null;
this.thumbnails=thumbnails;
this.metadata=metadata;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_Raster$java_util_List$javax_imageio_metadata_IIOMetadata', function (raster, thumbnails, metadata) {
C$.$init$.apply(this);
if (raster == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["raster == null!"]);
}this.raster=raster;
this.image=null;
this.thumbnails=thumbnails;
this.metadata=metadata;
}, 1);

Clazz.newMeth(C$, 'getRenderedImage$', function () {
{
return this.image;
}});

Clazz.newMeth(C$, 'setRenderedImage$java_awt_image_RenderedImage', function (image) {
{
if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}this.image=image;
this.raster=null;
}});

Clazz.newMeth(C$, 'hasRaster$', function () {
{
return (this.raster != null );
}});

Clazz.newMeth(C$, 'getRaster$', function () {
{
return this.raster;
}});

Clazz.newMeth(C$, 'setRaster$java_awt_image_Raster', function (raster) {
{
if (raster == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["raster == null!"]);
}this.raster=raster;
this.image=null;
}});

Clazz.newMeth(C$, 'getNumThumbnails$', function () {
return this.thumbnails == null  ? 0 : this.thumbnails.size$();
});

Clazz.newMeth(C$, 'getThumbnail$I', function (index) {
if (this.thumbnails == null ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No thumbnails available!"]);
}return this.thumbnails.get$I(index);
});

Clazz.newMeth(C$, 'getThumbnails$', function () {
return this.thumbnails;
});

Clazz.newMeth(C$, 'setThumbnails$java_util_List', function (thumbnails) {
this.thumbnails=thumbnails;
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.metadata;
});

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
this.metadata=metadata;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07

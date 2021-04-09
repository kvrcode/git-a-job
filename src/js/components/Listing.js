function Listing(title) {
    this.title = title;
}

Listing.prototype.render = function() {
    console.log('render');
}
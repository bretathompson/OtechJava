function display_HTML() {
    let myheading = "<h1>Hello, World!</h1>";
    let mytext = `<p>While it is nice to know you world, there are only some things that I am confortable sharing
    in a global context. You can't alter the variable that holds this text outside of the block that contains it! HA!</p>`;
    document.write(myheading + mytext);
}
display_HTML();

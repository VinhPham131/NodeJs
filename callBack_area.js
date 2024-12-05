function calArea(hight, width, callback) {
    let area = hight * width;
    callback(area);
}
function printArea(area) {
    console.log('Area is: ' + area);
}
calArea(5, 6, printArea);
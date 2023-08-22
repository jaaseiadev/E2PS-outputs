function distance(x,y,x2,y2){
    var x_distance = x2-x;
    var y_distance = y2-y;
    var distance = Math.round(Math.sqrt((x_distance * x_distance) + (y_distance * y_distance)));

    return distance;
}

function hasCollision(x,y,radius,x2,y2,radius2){
    var dis = distance(x,y,x2,y2);
    var collide = false;
    if (dis <= (radius+radius2)){
        collide = true;
    }
    else {
        collide = false;
    }
    return collide;
}
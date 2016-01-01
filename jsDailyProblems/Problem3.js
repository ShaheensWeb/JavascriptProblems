/*
Define a method, "tick_toward" (JS: tickToward), that generates medial values between two coordinates and returns them in an array from start to target.

For example, if you have start point [1,1] and target point [3,3] then the shortest route from start to target would be [[1,1], [2,2], [3,3]] The route should go only through integer coordinates.

Further examples:

tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/

function tickToward(start, end) {
    var startA = start.slice();
    //copy the array
    
    var results = [];
    //the returned answer set
    
    results.push(startA);
    for (var i = 0; i < start.length; i++) {
        if (start[i] < end[i] && start[i + 1] < end[i + 1]) {
            start[i] += 1;
            start[i + 1] += 1;
            var a = [start[i],start[i+1]];
            results.push(a);
            i--;
        } else if (start[i] > end[i] && start[i + 1] > end[i + 1]) {
            start[i] -= 1;
            start[i + 1] -= 1;
            var b = [start[i],start[i+1]];
            results.push(b);
            i--;
        } else if (start[i] > end[i] && start[i + 1] < end[i + 1]) {
            start[i] -= 1;
            start[i + 1] += 1;
            var c = [start[i],start[i+1]];
            results.push(c);
            i--;
        } else if (start[i] < end[i] && start[i + 1] > end[i + 1]) {
            start[i] += 1;
            start[i + 1] -= 1;
            var d = [start[i],start[i+1]];
            results.push(d);
            i--;
        } else if (start[i] > end[i] && start[i + 1] == end[i + 1]) {
            start[i] -= 1;
            var e = [start[i],start[i+1]];
            results.push(e);
            i--;
        } else if (start[i] < end[i] && start[i + 1] == end[i + 1]) {
            start[i] += 1;
            var f = [start[i],start[i+1]];
            results.push(f);
            i--;
        } else if (start[i] == end[i] && start[i + 1] > end[i + 1]) {
            start[i + 1] -= 1;
            var g = [start[i],start[i+1]];
            results.push(g);
            i--;
        } else if (start[i] == end[i] && start[i + 1] < end[i + 1]) {
            start[i + 1] += 1;
            var h = [start[i],start[i+1]];
            results.push(h);
            i--;
        }
    } 
    return results;
}
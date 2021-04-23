function solution(n, stations, w) {
    var count = 0;
    var pointer = 1;
    var range = 2 * w + 1;

    stations.forEach((station, i) => {
        count += Math.ceil((station - w - pointer) / range);
        pointer = station + w + 1;
    });

    return count + Math.ceil((n + 1 - pointer) / range);
}
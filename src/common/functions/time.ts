export function getTimer() {
    // TODO: 考虑设置时区
    var today = new Date()
    var h = today.getHours() as number | string
    var m = today.getMinutes() as number | string
    function checkTime(i: number | string) {
        if (i < 10) { i = "0" + i }
        return i
    }
    // add a zero in front of numbers<10
    m = checkTime(m)
    return h + ":" + m
}
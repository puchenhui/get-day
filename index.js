
function dateFormat(date, format) {
    let dateString = date instanceof Date ? date : new Date(date);
    let ret;
    let opt = {
        "Y+": dateString.getFullYear().toString(), // 年
        "M+": (dateString.getMonth() + 1).toString(), // 月
        "D+": dateString.getDate().toString(), // 日
        "H+": dateString.getHours().toString(), // 时
        "m+": dateString.getMinutes().toString(), // 分
        "s+": dateString.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(format);
        if (ret) {
            format = format.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        }
    }
    return format;
}
function getDay(date) {

    let today = new Date();
    let todayTime = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()).getTime();
    let oldDay = new Date(date);
    let oldTime = new Date(oldDay.getFullYear(), oldDay.getMonth() + 1, oldDay.getDate()).getTime();
    const differ = Math.floor(Math.abs((oldTime - todayTime) / 1000 / 60 / 60 / 24));

    if (differ === 0) {
        return dateFormat(date, "HH:mm")
    } else {
        if (new Date(date).getFullYear() === new Date().getFullYear()) {
            return dateFormat(date, "MM-DD HH:mm");
        } else {
            return dateFormat(date, "YYYY-MM-DD HH:mm")
        }
    }
}

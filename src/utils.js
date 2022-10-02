const diffHours = (xTime, yTime) => {
    console.log(xTime.getTime());
    let diff = Math.abs(new Date(xTime).getTime() - new Date(yTime).getTime()) / 3600000;
    return diff;
}

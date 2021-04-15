// 睡眠
export const sleep = (d: number) => {
  return new Promise((resolve) => setTimeout(resolve, d));
};

// 防抖
let timeOut: any; // 防抖（闭包需要）
export const debounce = (fn: any, time: number, argument?: any) => {
  return (function() {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(argument);
    }, time);
  })();
};

// 节流
let canRun: boolean; // 节流（闭包需要）
export const throttle = (fn: any, time: number) => {
  return (function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn();
      canRun = true;
    }, time);
  })();
};

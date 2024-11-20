export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
    // let lastFunc: NodeJS.Timeout;
    let lastRan: number | null = null;

    return function (this: any, ...args: Parameters<T>) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            // clearTimeout(lastFunc);
            // lastFunc = setTimeout(function () {
            if (Date.now() - (lastRan as number) >= limit) {
                func.apply(context, args);
                lastRan = Date.now();
            }
            // }, limit - (Date.now() - (lastRan as number)));
        }
    } as T;
}
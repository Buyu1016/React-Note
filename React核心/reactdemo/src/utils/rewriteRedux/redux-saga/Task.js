const task = {
    '@@redux-saga/TASK': true,
    next: null,
    resolve: null,
    setNext(next) {
        this.next = next;
    },
    cancel() {
        this.next(null, null, true)
    },
    toPromise() {
        return new Promise((resolve) => this.resolve = resolve)
    },
    callback() {
        this.resolve && this.resolve(true)
        console.log('已完成')
    }
}

export default task
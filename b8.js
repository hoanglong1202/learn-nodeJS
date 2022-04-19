// process.nextTick(functionX) sẽ đặt hàm functionX vào cuối của event queue mà Node.js sẽ xử lý. Nhờ có process.nextTick thay vì chúng ta phải gọi hàm synchronous callback luôn
// Theo Node.js document thì: "nextTickQueue sẽ được xử lý sau khi tiến trình hiện tại được hoàn thành tại bất kỳ giai đoạn nào của event loop"

// setImmediate() không chính xác được thực hiện ngay lập tức, tuy nhiên hàng đợi (queue) chứa callbacks của setImmediate() 
// sẽ được thực thi một lần trong mỗi vòng lặp (khi mà event loop đang ở trong giai đoạn Check Handlers)

const a = () => { console.log('a') }
const b = () => { console.log('b') }

const main = () => {
    setImmediate(b)
    process.nextTick(a)
}

main() // result: a b

// a gọi trước b vì nextTickQueue được xử lý sau khi tiến trình hiện tại được hoàn thành tại bất kỳ giai đoạn nào của event loop 
// còn b gọi sau vì setImmediate() được xử lý ở giai đoạn Check handlers trước khi close call back



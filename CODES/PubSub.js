/* 消息订阅范式 —— 杂志订阅 ＆ 商品预售 */

/* 发布者 */
class Publisher {
    constructor(pubsub, msgType) {
        /* 每个发布者都可以通过自身访问到订阅发布中心 this.pubsub*/
        this.pubsub = pubsub;
        /* this.type 表示当前发布者发布的消息类型 */
        this.msgType = msgType;
    }

    publish(msg) {
        /* 发布类型为 this.msgType 的消息 */
        this.pubsub.publish(this.msgType, msg);
    }
}

/* 订阅者 */
class Subscriber {
    constructor(pubsub, name) {
        /* 每一个订阅者都可以通过自身访问到订阅发布中心 this.pubsub */
        this.pubsub = pubsub;
        /* 消费者姓名 */
        this.name = name;
    }

    subscribe(msgType, cb) {
        /* 订阅类型为 msgType 的消息，发布订阅中心使用每个 cb 处理对应消息类型的所有消息内容 */
        this.pubsub.subscribe(msgType, cb);
    }
}

/* 注意，这里设计发布者只能发送给一种消息，但是订阅者可以订阅多种消息 */

/* 发布订阅中心 */
class PubSub {
    constructor() {
        /* 以下两个对象的元素都是数组，数组名表示消息类型，数组中的元素表示一个消息内容 or 一个回调函数 */
        this.messages = {}; // 根据消息类型维护的消息内容对象
        this.listeners = {} // 根据消息类型维护的回调函数对象
    }

    publish(msgType, msg) {
        const isExist = this.messages[msgType];
        if (!isExist) {
            this.messages[msgType] = []
        }
        this.messages[msgType].push(msg)
        /* 一旦发布者发布，就通知订阅者，即执行订阅者传递的回调函数 */
        this.notifyAsType(msgType)
    }

    subscribe(msgType, cb) {
        const isExist = this.listeners[msgType];
        if (!isExist) {
            this.listeners[msgType] = []
        }
        this.listeners[msgType].push(cb)
    }

    notifyAsType(msgType) {
        const messages = this.messages[msgType];
        const listeners = this.listeners[msgType];
        if (!listeners) return;
        /* 所谓的通知订阅者，即调用订阅者传递的回调，同时接收一个参数，为当前消息类型的消息信息构成的数组 */
        listeners.forEach((cb) => {
            cb(messages);
        })
    }
}

/* 测试样例 */
/* 订阅发布中心 */
const broker = new PubSub(); // 发布订阅中心
/* 发布者 */
const publisher = new Publisher(broker, "books"); // 发布者之出版社
const seller = new Publisher(broker, "products"); // 发布者之商家
/* 订阅者 */
const chris = new Subscriber(broker, "chris");
const jerry = new Subscriber(broker, "jerry");
/* 订阅消息 */
chris.subscribe("books", (message, name = "chris") => {
    /* 定义简单的处理消息内容的回调函数 */
    console.log(`${name} 收到通知，出版社出新书了，现在出版书籍为 ${message}`);
});
jerry.subscribe("books", (message, name = "jerry") => {
    console.log(`${name} 收到通知，出版社出新书了，现在出版书籍为 ${message}`);
});
jerry.subscribe("products", (message, name = "jerry") => {
    console.log(`${name} 收到通知，新品上架了，现在有新品为 ${message}`);
})
/* 发布消息 */
publisher.publish("简爱");
publisher.publish("悉达多");
publisher.publish("风沙星辰");
seller.publish("水杯");
seller.publish("牙刷");
seller.publish("牙膏");
/* 
    chris 收到通知，出版社出新书了，现在出版书籍为 简爱
    jerry 收到通知，出版社出新书了，现在出版书籍为 简爱
    chris 收到通知，出版社出新书了，现在出版书籍为 简爱,悉达多
    jerry 收到通知，出版社出新书了，现在出版书籍为 简爱,悉达多
    chris 收到通知，出版社出新书了，现在出版书籍为 简爱,悉达多,风沙星辰
    jerry 收到通知，出版社出新书了，现在出版书籍为 简爱,悉达多,风沙星辰
    jerry 收到通知，新品上架了，现在有新品为 水杯
    jerry 收到通知，新品上架了，现在有新品为 水杯,牙刷
    jerry 收到通知，新品上架了，现在有新品为 水杯,牙刷,牙膏
*/

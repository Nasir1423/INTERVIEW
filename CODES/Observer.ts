/* 观察者模式 —— 杂志订阅 */

/* 观察者接口：所有观察者必须实现 update 方法 */
interface Observer {
    update(magazineName: string): void;
}

/* 主题/被观察者接口：被观察者必须实现 add、del、notifyAll 方法，并且必须维护一个观察者列表 */
interface Subject {
    add(observer: Observer): Subject;
    del(observer: Observer): Subject;
    notifyAll(msg: string): void;
}

/* 消费者类 —— 实现观察者接口 */
class Subscriber implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(magazineName: string): void {
        console.log(`订阅者 ${this.name} 收到了消息：${magazineName} 现在可以购买了！！！`);
    }
}

/* 出版社类 —— 实现被观察者接口 */
class Publisher implements Subject {
    private observerList: Observer[];

    constructor() {
        /* 出版社维护的消费者列表 ==> 相当于被观察者维护的观察者列表 */
        this.observerList = [];
    }

    add(observer: Observer): Publisher {
        /* 添加观察者 */
        this.observerList.push(observer);
        return this;
    }

    del(observer: Observer): Publisher {
        /* 删除观察者 */
        const index = this.observerList.indexOf(observer);
        if (index !== -1) {
            this.observerList.splice(index, 1);
        }
        return this;
    }

    notifyAll(msg: string): void {
        /* 通知所有观察者 */
        this.observerList.forEach(observer => observer.update(msg));
    }

    publishMagazine(magazineName: string): void {
        /* 发布杂志 */
        this.notifyAll(magazineName);
    }
}

/* 测试用例 */
// 创建出版社
const publisher: Publisher = new Publisher();
// 创建消费者
const chris: Subscriber = new Subscriber("Chris");
const jerry: Subscriber = new Subscriber("Jerry");
const tom: Subscriber = new Subscriber("Tom");
// 消费者订阅
publisher.add(chris).add(jerry).add(tom);
// 出版社杂志出版（自动通知消费者）
publisher.publishMagazine("《简爱》");
/* 
    输出：
    消费者 Chris 收到了消息：《简爱》 现在可以购买了！！！
    消费者 Jerry 收到了消息：《简爱》 现在可以购买了！！！
    消费者 Tom 收到了消息：《简爱》 现在可以购买了！！！
*/

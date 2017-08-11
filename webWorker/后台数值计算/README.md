# 示例说明

## 示例说明
在主页面创建一个后台工作线程，并且向这个工作线程分配任务(传递两个特别大的数字)，当工作线程执行完成这个任务时，便向主页面返回计算结果，
而在这个过程，主页面不需要等待这个耗时的操作，可以继续进行其它的行为或任务

## 应用场景说明
1.主页面，可以包含主JavaScript应用入口，用户其他操作UI等
2.后端工作线程脚本，用来执行计算任务

## 计算遇到的错误 Maximum call stack size exceeded
worker.postMessage({first:347734080,second:3423744400});开始的时候传入的这一段代码中为string

## 功能实现
在主程序页面中，使用Worker()构造函数创建一个新的工作线程，它会返回一个代表此线程本身的线程对象。
使用这个线程对象与后端脚本进行通讯。
线程对象有两个主要事件处理器，postMessage和onmessage。
其中postMessage用来向后端脚本发送消息，onmessage用来接收从后端脚本中传递过来的消息

## 后端工作线程代码
两个JavaScript函数,
1.function divisor：计算最大公约数
2.function multiple: 计算最小公倍数
工作线程中的onmessage事件处理器用以接收从主页面传递过来的数值，然后把这两个数值传递到function calculate用以计算
计算完成后，调用事件处理器postMessage，把计算结果发送到主页面

## 最大公约数

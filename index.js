import Scheduler from './scheduler';

const schedule = new Scheduler();

const func = (para) => {

    console.log(para);

};

const func2 = (para) => {

    console.log(para);

};

const func3 = (para) => {

    console.log(para);

};

const func4 = (para) => {

    console.log(para);

};

const functions = [
{
    functionObj: func, para: ["Hello world"]
},
{
    functionObj: func2, para: ["Bye bye"]
},
{
    functionObj: func3, para: ["Good boy"]
},
{
    functionObj: func4, para: ["No no"]
}
];

//schedule.scheduleAt(5, func, "Hello world");
//setTimeout(()=>{schedule.stop()}, 10000);
//schedule.distributedScheduler(5, functions, 2);
//setTimeout(()=>{schedule.stopDistributedTasks()}, 10000);

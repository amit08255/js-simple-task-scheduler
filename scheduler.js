export default class Schedule {
    constructor() {
        this.timerIdR = false;
        this.timerIdS = false;
        this.interId = false;
        this.distributedTimers = [];
        this.distributedTasks = [];
        this.distibutedTaskIndex = {};
    }

    //interval = interval in seconds
    scheduleAt(interval, func, ...args) {

            this.interId = setInterval(func, interval * 1000, ...args);
    }

    //split array into n chunks. first parameter is array, second is number of chunks
    //third is if all chunks have equal length except last

    chunkify(a, n, balanced){
    
        if (n < 2)
            return [a];

        var len = a.length,
                out = [],
                i = 0,
                size;

        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }

        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }

        else {

            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));

        }

        return out;
    }


    taskExecutor(index, interval, scheduler){

        var taskIndex = scheduler.distibutedTaskIndex[index+""] || 0;

        var task = scheduler.distributedTasks[index][taskIndex];

        setTimeout(task.functionObj, interval * 1000, ...task.para);

        scheduler.distibutedTaskIndex[index+""] = (taskIndex + 1) % (scheduler.distributedTasks[index].length);

    }


    /*Takes an array of function and interval (in seconds)
      last parameter is number of tasks in which functions are split up
      functions = [{functionObj: function_object, para: parameter_array}]
    */
    distributedScheduler(interval, functionsJsonArray, taskLimit){

        this.distributedTasks = this.chunkify(functionsJsonArray, taskLimit, true);

        for(var i = 0; i < this.distributedTasks.length; i++){

            var task = setInterval(this.taskExecutor, interval * this.distributedTasks[i].length * 1000, i, interval, this);

            this.taskExecutor(i, interval, this); //immediately start first task of each chunk

            this.distributedTimers.push(task);
        }

    }

    stopDistributedTasks(){
        
        this.distributedTimers.map((task, index) => {

            clearInterval(task)
        });

        this.distributedTimers = [];
        this.distributedTasks = [];
        this.distibutedTaskIndex = {};

    }

    stop() {
        this.timerIdR ? setInterval(this.timerIdR) : null;
        this.timerIdS ? clearTimeout(this.timerIdS) : null;
        this.interId ? clearInterval(this.interId) : null;
    }
}

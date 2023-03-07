## Javascript vs Node.js Execution :

#### **_Javascript :_**

- _Each Browser has **Javascript Browser engine**._
- - _Chrome : `V8 engine`_
- _Javascript Browser engine :_
- - _Load the webpage as DOM from html element._
- - _Has access of DOM._
- - _Javascript file in Browser engine._
- - - _Also get access of DOM._
- - - _Can manipulate the DOM dynamically._

#### **_Node.js :_**

- _Chrome's `V8 engine` integrated with operating system._
- - _So that, javascript runtime/ Nodejs able to access operating system._
- - - _The File system._
- - - _Network system._
- - - _Memory system._

<br/>

## Server with threads and blocking behavior :

#### _Tomcat server :_

- _use java to run._
- _have 200 threat._
- - _able to handle maximum 200 client._
- _not cost effective._
- - _more then 200 client then need more hardware._

#### _Node.js Server :_

- _Single threat, non-blocking._
- _Non-blocking behavior using **Threat** & **Workers**._
- - _Threat only handle **req** and **res**._
- - _Threat handle request and send to worker._
- - _Worker complete the process and return to threat._
- - _Then, threat handle response._

#### _Node.js Server Issue :_

- _Node.js is for I/O intensive task, **not** for **Cpu intensive task**._
- _**Because**_,
- - _Worker can't handle Cpu intensive task._
- - _Threat have to handle that task._
- - - _As a result, server remain busy until the task complete._

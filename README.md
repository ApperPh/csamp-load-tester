# CSAMP for AWS and Azure

To run the tester, install the following:

```
$ npm install -g artillery
$ npm install
```

Open ops-revalida.yml and change the target to your endpoint.

```
config:
    target: "https://ogi82xrl37.execute-api.ap-southeast-1.amazonaws.com" <-- Change to your endpoint.
```

Run artillery.

```
$ artillery run ops-revalida.yml
```

Artillery will send request every second for 10 seconds. The output should look like below.

```

$ artillery run ops-revalida.yml 
Started phase 0, duration: 10s @ 11:28:42(+0000) 2020-06-26
..  Sending a request with riderId 9e8adaef-2309-4727-b1c1-04b0ff792061
  . Sending a request with riderId d43b83fb-089c-4c4b-9922-5132a036fb68
 .. Sending a request with riderId db9901ad-5ae9-4a79-af90-56f457c471e7
... Sending a request with riderId a91b4887-5d8a-4815-9c98-1e64411c0af4
..  Sending a request with riderId f7e01d25-28e7-476e-a959-c6f40cbe9c6d
.   Sending a request with riderId 01b87f3f-105c-4536-8e85-3778a0319575
    Sending a request with riderId 8b6ee984-9517-4b2c-a6e7-823944b291eb
  . Sending a request with riderId 7ac9e7bc-31b4-4c42-b1ef-bac9c0d9dc84
 .. Sending a request with riderId 55d2a6a6-9e01-459e-9c98-226ae084be77
Report @ 11:28:52(+0000) 2020-06-26
Elapsed time: 10 seconds
  Scenarios launched:  9
  Scenarios completed: 9
  Requests completed:  9
  Mean response/sec: 1.01
  Response time (msec):
    min: 25.1
    max: 502.2
    median: 31.7
    p95: 502.2
    p99: 502.2
  Codes:
    200: 9

.   Sending a request with riderId 3565f31f-e552-4af6-8831-feaf94a760ee
Report @ 11:28:53(+0000) 2020-06-26
Elapsed time: 11 seconds
  Scenarios launched:  1
  Scenarios completed: 1
  Requests completed:  1
  Mean response/sec: 2
  Response time (msec):
    min: 30.1
    max: 30.1
    median: 30.1
    p95: 30.1
    p99: 30.1
  Codes:
    200: 1

All virtual users finished
Summary report @ 11:28:53(+0000) 2020-06-26
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  10
  Mean response/sec: 1.06
  Response time (msec):
    min: 25.1
    max: 502.2
    median: 31.2
    p95: 502.2
    p99: 502.2
  Scenario counts:
    0: 10 (100%)
  Codes:
    200: 10
    
```
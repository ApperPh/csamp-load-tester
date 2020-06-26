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
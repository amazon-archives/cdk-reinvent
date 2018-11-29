# AWS CDK re:Invent 2018 Session

The [AWS Cloud Development Kit (CDK)](https://github.com/awslabs/aws-cdk) is a software development framework for defining cloud infrastructure in code.  

This repo contains the demo code from the [AWS re:Invent 2018 DEV372: Infrastructure ***is*** Code](https://www.youtube.com/watch?v=Lh-kVC2r2AU) session. 

## Prerequisites

1. [Node.js](https://nodejs.org)
2. CDK Toolkit: `npm i -g aws-cdk`

## Setup

Clone the repository and run:

```console
$ cd hello-cdk
$ npm install
```

## Twitter Credentials

Follow the instructions [here](https://www.npmjs.com/package/cdk-tweet-queue) to obtain Twitter credentials and store them in AWS SecretsManager.

Update the [code](https://github.com/awslabs/cdk-reinvent/blob/master/hello-cdk/bin/hello-cdk.ts#L15) to use the ARN of the secret you stored.

## Build

To build the Typescript code run:

```console
$ npm run build
```

Or, to continuously build in the background:

```console
$ npm run watch
```

## Deploy

You'll need to setup AWS credentials in your environment (e.g. via `aws configure`), and then execute:

```console
$ cdk deploy
```

## License Summary

This sample code is made available under a modified MIT license. See the LICENSE file.

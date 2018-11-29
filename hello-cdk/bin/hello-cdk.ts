#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { QueueRecorder } from '../lib/queue-recorder';
import tq = require('cdk-tweet-queue');

class HelloCdkStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
    super(parent, name, props);

    const queue = new tq.TweetQueue(this, 'Tweets', {
      // TODO: Follow the instructions on the cdk-tweet-queue NPM page
      //       to set up your Twitter API keys in AWS Secrets Manager
      //       and plug it in to the secretArn parameter below. 
      //       https://www.npmjs.com/package/cdk-tweet-queue
      secretArn: "",
      query: '#awscdk'
    });

    new QueueRecorder(this, 'QueueRecorder', {
      inputQueue: queue
    });
  }
}

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');
app.run();

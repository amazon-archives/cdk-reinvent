import cdk = require('@aws-cdk/cdk');
import sqs = require('@aws-cdk/aws-sqs');
import lambda = require('@aws-cdk/aws-lambda');
import event_sources = require('@aws-cdk/aws-lambda-event-sources');
import dynamodb = require('@aws-cdk/aws-dynamodb');

export interface QueueRecorderProps {
  inputQueue: sqs.Queue
}

export class QueueRecorder extends cdk.Construct {
  constructor(parent: cdk.Construct, id: string, props: QueueRecorderProps) {
    super(parent, id);

    const fn = new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('lambda'),
      handler: 'index.handler'
    });

    fn.addEventSource(new event_sources.SqsEventSource(props.inputQueue));

    const table = new dynamodb.Table(this, 'QueueRecorderTable', {
      partitionKey: {name: 'id', type: dynamodb.AttributeType.String}
    });

    fn.addEnvironment('TABLE_NAME', table.tableName);

    table.grantWriteData(fn.role);
  }
}
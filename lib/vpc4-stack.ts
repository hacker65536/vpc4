import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2');

export class Vpc4Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const vpc = new ec2.Vpc(this,'vpc',{
	    maxAzs:2,
    });

    new cdk.CfnOutput(this,"id",{
	    value: "aaa"
    });
  }
}

import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Vpc4 = require('../lib/vpc4-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Vpc4.Vpc4Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
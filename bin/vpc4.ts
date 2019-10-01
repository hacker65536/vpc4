#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Vpc4Stack } from '../lib/vpc4-stack';

const app = new cdk.App();
new Vpc4Stack(app, 'Vpc4Stack');

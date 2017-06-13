import path from 'path';
import { addPath } from 'app-module-path';

addPath(path.join(__dirname, '..', ''));
addPath(path.join(__dirname, '..', '/src'));

global.chai = require('chai');
global.sinon = require('sinon');
global.expect = require('chai').expect;
global.AssertionError = require('chai').AssertionError;

global.chai.should();
global.chai.use(require('sinon-chai'));
global.chai.use(require('chai-as-promised'));

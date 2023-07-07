#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');

spawnSync('oro apply --proxy-url "https://proxy.npm.org"');

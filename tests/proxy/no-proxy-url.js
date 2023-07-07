#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');

spawnSync('oro apply --no-proxy-url "https://example.com"');

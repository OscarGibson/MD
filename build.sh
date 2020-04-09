#!/bin/bash
cd ../frontend/maeasto-client && npm run build && \
cp build/index.html ../../backend/base/templates/base/ && \
cp -r build/static/ ../../backend/base/


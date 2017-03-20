#!/bin/bash

echo "============================" && \
echo "Let's build this thing then!" && \
echo "============================" && \
echo "" && \

echo "1. Elm" && \
  elm install && \

echo "2. yarn" && \
  yarn && \

echo "3. Run the build" && \
  npm run build && \

echo "============================" && \
echo "All done!                   " && \
echo "============================" && \
echo ""

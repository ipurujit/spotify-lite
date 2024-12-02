#!/bin/bash

find src/common/components/ -name '*.tsx' \
 -exec echo {}'```typescript' \; -exec cat {} \; -exec echo '```' \; \
  > combined-tsx-files.txt

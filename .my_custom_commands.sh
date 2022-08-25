#!/bin/bash
# prints the input
function push() {
  git add .
  git commit -m "$1"
  git push -u origin main
}

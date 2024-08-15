#!/bin/bash

# Build the project
npm run build

# Deploy to GitHub Pages (adjust the repository URL)
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
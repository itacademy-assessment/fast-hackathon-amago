#!/bin/bash

# Install dependencies
npm ci

# Build the Angular application for production
npm run build:vercel

echo "Build completed successfully for Vercel deployment"

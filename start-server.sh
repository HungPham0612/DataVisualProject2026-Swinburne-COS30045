#!/bin/bash

# Australian Road Casualties Visualization - Quick Start Script
# This script starts a local web server to view the visualization

echo "=========================================="
echo "Road Casualties Visualization Server"
echo "=========================================="
echo ""
echo "Starting local web server..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null
then
    echo "Using Python 3 to serve files..."
    echo ""
    echo "Server running at: http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    echo "Opening browser in 2 seconds..."
    sleep 2

    # Open browser (works on macOS)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:8000
    fi

    # Start Python server
    python3 -m http.server 8000

# Check if Python 2 is available
elif command -v python &> /dev/null
then
    echo "Using Python 2 to serve files..."
    echo ""
    echo "Server running at: http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""

    # Start Python 2 server
    python -m SimpleHTTPServer 8000

else
    echo "Error: Python is not installed."
    echo "Please install Python or use another method to run a local server."
    echo ""
    echo "Alternative: Install Node.js and run: npx http-server"
    exit 1
fi

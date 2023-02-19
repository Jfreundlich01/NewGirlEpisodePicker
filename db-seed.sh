#!/bin/bash

# Set the Neo4j credentials and endpoint URL
USER="neo4j"
PASSWORD="test"
URL="http://localhost:7474/db/data/transaction/commit"

# Define the Cypher query to create the movie nodes
query='{"statements": [{"statement": "CREATE (:Movie {title: \"The Matrix\"}), (:Movie {title: \"Inception\"}), (:Movie {title: \"Star Wars: A New Hope\"})"}]}'

# Execute the query using the Neo4j HTTP API and curl
curl -i -u $USER:$PASSWORD -H "Content-Type: application/json" -X POST $URL -d "$query" -v

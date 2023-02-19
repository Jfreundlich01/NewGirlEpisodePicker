#!/bin/bash

# Set the Neo4j credentials and endpoint URL
USER="neo4j"
PASSWORD="test"
URL="http://localhost:7575/db/data/transaction/commit"

# Define the Cypher query to delete all nodes and relationships
query='{"statements": [{"statement": "MATCH (n) DETACH DELETE n"}]}'

# Execute the query using the Neo4j HTTP API and curl
curl -i -u $USER:$PASSWORD -H "Content-Type: application/json" -X POST $URL -d "$query"

#!/bin/bash
kubectl patch serviceaccount build-bot-frontend -p '{"imagePullSecrets": [{"name": "quay-io-team-taurus1-password"}]}'

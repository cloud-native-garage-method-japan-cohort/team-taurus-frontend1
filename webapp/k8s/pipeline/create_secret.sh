#!/bin/bash
export CONTAINER_REGISTRY_SERVER='https://quay.io'
export CONTAINER_REGISTRY_USER='tokinori_shimodaira_ibm'
export CONTAINER_REGISTRY_PASSWORD='03OZdz48DC7hwxRfUwsMhZqeVqCGcEFDlK9PWpnzdJE2DxFO2vOYg5zkjibt1qxffQMMbjyJC22QZWx/ub4yzAW5Vd7UU14Lb8og70cB1AM='
kubectl create secret -n team-taurus1 docker-registry quay-io-team-taurus1-password --docker-server=$CONTAINER_REGISTRY_SERVER --docker-username=$CONTAINER_REGISTRY_USER --docker-password=$CONTAINER_REGISTRY_PASSWORD


#! /bin/bash

for REPO in identity secret repository plugin config inventory monitoring statistics billing power-scheduler cost-saving spot-automation
do
	cp helm_templates/backend/* $REPO/deploy/helm/templates/
	cd $REPO/
	git checkout master
	git pull
	sed -i -e 's/version: 1.1.1/version: 1.1.2/g' deploy/helm/Chart.yaml
	git add deploy/helm/Chart.yaml
	git add deploy/helm/templates/*
	git commit -s -m "Update helm template version 1.1.2"
	git push
	cd ../
done


# Cloud Project S9

### Members
Hugo JAMINON  
Baptiste KEUNEBROEK  
Julien MABECQUE

### Sources
The sources for this project are taken from the M1 project in Advanced Web Development whose group was:

Elvin AUPIAIS--BERTHY  
Mohammed Saber BELLAAZIRI  
Monica-Pauline BLANC  
Hugo JAMINON   

The following changes were made:
- Added a second service which allows you to make queries to a database
- Added a database
- Modification of the front to add this second service to the navigation bar.

### Project setup :  
  
#### Prerequisites
```
- Kubernetes
- Docker
- Istio
```

#### Installation and launch
> 1. Start Kubernetes
```
minikube start --memory=5000 --cpus=4
```

> 2. Install Istio : https://github.com/charroux/servicemesh#install-istio
```
cd istio
istioctl install --set profile=demo -y
kubectl label namespace default istio-injection=enabled
kubectl apply -f samples/addons
kubectl label namespace default istio-injection=enabled
minikube docker-env
minikube -p minikube docker-env
minikube docker-env
```

#### Docker images (They are already created, skip this)
> Create images

```
cd server
docker build -t hugoja0/project_cloud_service_1 .
cd ..
```
```
cd server2
docker build -t hugoja0/project_cloud_service_2 .
cd ..
```
```
cd front
docker build -t hugoja0/project_cloud_front .
cd ..
```

> Publish images
```
docker login
docker push hugoja0/project_cloud_service_1
docker push hugoja0/project_cloud_service_2
docker push hugoja0/project_cloud_front
```

#### Initialize database

```
cd Database
kubectl apply -f mysql-secret.yaml
kubectl apply -f mysql-deployment.yaml
kubectl apply -f mysql-serviceClusterIp.yaml
cd ..
```

#### Deploy services

```
kubectl apply -f service1-deployment.yaml
kubectl apply -f service2-deployment.yaml
```

#### Create gateway

```
kubectl apply -f gateway.yaml
ingress-forward.sh
```

#### Deploy front

```
kubectl apply -f front-deployment.yaml
```


### URL

- App : http://localhost:31380/

- Service 1 : http://localhost:31380/service1/

- Service 2 : http://localhost:31380/service2/

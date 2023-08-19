touch angular-deployment.yaml

cat <<EOT >> angular-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: angular-deployment
  labels:
    app: angular
spec:
  replicas: 1
  selector:
    matchLabels:
      app: angular
  template:
    metadata:
      labels:
        app: angular
    spec:
      imagePullSecrets:
        - name: harbor
      containers:
      - name: angular-front
        image: harbor.isicod.net/univh2c/frontend-inscription-univh2c:version$1
        imagePullPolicy: Always
        ports:
        - containerPort: 80

EOT

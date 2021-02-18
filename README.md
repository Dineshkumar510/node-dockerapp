
# Docker Commands:


1) To create an docker image use cmd: "**docker build -t node-dockerapp .**" 

 	**-t:** -> It is for global creation.
	**node-dockerapp:** -> File name of docker which we want to created.
	" **.** " -> The dot. is used for create docker file on same path.

2) To run docker file use cmd:  "**docker run -it -p 9000:8080 node-dockerapp**"
	**-it** -> It repesents for runs of docker file in local machine.
	**-p** -> It is a port convertion to run on local machine: in this case i use port 9000: for port 8080.
	**node-dockerapp** -> run the docker file name!.

3) To view the present id for the running docker image is " **docker run -d -p 9000:8080 node-dockerapp** "
	

 - In this case the id is : 				793925845b7629adea96c8e6e1835e4dfb4cd4f24b8137abd658d9a20553bc5d

	4) To view the run docker file status cmd: "**docker ps**"


	5) To view the all docker images: "**docker image ls**"


	6) To run the docker file cmd: **"docker run node-dockerapp"**

In this case::

> dockerdemo@1.0.0 start /dockerapp
> node dockerapp.js

Docker cmds to run the dockerfile:
	*Firstly create the "Dockerfile" on vscode
	Then write this code:*

`FROM node:9-slim
WORKDIR /dockerapp
COPY package.json /dockerapp
RUN npm install 
COPY . /dockerapp
CMD ["npm","start"]`

-> on package.json file write the scripts as:   **"start": "node dockerapp.js"**,

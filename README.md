##Node app with a docker file

# build an image with a name from a path
`docker build -t name-of-the-container .`

# build and start a container from an image with the name image-name
`docker run -p localport:dockerport image-name`

# save image in a .tar file
`docker save image-name > image-name.tar`

# load image from the tar file
`#docker load -i image-name.tar`

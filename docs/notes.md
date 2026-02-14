# DevOps Overview

## What is DevOps?

DevOps is a culture and set of practices that bridges the gap between development and operations teams. It's represented by the Infinity symbol, emphasizing its continuous and cyclical nature.

![DevOps Lifecycle Infinity Diagram](devops-lifecycle-diagram.png)

## The DevOps Lifecycle

### 1. Plan

Every project begins with a solid plan. The planning phase involves:

- Defining project scope and objectives
- Ensuring the project is feasible with available resources
- Setting realistic timelines and milestones
- Collaborating with stakeholders to align goals

### 2. Code

Writing quality code is fundamental. Key principles include:

- **Clean code**: Easy to understand and maintain
- **Readable code**: Well-documented and self-explanatory
- **Well-formatted code**: Following consistent style guidelines and best practices
- Version control integration from the start

### 3. Build

The build phase involves preparing code for execution:

- Compiling source code into executable artifacts
- Resolving and fetching dependencies
- Creating build configurations
- Preparing the code for the actual runtime environment
- Ensuring reproducible builds across different environments

### 4. Testing

Testing is crucial for catching problems before they explode in production. This phase is automated and includes:

- **Unit testing**: Testing individual components in isolation
- **End-to-end testing**: Testing complete user workflows
- **Security testing**: Identifying vulnerabilities and security flaws
- **Integration testing**: Ensuring different components work together
- **Performance testing**: Validating system performance under load
- This marks the transition from development (devs) to operations (ops)

### 5. Deployment

In DevOps, deployments are fully automated using specialized tools. Common deployment strategies include:

- **Canary deployment**: Gradually rolling out changes to a small subset of users first
- **Blue-green deployment**: Maintaining two identical production environments for zero-downtime releases
- **Rolling deployment**: Incrementally updating instances without downtime
- Automated rollback mechanisms for quick recovery

### 6. Operate

The operate phase focuses on ensuring the system continues to run reliably in real-world situations:

- Managing system resources effectively
- Scaling infrastructure up or down based on demand
- Handling traffic spikes and load balancing
- Maintaining system stability and availability
- Managing configuration updates and patches

### 7. Monitoring

Continuous monitoring provides visibility into system health and performance:

- Gathering metrics about server performance and resource utilization
- Monitoring technical outcomes (uptime, response times, error rates)
- Tracking business outcomes (user engagement, conversion rates, revenue impact)
- Setting up alerts and notifications for critical issues
- Creating dashboards for real-time visibility
- Analyzing logs and trends for proactive problem resolution

**It's a loop!** Once monitoring is complete, insights feed back into the planning phase, creating a continuous cycle of improvement.

## DevOps Culture

DevOps is fundamentally about fostering a **culture of constant learning and innovation**:

- Breaking down silos between teams
- Encouraging collaboration and shared responsibility
- Embracing failure as a learning opportunity
- Continuously improving processes and tools
- Staying updated with evolving technologies

## The Role of a DevOps Engineer

### What You're NOT Supposed to Do

You are not supposed to do everything yourself. DevOps is about enabling teams, not becoming a bottleneck.

### What You ARE Supposed to Do

A DevOps engineer **bridges the gap between different teams** and **automates the boring tasks**:

- You are here to connect all the dots and keep things running smoothly
- **Set up pipelines**: Create and maintain CI/CD pipelines
- **Integrate testing**: Embed automated testing into the pipeline workflow
- **Automate deployments**: Remove manual deployment steps and human error
- **Codify the infrastructure**: Use Infrastructure as Code (IaC) principles
- **Keep watch**: When the code is live, you monitor and maintain system health

## The Heartbeat of DevOps: CI/CD

### What CI/CD Actually Means

CI/CD stands for Continuous Integration and Continuous Deployment/Delivery. The flow looks like this:

**Coding → Building → Testing → Deployment**

### The Pipeline Concept

Think of it as a **conveyor belt** for your code:

- Whenever there is a commit, the pipeline automatically runs
- Your automated tests execute as part of the pipeline
- If the code clears all tests, deployment happens automatically
- If tests fail, the pipeline stops and alerts the team

### Writing Pipelines

We define pipelines as code:

- Each step is defined using configuration files
- Steps are orchestrated in a specific sequence
- The pipeline handles build, test, and deployment automation
- Version-controlled just like application code

### Container Orchestration

You orchestrate containers with **Kubernetes**, which handles:

- Container deployment and scaling
- Load balancing and service discovery
- Self-healing and automatic rollbacks
- Resource management and optimization

## Infrastructure as Code (IaC)

Infrastructure as Code means defining your infrastructure using code rather than manual configuration:

- Servers, networks, and services defined in code files
- Version-controlled infrastructure configurations
- Reproducible and consistent environments
- Automated infrastructure provisioning and management
- Easy to scale and modify infrastructure

## CI/CD Pipelines in Practice

### GitHub Actions

**GitHub Actions** is a powerful CI/CD platform that automates your software workflows directly in your GitHub repository.

#### How GitHub Actions Works

- **Runs on push**: Automatically triggered when code is pushed to the repository
- **Massive libraries**: Access to a vast marketplace of pre-built actions and integrations
- **Version-controlled YAML configs**: All workflows are defined in YAML files that live in your repository
- Complete transparency and traceability of your CI/CD configuration

#### Workflow Structure

A GitHub Actions **workflow** is the automated process you define:

- **Lives in the repo**: Stored in the `.github/workflows/` directory
- **It's just a YAML file**: Simple, readable configuration format
- Version-controlled alongside your code

#### Key Components of a Workflow

Every workflow consists of three main components:

##### 1. Triggers (When to Run)

Triggers define when the workflow should execute:

- `push`: When code is pushed to specific branches
- `pull_request`: When a PR is opened, updated, or merged
- `schedule`: Run on a schedule using cron syntax
- `workflow_dispatch`: Manual trigger from GitHub UI
- `release`: When a new release is published
- Multiple triggers can be combined

##### 2. Jobs (Set of Tasks)

Jobs are collections of steps that execute on the same runner:

- Jobs run in parallel by default (can be configured to run sequentially)
- Each job runs in a fresh virtual environment
- Jobs can depend on other jobs using `needs` keyword
- Can run on different operating systems (Linux, Windows, macOS)
- Share data between jobs using artifacts

##### 3. Steps (Actual Commands and Actions)

Steps are individual tasks within a job:

- Can run shell commands directly
- Can use pre-built actions from the GitHub marketplace
- Execute sequentially within a job
- Each step can have conditions to control execution
- Steps share the same filesystem within a job

#### YAML Configuration Information

The workflow YAML file contains all the configuration:

```yaml
name: CI Pipeline
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
```

Key YAML elements:

- **name**: Descriptive name for the workflow
- **on**: Trigger events
- **jobs**: Collection of jobs to run
- **runs-on**: The type of machine to run the job on
- **steps**: Sequential list of tasks
- **uses**: Reference to a pre-built action
- **run**: Shell command to execute

## Docker: Containerization for Modern Applications

### What is Docker?

Docker is like a **lunch box for your application** - it packages everything your application needs to run into a single, portable container. The key principle: **it works everywhere**.

Docker provides **stability** and enables **development, packaging, and execution in a unified environment**. Each container is **self-contained**, meaning it includes the application code, runtime, system tools, libraries, and settings all in one package.

### Why Bother with Docker?

Docker makes apps **faster and better** in both development and deployment. It solves many common problems in software development and operations.

#### The Most Common Help Points

##### 1. Consistency

- "It works on my machine" becomes "It works everywhere"
- Same environment from development to production
- Eliminates environment-related bugs
- Developers, testers, and operations work with identical setups

##### 2. Isolation

- Applications run in isolated environments
- No conflicts between different application dependencies
- One container's issues don't affect others
- Clean separation of concerns
- Multiple versions of the same software can coexist

##### 3. Portability

- Run the same container on any system that supports Docker
- Move seamlessly between local machine, test servers, and production
- Cloud-agnostic deployment (AWS, Azure, GCP, on-premises)
- Share containers easily across teams

##### 4. Lightweight & Efficient

- Containers share the host OS kernel
- Much smaller than virtual machines
- Fast startup times (seconds instead of minutes)
- Lower resource overhead
- Can run many containers on a single host

##### 5. Version Control for Applications

- Docker images are versioned and tagged
- Easy rollback to previous versions
- Track changes in your application environment
- Reproducible builds at any point in time
- Image layers enable efficient storage and updates

##### 6. Scalable

- Easily create multiple instances of containers
- Scale up or down based on demand
- Perfect for microservices architectures
- Horizontal scaling made simple
- Load balancing across containers

##### 7. DevOps Integration

- Seamless integration with CI/CD pipelines
- Automated builds, tests, and deployments
- Infrastructure as Code compatibility
- Works perfectly with orchestration tools like Kubernetes
- Enables continuous delivery practices

### How Does Docker Work?

Docker operates on two fundamental concepts: **Images** and **Containers**.

#### Images & Containers

**An image** is a lightweight, standalone, executable package that includes everything needed to run an application:

- Application code
- Runtime environment
- System libraries
- Dependencies
- Configuration files
- Environment variables

**A container** is a runnable instance of an image:

- Think of the **image as the recipe** and the **container as the real cake**
- An image is static; a container is dynamic (running)
- You can create **multiple containers from one image**
- Each container runs independently with its own processes

#### Docker Volumes

**Docker volumes** are a persistent data storage mechanism that:

- Allows data to be shareable between host and container
- Enables data sharing between multiple containers
- Ensures data persistence even when containers are stopped or deleted
- Provides better performance than bind mounts
- Can be managed independently of containers
- Essential for databases and stateful applications

#### Docker Networks

**Docker networks** are communication channels that:

- Allow connection between containers
- Enable containers to communicate with the host
- Provide network isolation for security
- Support different network drivers (bridge, host, overlay)
- Enable service discovery in multi-container applications
- Facilitate microservices communication

### Docker Workflow

The Docker architecture consists of three main components:

#### 1. Docker Client

- The interface you interact with (command-line interface)
- Where you run Docker commands (`docker run`, `docker build`, etc.)
- Communicates with the Docker daemon
- Can connect to remote Docker hosts

#### 2. Docker Host (Docker Daemon)

- The background service that manages Docker objects
- Builds, runs, and distributes containers
- Listens for Docker API requests
- Manages images, containers, networks, and volumes
- The core of Docker's functionality

#### 3. Docker Registry (Docker Hub)

- A repository for Docker images
- **Docker Hub** is the default public registry
- Store and distribute Docker images
- Pull official images from trusted sources
- Push your own images for sharing
- Private registries available for enterprise use
- Version management and image tagging

**Typical workflow:**

1. Write a Dockerfile defining your application environment
2. Use Docker Client to build an image from the Dockerfile
3. Docker Daemon creates the image and stores it locally
4. Push the image to Docker Registry (Docker Hub) for sharing
5. Pull the image on any machine where you want to run it
6. Docker Daemon creates and runs containers from the image

### Essential Docker Commands

#### Image Commands

**Pull an image from Docker Hub:**

```bash
docker pull <image-name>:<tag>
docker pull nginx:latest
```

**Build an image from a Dockerfile:**

```bash
docker build -t <image-name>:<tag> .
docker build -t myapp:1.0 .
```

**List all images:**

```bash
docker image ls
```

**Remove an image:**

```bash
docker image rm <image-name>
```

**Push an image to Docker Hub:**

```bash
docker push <username>/<image-name>:<tag>
docker push johndoe/myapp:1.0
```

**Tag an image:**

```bash
docker tag <image-id> <new-name>:<tag>
docker tag myapp:1.0 myapp:latest
```

#### Container Commands

**Run a container:**

```bash
docker run <image-name>
docker run -d nginx                    # Run in detached mode (background)
docker run -p 8080:80 nginx           # Map port 8080 (host) to 80 (container)
docker run --name mycontainer nginx   # Give container a name
docker run -v /host/path:/container/path nginx  # Mount a volume
```

**List running containers:**

```bash
# List all containers (including stopped)
docker ps -a
```

**Stop a container:**

```bash
docker stop <container-id>
# or
docker stop <container-name>
```

**Start a stopped container:**

```bash
docker start <container-id>
```

**Restart a container:**

```bash
docker restart <container-id>
```

**Remove a container:**

```bash
docker rm <container-id>
# Force remove a running container
docker rm -f <container-id>
```

**View container logs:**

```bash
docker logs <container-id>
# Follow logs in real-time
docker logs -f <container-id>
```

**Execute a command in a running container:**

```bash
docker exec <container-id> <command>
# Open an interactive shell
docker exec -it <container-id> /bin/bash
```

#### Volume Commands

**Create a volume:**

```bash
docker volume create <volume-name>
```

**List volumes:**

```bash
docker volume ls
```

**Remove a volume:**

```bash
docker volume rm <volume-name>
```

**Remove all unused volumes:**

```bash
docker volume prune
```

#### Network Commands

**Create a network:**

```bash
docker network create <network-name>
```

**List networks:**

```bash
docker network ls
```

**Remove a network:**

```bash
docker network rm <network-name>
```

#### System Commands

**View Docker system information:**

```bash
docker info
```

**View Docker disk usage:**

```bash
docker system df
```

**Clean up unused resources (containers, images, networks):**

```bash
docker system prune
# Remove everything including volumes
docker system prune -a --volumes
```

**Check Docker version:**

```bash
docker --version
# Detailed version info
docker version
```

#### Docker Compose Commands

**Start services defined in docker-compose.yml:**

```bash
docker-compose up
# Run in detached mode
docker-compose up -d
```

**Stop services:**

```bash
docker-compose down
```

**View service logs:**

```bash
docker-compose logs
# Follow logs
docker-compose logs -f
```

**List running services:**

```bash
docker-compose ps
```

**Build or rebuild services:**

```bash
docker-compose build
```

**Execute a command in a service:**

```bash
docker-compose exec <service-name> <command>
```

### Dockerfile Commands

A **Dockerfile** is a text file containing instructions to build a Docker image. Each instruction creates a layer in the image.

#### FROM

Sets the base image for your Docker image. This is always the first instruction in a Dockerfile.

```dockerfile
FROM ubuntu:22.04
FROM node:18-alpine
FROM python:3.11-slim
```

#### WORKDIR

Sets the working directory for subsequent instructions. Creates the directory if it doesn't exist.

```dockerfile
WORKDIR /app
WORKDIR /usr/src/app
```

#### COPY

Copies files or directories from the host machine into the container image.

```dockerfile
COPY . .
COPY package.json /app/
COPY src/ /app/src/
COPY --chown=user:group file.txt /app/
```

#### ADD

Similar to COPY but with additional features (can extract tar files and download from URLs). Prefer COPY for simple file copying.

```dockerfile
ADD archive.tar.gz /app/
ADD https://example.com/file.zip /app/
ADD . /app
```

#### RUN

Executes commands during the image build process. Creates a new layer with the results.

```dockerfile
RUN apt-get update && apt-get install -y curl
RUN npm install
RUN pip install -r requirements.txt
RUN mkdir -p /app/data
# Multiple commands in one RUN (reduces layers)
RUN apt-get update && \
    apt-get install -y python3 && \
    apt-get clean
```

#### CMD

Provides default command to run when container starts. Only one CMD instruction is used (last one wins).

```dockerfile
CMD ["npm", "start"]
CMD ["python", "app.py"]
CMD ["node", "server.js"]
# Shell form
CMD npm start
```

#### ENTRYPOINT

Configures the container to run as an executable. Unlike CMD, ENTRYPOINT is not overridden by command-line arguments.

```dockerfile
ENTRYPOINT ["python", "app.py"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# Combined with CMD for default arguments
ENTRYPOINT ["python"]
CMD ["app.py"]
```

#### ENV

Sets environment variables in the container.

```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
ENV API_KEY=your-api-key
# Multiple variables
ENV APP_HOME=/app \
    APP_USER=appuser
```

#### ARG

Defines build-time variables that can be passed during image build.

```dockerfile
ARG VERSION=1.0
ARG BUILD_DATE
ARG NODE_VERSION=18
# Use in FROM
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}
```

Build with: `docker build --build-arg VERSION=2.0 .`

#### EXPOSE

Declares which ports the container listens on at runtime. This is documentation only.

```dockerfile
EXPOSE 80
EXPOSE 3000
EXPOSE 8080/tcp
EXPOSE 8080/udp
```

#### VOLUME

Creates a mount point for persistent data storage.

```dockerfile
VOLUME /data
VOLUME ["/var/log", "/var/db"]
```

#### USER

Sets the user (and optionally group) to use when running the image.

```dockerfile
USER node
USER www-data
USER 1001
USER appuser:appgroup
```

#### LABEL

Adds metadata to the image as key-value pairs.

```dockerfile
LABEL version="1.0"
LABEL description="My application"
LABEL maintainer="you@example.com"
```

#### HEALTHCHECK

Tells Docker how to test if the container is still working.

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
HEALTHCHECK CMD wget --quiet --tries=1 --spider http://localhost:8080/health || exit 1
```

#### SHELL

Overrides the default shell used for the shell form of commands.

```dockerfile
SHELL ["/bin/bash", "-c"]
SHELL ["powershell", "-command"]
```

#### ONBUILD

Adds a trigger instruction to be executed when the image is used as a base for another build.

```dockerfile
ONBUILD COPY . /app
ONBUILD RUN npm install
```

#### Example Dockerfile

**Node.js Application:**

```dockerfile
# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Set environment variable
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Start application
CMD ["node", "server.js"]
```

**Python Application:**

```dockerfile
# Use Python base image
FROM python:3.11-slim

# Set working directory
WORKDIR /usr/src/app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Run the application
CMD ["python", "main.py"]
```

**Best Practices:**

- Use specific base image tags (avoid `latest`)
- Minimize the number of layers by combining RUN commands
- Use `.dockerignore` file to exclude unnecessary files
- Run containers as non-root users for security
- Use multi-stage builds for smaller images
- Order instructions from least to most frequently changing
- Clean up package manager caches in the same RUN command

## Essential Skills for DevOps

### Cloud Providers

**Know the cloud providers** - it's recommended to learn one first, as others become easier after that:

- **AWS** (Amazon Web Services) is a great starting point
- Understanding of cloud services: compute, storage, networking, databases
- Once you master one cloud platform, concepts transfer to others

### Scripting and Programming

- **Bash/Shell scripting**: Essential for automation and system administration tasks
- **JavaScript or Python**: Being comfortable with at least one high-level programming language
- These languages help in writing automation scripts, tools, and utilities

### Taking It Step by Step

Don't try to learn everything at once. Build your knowledge incrementally and practice consistently.

## GIT & GitHub

**Git** is a **distributed version control system** that:

- Tracks changes in your codebase over time
- Enables collaboration among multiple developers
- Allows branching and merging for parallel development
- Maintains complete history of project changes
- Works offline with local repositories

**GitHub** provides a platform for:

- Hosting Git repositories remotely
- Facilitating team collaboration
- Code review through pull requests
- Project management and issue tracking
- CI/CD integration capabilities

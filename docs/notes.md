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
